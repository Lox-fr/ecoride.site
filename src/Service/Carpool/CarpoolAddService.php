<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Entity\User;
use App\Document\Carpool;
use App\Service\Carpool\CarpoolHandler;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Form\FormInterface;

class CarpoolAddService
{
    public function __construct(
        private DocumentManager $documentManager,
        private CarpoolHandler $carpoolHandler,
    ) {
    }

    public function populateAndSaveCarpool(Carpool $carpool, User $driver, FormInterface $carpoolForm)
    {
        // Populate and save the carpool
        $hydratedCarpool = $this->carpoolHandler->populateCarpoolWithDriverAndFormDetails(
            $carpool, $carpoolForm, $driver);
        $hydratedCarpool->setStatus('open');
        $this->documentManager->persist($hydratedCarpool);
        $this->documentManager->flush();
    }

    /**
     * Validates the departure time to ensure it is at least 1 hour in the future.
     */
    public function isValidDepartureTime(?\DateTimeImmutable $departureTime): bool
    {
        return $departureTime instanceof \DateTimeImmutable && $departureTime > new \DateTimeImmutable('+1 hour');
    }
}
