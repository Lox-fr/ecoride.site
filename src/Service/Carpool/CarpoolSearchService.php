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
}
