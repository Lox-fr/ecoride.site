<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Mailer\MailerInterface;

class CarpoolEndService
{
    public function __construct(
        private Security $security,
        private DocumentManager $documentManager,
        private UserRepository $userRepository,
        private MailerInterface $mailer,
        private CarpoolStatusManager $carpoolStatusManager,
    ) {
    }

    /**
     * Sends an email to each passenger of a given carpool
     * to ask them to confirm their participation in the completed carpool.
     */
    public function notifyPassengers(Carpool $carpool): void
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
