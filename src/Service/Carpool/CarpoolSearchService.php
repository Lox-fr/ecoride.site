<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
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
}
