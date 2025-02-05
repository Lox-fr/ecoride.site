<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Entity\User;
use App\Document\Carpool;
use App\Repository\UserRepository;
use App\Service\User\CreditsManager;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

final class CarpoolCancelService
{
    public function __construct(
        private DocumentManager $documentManager,
        private UserRepository $userRepository,
        private MailerInterface $mailer,
        private CreditsManager $creditsManager,
    ) {
    }

    public function cancel(Carpool $carpool, User $user): void
    {
        // Check if user is really the driver
        if ($carpool->getDriverUserId() !== $user->getId()) {
            throw new \LogicException('Vous n\'êtes autorisé à supprimer que les covoiturages que vous avez créés.');
        }
        // Send a notification to the passengers
        foreach ($carpool->getPassengers() as $passengerData) {
            $passenger = $this->userRepository->findUserPseudoAndEmailByUserId($passengerData['passengerId']);
            if ($passenger) {
                $this->notifyPassenger($passenger, $carpool);
            }
        }
        $this->returnCreditsToPassengers($carpool);
        // Update the carpool status
        $carpool->setStatus('canceled');

        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    private function notifyPassenger(User $passenger, Carpool $carpool): void
    {
        $email = (new TemplatedEmail())
            ->from('ne-pas-repondre@ecoride.com')
            ->to($passenger->getEmail())
            ->subject('Annulation de covoiturage')
            ->htmlTemplate('_emails/carpoolCancellation.html.twig')
            ->context([
                'passengerPseudo' => $passenger->getPseudo(),
                'driverPseudo' => $carpool->getDriverPseudo(),
                'departurePlace' => $carpool->getDeparturePlace(),
                'departureCity' => $carpool->getDepartureCity(),
                'arrivalPlace' => $carpool->getArrivalPlace(),
                'arrivalCity' => $carpool->getArrivalCity(),
                'departureTime' => $carpool->getDepartureTime(),
                'pricePerPerson' => $carpool->getPricePerPerson(),
            ]);

        $this->mailer->send($email);
    }

    public function returnCreditsToPassengers(Carpool $carpool): void
    {
        foreach ($carpool->getPassengers() as $passengerData) {
            $passenger = new User();
            $passengerCredits = $this->userRepository->findCreditsByUserId($passengerData['passengerId']);
            $passenger->setId($passengerData['passengerId'])->setCredits($passengerCredits);
            $this->creditsManager->updateCredits($passenger, $passengerCredits + $carpool->getPricePerPerson());
        }
    }
}
