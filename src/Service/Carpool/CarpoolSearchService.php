<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Repository\CarpoolRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Form\FormInterface;

class CarpoolSearchService
{
    public function __construct(
        private DocumentManager $documentManager,
    ) {
    }

    public function executeSearchQueryWithFormData(FormInterface $carpoolSearchForm): array
    {
        /** @var CarpoolRepository $carpoolRepository */
        $carpoolRepository = $this->documentManager->getRepository(Carpool::class);

        $departureTime = $carpoolSearchForm->get('departureTime')->getData() ?? new \DateTimeImmutable('+1 hour');
        $departureCity = $carpoolSearchForm->get('departureCity')->getData();
        $arrivalCity = $carpoolSearchForm->get('arrivalCity')->getData();

        $carpoolSearchResults = $carpoolRepository->searchCarpools($departureCity, $arrivalCity, $departureTime);

        return $carpoolSearchResults ?? [];
    }

    /**
     * Validates the departure time to ensure it is a future date.
     */
    public function isValidDepartureTime(?\DateTimeImmutable $departureTime): bool
    {
        return $departureTime instanceof \DateTimeImmutable && $departureTime > new \DateTimeImmutable();
    }
}
