<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\User\CreditsManager;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

final class CarpoolCancelService
{
    public function __construct(
        private UserRepository $userRepository,
        private DocumentManager $documentManager,
        private CarpoolHandler $carpoolHandler,
        private MailerInterface $mailer,
        private CreditsManager $creditsManager,
    ) {
    }

    public function cancelCarpool(Carpool $carpool, User $user): void
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
        // Refund passenger and update the carpool status
        $this->returnCreditsToPassengers($carpool);
        $carpool->setStatus(CarpoolStatusManager::STATUS_CANCELED);

        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    public function cancelParticipation(Carpool $carpool, User $user): void
    {
        // Check if user is really a passenger
        $isPassenger = false;
        foreach ($carpool->getPassengers() as $passengerData) {
            if ($passengerData['passengerId'] === $user->getId()) {
                $isPassenger = true;
            }
        }
        if (!$isPassenger) {
            throw new \LogicException('Vous ne participiez pas au covoiturage sélectionné.');
        }

        // Update the passengers attribute of carpool
        $this->carpoolHandler->removePassengerFromCarpool($carpool, $user);

        // Send a notification to the driver
        $driver = $this->userRepository->findUserPseudoAndEmailByUserId($carpool->getDriverUserId());
        if ($driver) {
            $this->notifyDriver($driver, $user, $carpool);
        }
        // Refund passenger
        $this->returnCreditsToPassenger($carpool, $user);

        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    private function notifyPassenger(User $passenger, Carpool $carpool): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('mailer@ecoride.site', 'EcoRide Mail Bot'))
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

    private function returnCreditsToPassengers(Carpool $carpool): void
    {
        foreach ($carpool->getPassengers() as $passengerData) {
            $passenger = new User();
            $passengerCredits = $this->userRepository->findCreditsByUserId($passengerData['passengerId']);
            $passenger->setId($passengerData['passengerId'])->setCredits($passengerCredits);
            $this->creditsManager->updateCredits($passenger, $passengerCredits + $carpool->getPricePerPerson());
        }
    }

    private function notifyDriver(User $driver, User $passenger, Carpool $carpool): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('mailer@ecoride.site', 'EcoRide Mail Bot'))
            ->to($driver->getEmail())
            ->subject('Annulation de participation à un covoiturage')
            ->htmlTemplate('_emails/carpoolParticipationCancellation.html.twig')
            ->context([
                'driverPseudo' => $driver->getPseudo(),
                'passengerPseudo' => $passenger->getPseudo(),
                'departureCity' => $carpool->getDepartureCity(),
                'arrivalCity' => $carpool->getArrivalCity(),
                'departureTime' => $carpool->getDepartureTime(),
            ]);

        $this->mailer->send($email);
    }

    private function returnCreditsToPassenger(Carpool $carpool, User $passenger): void
    {
        $user = new User();
        $passengerCredits = $this->userRepository->findCreditsByUserId($passenger->getId());
        $user->setId($passenger->getId())->setCredits($passengerCredits);
        $this->creditsManager->updateCredits($user, $passengerCredits + $carpool->getPricePerPerson());
    }
}
