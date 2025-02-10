<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Entity\User;
use App\Document\Carpool;
use App\Repository\UserRepository;
use App\Service\User\CreditsManager;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class CarpoolEndService
{
    public function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private MailerInterface $mailer,
        private CarpoolStatusManager $carpoolStatusManager,
        private CreditsManager $creditsManager,
    ) {
    }

    public function driverStartsCarpool(Carpool $carpool): void
    {
        // Change carpool status to "inProgress"
        if (CarpoolStatusManager::STATUS_IN_PROGRESS !== $carpool->getStatus()) {
            $this->carpoolStatusManager->saveCarpoolAsInProgress($carpool);
        }
    }

    public function driverFinishesCarpool(Carpool $carpool): void
    {
        // Change carpool status to "arrived"
        if (CarpoolStatusManager::STATUS_ARRIVED !== $carpool->getStatus()) {
            $this->carpoolStatusManager->saveCarpoolAsArrived($carpool);
            // Send email to passengers to ask them to validate their participation
            $this->notifyPassengers($carpool);
        }
    }

    public function passengerValidatesCarpool(Carpool $carpool, bool $creditDriver = false): void
    {
        // Change carpool status to "validated" or "done" if necessary
        if (CarpoolStatusManager::STATUS_DONE !== $carpool->getStatus()) {
            $passenger = $this->security->getUser();
            if ($passenger) {
                $this->carpoolStatusManager->saveCarpoolAsValidatedOrDone($carpool, $passenger);
            }
        }
        // Credits a ride to the driver
        if ($creditDriver) {
            $this->creditsManager->creditARideToTheDriver($carpool);
        }
    }

    /**
     * Sends an email to each passenger of a given carpool
     * to ask them to confirm their participation in the completed carpool.
     */
    private function notifyPassengers(Carpool $carpool): void
    {
        foreach ($carpool->getPassengers() as $passengerData) {
            $passenger = $this->userRepository->findUserPseudoAndEmailByUserId((int) $passengerData['passengerId']);
            if ($passenger) {
                $this->notifyPassenger($passenger, $carpool);
            }
        }
    }

    /**
     * Sends a templated email to notify a passenger about carpool validation.
     */
    private function notifyPassenger(User $passenger, Carpool $carpool): void
    {
        $email = (new TemplatedEmail())
            ->from('ne-pas-repondre@ecoride.com')
            ->to($passenger->getEmail())
            ->subject('Validation d\'un covoiturage')
            ->htmlTemplate('_emails/carpoolValidation.html.twig')
            ->context([
                'passengerPseudo' => $passenger->getPseudo(),
                'driverPseudo' => $carpool->getDriverPseudo(),
                'departureCity' => $carpool->getDepartureCity(),
                'arrivalCity' => $carpool->getArrivalCity(),
                'departureTime' => $carpool->getDepartureTime(),
            ]);

        $this->mailer->send($email);
    }
}
