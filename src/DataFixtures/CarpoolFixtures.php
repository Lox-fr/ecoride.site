<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Document\Carpool;
use App\Document\Review;
use App\Entity\User;
use Doctrine\Bundle\MongoDBBundle\Fixture\Fixture;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CarpoolFixtures extends Fixture
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function load(ObjectManager $manager): void
    {
        if (!$manager instanceof DocumentManager) {
            throw new \RuntimeException('Expected DocumentManager');
        }

        $faker = Factory::create('fr_FR');

        $userRepository = $this->entityManager->getRepository(User::class);
        $passengers = $userRepository->findAll();
        $drivers = array_filter($passengers, function ($driver) {
            return $driver->getId() >= 1 && $driver->getId() <= 15;
        });

        $cities8 = [
            'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier',
        ];
        $cities16 = [
            'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Angers',
        ];
        $cities32 = [
            'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Angers', 'Villeurbanne', 'Le Mans', 'Aix-en-Provence', 'Nîmes', 'Clermont-Ferrand', 'Amiens', 'Antibes', 'La Rochelle', 'Perpignan', 'Brest', 'Tours', 'Limoges', 'Montargis', 'Cannes', 'Metz', 'Rouen',
        ];

        $places = [
            'Place de la Mairie', 'Gare', 'Rue de la République', "Place de l'Église", 'Rue de la Liberté', 'Rue du 11 Novembre', 'Avenue de la Gare', 'Place du Marché', 'Rue du Général Leclerc', "Place de l'Hotel de Ville", 'Boulevard des Invalides', 'Allée des Tilleuls', "Rue de l'Opéra", 'Place de la Concorde', 'Rue du Soleil Levant', 'Boulevard de la Mer', 'Place du Tertre', 'Rue du Mont-Saint-Michel', 'Passage du Commerce', 'Rue de la Fontaine', 'Place des Fêtes', 'Rue de la Paix', 'Boulevard Saint-Germain', 'Place des Vosges', 'Rue de la Tour', 'Rue du Faubourg Saint-Antoine', "Square de l'Indépendance", 'Rue des Lilas', 'Place de la République', 'Chemin des Vignes', 'Rue des Écoles', 'Boulevard de la Liberté', 'Rue du Château', 'Place du Palais', "Avenue de l'Indépendance", 'Place Saint-Michel', 'Place de la Fontaine', 'Rue de la Mare', 'Place du Carrousel', 'Rue du Parc', 'Quai de la Seine', "Place de l'Ancienne Mairie", 'Rue des Acacias', 'Chemin de la Mer', 'Rue du Port',
        ];

        for ($i = 0; $i < 960; ++$i) { // Creation of 960 past carpools

            $departureTime = $faker->dateTimeBetween('2024-07-02', 'now');
            $arrivalTime = $departureTime->modify('+'.mt_rand(1, 5).' hours');

            $departurePlace = $faker->randomElement($places);
            do {
                $arrivalPlace = $faker->randomElement($places);
            } while ($departurePlace === $arrivalPlace);

            $totalSeats = $faker->numberBetween(1, 4);

            $statusArray = array_merge(array_fill(0, 14, 'done'), ['cancelled']); // 1 out of 15 carpools cancelled

            $createdAt = $faker->dateTimeBetween('2024-07-01', $departureTime);

            $driver = $faker->randomElement($drivers);

            $preferences = $driver->getPreferences();
            $driverPreferences = [];
            if (\count($preferences) > 0) {
                foreach ($preferences as $preference) {
                    $driverPreferences[] = $preference->getLabel();
                }
            } else {
                $driverPreferences = null;
            }

            $driverCars = $driver->getCars();
            $car = $faker->randomElement($driverCars);

            $carpoolPassengers = $this->generatePassengers($faker, $driver, $passengers, $totalSeats);

            $carpool = new Carpool();
            $carpool
                ->setDepartureTime(\DateTimeImmutable::createFromMutable($departureTime))
                ->setDepartureCity($faker->randomElement($cities16))
                ->setDeparturePlace($departurePlace)
                ->setArrivalTime(\DateTimeImmutable::createFromMutable($arrivalTime))
                ->setArrivalCity($faker->randomElement($cities32))
                ->setArrivalPlace($arrivalPlace)
                ->setPricePerPerson($faker->randomFloat(2, 5, 50))
                ->setTotalNumberOfSeats($totalSeats)
                ->setNumberOfAvailableSeats(0)
                ->setStatus($faker->randomElement($statusArray))
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($createdAt))

                ->setDriverUserId($driver->getId())
                ->setDriverPhotoName($driver->getPhotoName())
                ->setDriverAge($driver->getAge())
                ->setDriverPetsAllowed($driver->isPetsAllowed())
                ->setDriverSmokersAllowed($driver->isSmokersAllowed())
                ->setDriverPreferences($driverPreferences)
                ->setDriverAverageRating($driver->getAverageRating())

                ->setCarBrand($car->getBrand()->getlabel())
                ->setCarModel($car->getModel())
                ->setCarColor($car->getColor()->getLabel())
                ->setCarEngineType($car->getEngineType()->getLabel())

                ->setPassengers($carpoolPassengers);

            // Add reviews for each carpool
            foreach (range(1, $faker->numberBetween(1, 5)) as $j) {
                $author = $faker->randomElement($carpoolPassengers);
                $review = new Review();
                $review
                    ->setCreatedAt(\DateTimeImmutable::createFromMutable($arrivalTime))
                    ->setComment($faker->text($faker->numberBetween(50, 500)))
                    ->setRating($faker->numberBetween(1, 5))
                    ->setStatus($faker->randomElement(['Approved', 'Pending', 'Rejected']))
                    ->setCarpool($carpool)
                    ->setAuthorUserId($author->getId())
                    ->setAuthorPseudo($author->getPseudo())
                    ->setAuthorPhotoPath($author->getPhotoName());
                $manager->persist($review);
                $carpool->addReview($review);
            }

            $manager->persist($carpool);
        }

        for ($i = 0; $i < 240; ++$i) { // Creation of 240 carpools to come this month

            $departureTime = $faker->dateTimeBetween('now', '+1 month');
            $arrivalTime = $departureTime->modify('+'.mt_rand(1, 5).' hours');

            $departurePlace = $faker->randomElement($places);
            do {
                $arrivalPlace = $faker->randomElement($places);
            } while ($departurePlace === $arrivalPlace);

            $totalSeats = $faker->numberBetween(1, 4);

            $statusArray = array_merge(array_fill(0, 14, 'open'), ['cancelled']);

            $createdAt = $faker->dateTimeBetween('-1 week', $departureTime);

            $driver = $faker->randomElement($drivers);
            $car = $faker->randomElement($driver->getCars());

            $carpoolPassengers = $this->generatePassengers($faker, $driver, $passengers, $totalSeats);
            $availableSeats = $totalSeats - \count($carpoolPassengers);
            $status = 0 === $availableSeats ? 'full' : $faker->randomElement($statusArray);

            $carpool = new Carpool();
            $carpool
                ->setDepartureTime(\DateTimeImmutable::createFromMutable($departureTime))
                ->setDepartureCity($faker->randomElement($cities16))
                ->setDeparturePlace($faker->randomElement($places))
                ->setArrivalTime(\DateTimeImmutable::createFromMutable($arrivalTime))
                ->setArrivalCity($faker->randomElement($cities8))
                ->setArrivalPlace($faker->randomElement($places))
                ->setPricePerPerson($faker->randomFloat(2, 5, 50))
                ->setTotalNumberOfSeats($totalSeats)
                ->setNumberOfAvailableSeats($availableSeats)
                ->setStatus($status)
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($createdAt))

                ->setDriverUserId($driver->getId())
                ->setDriverPhotoName($driver->getPhotoName())
                ->setDriverAge($driver->getAge())
                ->setDriverPetsAllowed($driver->isPetsAllowed())
                ->setDriverSmokersAllowed($driver->isSmokersAllowed())
                ->setDriverPreferences($driverPreferences)
                ->setDriverAverageRating($driver->getAverageRating())

                ->setCarBrand($car->getBrand()->getlabel())
                ->setCarModel($car->getModel())
                ->setCarColor($car->getColor()->getLabel())
                ->setCarEngineType($car->getEngineType()->getLabel())

                ->setPassengers($carpoolPassengers);

            $manager->persist($carpool);
        }

        $manager->flush();
    }

    /**
     * Generates a passenger table for each trip.
     *
     * @param \Faker\Generator $faker      - Faker instance to generate random data
     * @param User             $driver     - the carpool driver, excluding passengers
     * @param User[]           $passengers - list of potential users to become passengers
     * @param int              $totalSeats - total number of seats available in the carpool
     */
    private function generatePassengers($faker, $driver, $passengers, $totalSeats): array
    {
        $carpoolPassengers = [];
        $driverId = $driver->getId();
        for ($i = 0; $i < $faker->numberBetween(1, $totalSeats); ++$i) {
            do {
                $passenger = $faker->randomElement($passengers);
            } while ($passenger->getId() === $driverId);
            $carpoolPassengers[] = $passenger;
        }

        return $carpoolPassengers;
    }
}
