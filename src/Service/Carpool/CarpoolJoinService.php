<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use App\Service\User\CreditsManager;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\SecurityBundle\Security;

class CarpoolJoinService
{
    public function __construct(
        private DocumentManager $documentManager,
        private CarpoolHandler $carpoolHandler,
        private Security $security,
        private CreditsManager $creditsManager,
    ) {
    }

    /**
     * Handles a user joining a carpool.
     *
     * This method adds the given passenger to the carpool, updates the available seat count,
     * and persists the changes in the database.
     *
     * @param Carpool $carpool the carpool to be updated
     *
     * @throws \LogicException if no user is authenticated
     */
    public function authenticatedUserJoinsCarpool(Carpool $carpool): void
    {
        /** @var User $passenger */
        $passenger = $this->security->getUser();
        if (!$passenger) {
            throw new \LogicException('No user is authenticated.
                It should be impossible to access CarpoolJoinService.');
        }
        // Add the passenger to the carpool
        $joinedCarpool = $this->carpoolHandler->addPassengerToCarpool($carpool, $passenger);
        // Update number of available seats
        $joinedCarpool->setNumberOfAvailableSeats($joinedCarpool->getNumberOfAvailableSeats() - 1);
        // Persist changes to the database
        $this->documentManager->persist($joinedCarpool);
        $this->documentManager->flush();
        // Update credits value in sql database (user table)
        $newCreditsValue = (int) $passenger->getCredits() - $carpool->getPricePerPerson();
        $this->creditsManager->updateCredits($passenger, $newCreditsValue);
    }

    /**
     * Checks if a user is already a passenger in a specific carpool.
     *
     * This method verifies whether the given user is already listed as a passenger
     * in the provided carpool.
     *
     * @param User    $passenger the user to check
     * @param Carpool $carpool   the carpool to verify
     *
     * @return bool true if the user is already a passenger, false otherwise
     */
    public function isUserAlreadyPassengerOfCarpool(User $passenger, Carpool $carpool): bool
    {
        return !empty(array_filter($carpool->getPassengers(),
            fn ($p) => $p['passengerId'] === $passenger->getId()));
    }
}
