<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use App\Repository\CarpoolRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Form\FormInterface;

final class CarpoolSearchService
{
    private CarpoolRepository $carpoolRepository;

    public function __construct(
        private DocumentManager $documentManager,
    ) {
        $this->carpoolRepository = $documentManager->getRepository(Carpool::class);
    }

    public function executeSearchQueryWithFormData(FormInterface $carpoolSearchForm): array
    {
        $departureTime = $carpoolSearchForm->get('departureTime')->getData() ?? new \DateTimeImmutable('+1 hour');
        $departureCity = $carpoolSearchForm->get('departureCity')->getData();
        $arrivalCity = $carpoolSearchForm->get('arrivalCity')->getData();

        $carpoolSearchResults = $this->carpoolRepository->searchCarpools($departureCity, $arrivalCity, $departureTime);

        return $carpoolSearchResults ?? [];
    }

    /**
     * Validates the departure time to ensure it is a future date.
     */
    public function isValidDepartureTime(?\DateTimeImmutable $departureTime): bool
    {
        return $departureTime instanceof \DateTimeImmutable && $departureTime > new \DateTimeImmutable();
    }

    /**
     * Finds a carpool by its ID.
     */
    public function findOneCarpoolByItsId(string $carpoolId): ?Carpool
    {
        return $this->carpoolRepository->find($carpoolId);
    }

    /**
     * Find all carpools where the user is either the driver or a passenger.
     *
     * This method retrieves carpools where the given user is either the driver or one of the passengers.
     *
     * @param User $user the user whose carpools we want to find
     *
     * @return Carpool[] an array of Carpool objects
     */
    public function findCarpoolsByUser(User $user): array
    {
        // Search carpool where user is driver
        $driverCarpools = $this->carpoolRepository->findBy([
            'driverUserId' => $user->getId(),
        ]);
        // Search carpool where user is passenger
        $passengerCarpools = $this->carpoolRepository->findBy([
            'passengers.passengerId' => $user->getId(),
        ]);
        // Merge the two results
        $carpools = array_merge($driverCarpools, $passengerCarpools);

        return $carpools;
    }

    /**
     * Returns a user's trips separated into upcoming, in progress and past trips, grouped by year.
     * "inProgress", "arrived" and "contested" statuses are considered as "inProgress".
     *
     * @return array<string, array<int, Carpool>>
     */
    public function getUserCarpools(User $user): array
    {
        $userCarpools = $this->findCarpoolsByUser($user);
        // Separate past, in progress and upcoming carpools
        $currentCarpools = [];
        $upcomingCarpools = [];
        $pastCarpools = [];
        $currentDate = new \DateTimeImmutable();
        foreach ($userCarpools as $carpool) {
            if (CarpoolStatusManager::STATUS_IN_PROGRESS === $carpool->getStatus()
            || CarpoolStatusManager::STATUS_ARRIVED === $carpool->getStatus()
            || CarpoolStatusManager::STATUS_CONTESTED === $carpool->getStatus()) {
                $currentCarpools[] = $carpool;
            } elseif ($carpool->getDepartureTime() >= $currentDate) {
                $upcomingCarpools[] = $carpool;
            } else {
                $pastCarpools[] = $carpool;
            }
        }
        // Sort past and upcoming carpools
        usort($upcomingCarpools, function ($a, $b) {
            return $a->getDepartureTime() <=> $b->getDepartureTime();
        });
        usort($pastCarpools, function ($a, $b) {
            return $a->getDepartureTime() <=> $b->getDepartureTime();
        });
        // Group by year
        $pastCarpoolsByYear = [];
        foreach ($pastCarpools as $carpool) {
            $year = $carpool->getDepartureTime()->format('Y');
            if (!isset($pastCarpoolsByYear[$year])) {
                $pastCarpoolsByYear[$year] = [];
            }
            $pastCarpoolsByYear[$year][] = $carpool;
        }
        // Sort years in descending order
        krsort($pastCarpoolsByYear);
        // Sort carpools in each year in descending order
        foreach ($pastCarpoolsByYear as $year => &$carpoolsInYear) {
            usort($carpoolsInYear, function ($a, $b) {
                return $b->getDepartureTime() <=> $a->getDepartureTime();
            });
        }

        return [
            'pastCarpoolsByYear' => $pastCarpoolsByYear,
            'currentCarpools' => $currentCarpools,
            'upcomingCarpools' => $upcomingCarpools,
        ];
    }
}
