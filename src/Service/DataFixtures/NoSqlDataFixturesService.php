<?php

declare(strict_types=1);

namespace App\Service\DataFixtures;

use App\Document\Carpool;
use App\Document\Review;
use App\Entity\Car;
use App\Entity\User;
use App\Service\Carpool\CarpoolStatusManager;
use App\Service\DataFixtures\DataProviders\CarpoolPlacesProvider;
use App\Service\DataFixtures\DataProviders\CarpoolReviewMessagesProvider;
use App\Service\DataFixtures\DataProviders\CarpoolRidesProvider;
use App\Service\User\RatingManager;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ODM\MongoDB\DocumentManager;
use Faker\Factory;

class NoSqlDataFixturesService
{
    private const RATING_NEGATIVE = 2;
    private const RATING_NEUTRAL = 3;

    // 1 out of 20 carpools is cancelled
    private const PAST_CARPOOL_STATUSES = [
        CarpoolStatusManager::STATUS_DONE => 19,
        CarpoolStatusManager::STATUS_CANCELED => 1];
    private const FUTURE_CARPOOL_STATUSES = [
        CarpoolStatusManager::STATUS_OPEN => 19,
        CarpoolStatusManager::STATUS_CANCELED => 1];
    // 1 out of 40 reviews is rejected
    private const REVIEW_STATUSES = ['approved' => 39, 'rejected' => 1];

    private \Faker\Generator $faker;
    private array $pastCarpoolStatusArray;
    private array $futureCarpoolStatusArray;
    private array $reviewStatusArray;

    public function __construct(
        private DocumentManager $documentManager,
        private CarpoolPlacesProvider $carpoolPlacesProvider,
        private CarpoolRidesProvider $carpoolRidesProvider,
        private CarpoolReviewMessagesProvider $carpoolReviewMessagesProvider,
        private RatingManager $ratingManager,
    ) {
        $this->faker = Factory::create('fr_FR');
        $this->pastCarpoolStatusArray = $this->generateStatusArray(self::PAST_CARPOOL_STATUSES);
        $this->futureCarpoolStatusArray = $this->generateStatusArray(self::FUTURE_CARPOOL_STATUSES);
        $this->reviewStatusArray = $this->generateStatusArray(self::REVIEW_STATUSES);
    }

    /**
     * Loads popular carpools for the upcoming month.
     *
     * This method generates a set number of popular carpool rides for the next month
     * by randomly selecting drivers and their cars (currently 480 carpools for 12 rides).
     * Each carpool will have a departure time within the next month.
     * If the departure time falls within the next week, some passengers are added to the carpool.
     *
     * @param ArrayCollection $drivers    collection of available drivers
     * @param ArrayCollection $passengers collection of potential passengers
     */
    public function loadPopularCarpoolsForNextMonth(ArrayCollection $drivers, ArrayCollection $passengers,
    ): void {
        $carpoolRides = $this->carpoolRidesProvider->getCollectionOfPopularCarpools();
        foreach ($carpoolRides as $carpoolRide) {
            for ($i = 0; $i < 40; ++$i) {
                $driver = $this->getRandomDriver($drivers);
                $car = $this->faker->randomElement($driver->getCars());
                $departureTime = $this->faker->dateTimeBetween('now', '+1 month');

                $newCarpool = $this->createCarpoolInstance($carpoolRide, $departureTime, $driver, $car);

                // If the carpool is in the coming week, it already has one or more passengers
                $oneWeekLater = new \DateTimeImmutable('+1 week');
                if ($departureTime <= $oneWeekLater) {
                    $this->addPassengersToCarpool($newCarpool, $passengers, $car);
                }

                $this->documentManager->persist($newCarpool);
            }
        }
        $this->documentManager->flush();
    }

