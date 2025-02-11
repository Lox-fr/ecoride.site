<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use Doctrine\ODM\MongoDB\DocumentManager;

class CarpoolStatusManager
{
    public const STATUS_OPEN = 'open';
    public const STATUS_IN_PROGRESS = 'inProgress';
    public const STATUS_ARRIVED = 'arrived';
    public const STATUS_VALIDATED = 'validated';
    public const STATUS_CONTESTED = 'contested';
    public const STATUS_DONE = 'done';
    public const STATUS_CANCELED = 'canceled';

    public function __construct(
        private DocumentManager $documentManager,
    ) {
    }

    public function saveCarpoolAsInProgress(Carpool $carpool)
    {
        $carpool->setStatus(self::STATUS_IN_PROGRESS);
        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    public function saveCarpoolAsArrived(Carpool $carpool)
    {
        $carpool->setStatus(self::STATUS_ARRIVED);
        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    /**
     * Save the carpool as validated or done depending on the number of validations.
     *
     * @param Carpool $carpool                the carpool to save
     * @param User    $authenticatedPassenger the authenticated passenger
     *
     * @return void the carpool is saved
     */
    public function saveCarpoolAsValidatedOrDone(Carpool $carpool, User $authenticatedPassenger)
    {
        $numberOfValidations = 0;
        $passengers = $carpool->getPassengers();
        foreach ($passengers as &$passengerData) {

            if ($passengerData['passengerId'] === $authenticatedPassenger->getId()) {
                $passengerData['hasValidatedTheRide'] = true;
            }

            if ($passengerData['hasValidatedTheRide']) {
                ++$numberOfValidations;
            }
        }

        // Update the passengers data in the carpool object
        $carpool->setPassengers($passengers);

        if ($numberOfValidations < (int) \count($carpool->getPassengers())) {
            $carpool->setStatus(self::STATUS_VALIDATED);
        } else {
            $carpool->setStatus(self::STATUS_DONE);
        }

        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }
}