    /**
     * Loads past carpools for the 6 last months.
     *
     * This method generates a set number of carpool rides for 6 last months
     * by randomly selecting drivers and their cars (currently 2520 carpools for max 192 rides).
     * Each carpool have one or more passengers.
     * These passengers rate the carpools with 2 out of 3 leaving a rating note.
     * In this case, 1 out of 2 including a comment.
     *
     * @param ArrayCollection $drivers    collection of available drivers
     * @param ArrayCollection $passengers collection of potential passengers
     */
    public function loadPastCarpoolsForLast6Month(ArrayCollection $drivers, ArrayCollection $passengers,
    ): void {
        $carpoolRides = $this->carpoolRidesProvider->getCollectionOfCarpools();
        foreach ($carpoolRides as $carpoolRide) {
            for ($i = 0; $i < 15; ++$i) {
                $driver = $this->getRandomDriver($drivers);
                $car = $this->faker->randomElement($driver->getCars());
                $departureTime = $this->faker->dateTimeBetween('-6 months', 'now');

                $newCarpool = $this->createCarpoolInstance($carpoolRide, $departureTime, $driver, $car);

                // Each carpool had one or more passengers
                $carpoolPassengers = $this->addPassengersToCarpool($newCarpool, $passengers, $car);
                // 2 out of 3 passengers leave a review, and 1 out of 2 reviews contains a comment
                $this->handleReviewsFixtures($carpoolPassengers, $newCarpool, $driver);

                $this->documentManager->persist($newCarpool);
            }
            $this->documentManager->flush();
            $this->documentManager->clear();
        }
    }

    private function generateStatusArray(array $statuses): array
    {
        $result = [];
        foreach ($statuses as $status => $count) {
            $result = array_merge($result, array_fill(0, $count, $status));
        }

        return $result;
    }

    private function getRandomDriver(ArrayCollection $drivers): User
    {
        return $drivers->get(mt_rand(0, $drivers->count() - 1));
    }

    /**
     * Extract driver's preferences.
     *
     * @param User $driver
     *
     * @return array<int, string>
     */
    private function getDriverPreferences($driver): array
    {
        return array_map(fn ($preference) => $preference->getLabel(), $driver->getPreferences()->toArray());
    }

    // Calculate a random ride time around (plus or minus 15%) the values obtained by the provider
    private function getRandomRideTime($carpool): int
    {
        return (int) ceil($carpool->getEstimatedRideTime() * (1 + rand(-15, 15) / 100));
    }

    // Calculate a random price around (plus or minus 15%) the values obtained by the provider
    private function getRandomPrice($carpool): int
    {
        return (int) ceil($carpool->getPricePerPerson() * (1 + rand(-15, 15) / 100));
    }

    // Create a carpool instance with provided data
    private function createCarpoolInstance(
        Carpool $carpoolRide,
        \DateTime $departureTime,
        User $driver,
        Car $car,
    ): Carpool {
        $driverPreferences = $this->getDriverPreferences($driver);
        $estimatedRideTime = (int) $this->getRandomRideTime($carpoolRide);
        $pricePerPerson = (int) $this->getRandomPrice($carpoolRide);
        $arrivalTime = (clone $departureTime)->modify('+'.$estimatedRideTime.' minutes');
        $creationTime = (clone $departureTime)->modify('-1 week');
        $carpoolStatus = $this->faker->randomElement($this->pastCarpoolStatusArray);

        $currentDate = new \DateTimeImmutable();
        $carpoolStatusArray =
            $departureTime <= $currentDate ? $this->pastCarpoolStatusArray : $this->futureCarpoolStatusArray;
        $carpoolStatus = $this->faker->randomElement($carpoolStatusArray);

        $newCarpool = new Carpool();
        $newCarpool
            ->setDepartureCity($carpoolRide->getDepartureCity())
            ->setDepartureTime(\DateTimeImmutable::createFromMutable($departureTime))
            ->setDeparturePlace($this->carpoolPlacesProvider->getRandomCarpoolPlace())
            ->setEstimatedRideTime($estimatedRideTime)
            ->setArrivalTime(\DateTimeImmutable::createFromMutable($arrivalTime))
            ->setArrivalCity($carpoolRide->getArrivalCity())
            ->setArrivalPlace($this->carpoolPlacesProvider->getRandomCarpoolPlace())
            ->setPricePerPerson($pricePerPerson)
            ->setTotalNumberOfSeats($car->getNumberOfSeats())
            ->setNumberOfAvailableSeats($car->getNumberOfSeats())
            ->setStatus($carpoolStatus)
            ->setCreatedAt(\DateTimeImmutable::createFromMutable($creationTime))
            ->setDriverUserId($driver->getId())
            ->setDriverPseudo($driver->getPseudo())
            ->setDriverEmail($driver->getEmail())
            ->setDriverPhoneNumber($driver->getPhoneNumber())
            ->setDriverPhotoFilename($driver->getPhotoFilename())
            ->setDriverAge($driver->getAge())
            ->setDriverPetsAllowed($driver->isPetsAllowed())
            ->setDriverSmokersAllowed($driver->isSmokersAllowed())
            ->setDriverPreferences($driverPreferences)
            ->setDriverAverageRating($driver->getAverageRating())
            ->setCarBrand($car->getBrand()->getLabel())
            ->setCarModel($car->getModel())
            ->setCarColor($car->getColor()->getLabel())
            ->setCarEngineType($car->getEngineType()->getLabel());

        return $newCarpool;
    }

    /**
     * Add one or more passengers to the provided carpool and return it.
     * The numberOfAvailableSeats attribute is also updated.
     *
     * @return array<string, mixed>|null
     */
    private function addPassengersToCarpool(Carpool $carpool, ArrayCollection $passengers, Car $car): ?array
    {
        $carpoolPassengers = [];
        $numberOfPassengers = mt_rand(1, $car->getNumberOfSeats());
        $isFutureCarpool = $carpool->getDepartureTime() > new \DateTimeImmutable();
        for ($i = 0; $i < $numberOfPassengers; ++$i) {
            $passenger = $this->getRandomDriver($passengers);
            $carpoolPassengers[] = [
                'passengerId' => $passenger->getId(),
                'passengerPseudo' => $passenger->getPseudo(),
                'passengerEmail' => $passenger->getEmail(),
                'passengerPhotoFilename' => $passenger->getPhotoFilename(),
                'hasValidatedTheRide' => $isFutureCarpool ? false : boolval(mt_rand(0, 1)),
            ];
        }
        $carpool->setPassengers(array_values($carpoolPassengers));
        $carpool->setNumberOfAvailableSeats($car->getNumberOfSeats() - $numberOfPassengers);

        return $carpoolPassengers;
    }

    /**
     * Handle load of reviews fixtures.
     * 2 out of 3 passengers leave a review, and 1 out of 2 reviews contains a comment.
     */
    private function handleReviewsFixtures(array $carpoolPassengers, Carpool $ratedCarpool, User $driver,
    ): void {
        foreach ($carpoolPassengers as $passenger) {
            // 2 out of 3 passengers leave a review
            if (1 !== mt_rand(1, 3)) {
                $arrivalTime = $ratedCarpool->getArrivalTime();
                $reviewDate = (clone $arrivalTime)->modify('+35 minutes');
                $review = new Review();
                $review
                    ->setCreatedAt($reviewDate)
                    ->setRating($this->faker->numberBetween(2, 5))
                    ->setStatus($this->faker->randomElement($this->reviewStatusArray))
                    ->setCarpool($ratedCarpool)
                    ->setDriverUserId($ratedCarpool->getDriverUserId())
                    ->setAuthorUserId($passenger['passengerId'])
                    ->setAuthorPseudo($passenger['passengerPseudo'])
                    ->setAuthorEmail($passenger['passengerEmail'])
                    ->setAuthorPhotoFilename($passenger['passengerPhotoFilename']);

                // 1 out of 2 reviews contains a comment
                if (1 === mt_rand(1, 2)) {
                    if (self::RATING_NEGATIVE === $review->getRating()) {
                        $review->setComment($this->carpoolReviewMessagesProvider
                            ->getRandomNegativeReviewMessage());
                    } elseif (self::RATING_NEUTRAL === $review->getRating()) {
                        $review->setComment($this->carpoolReviewMessagesProvider
                            ->getRandomNeutralReviewMessage());
                    } else {
                        $review->setComment($this->carpoolReviewMessagesProvider
                            ->getRandomPositiveReviewMessage());
                    }
                }

                // record the rating in user entity (SQL database) if the review is approved
                if ('approved' === $review->getStatus()) {
                    $this->ratingManager->addARating($driver, $review->getRating());
                }

                $this->documentManager->persist($review);
                $ratedCarpool->addReview($review);
            }
        }
    }
}
