<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Carpool;
use App\Service\Carpool\CarpoolCancelService;
use App\Service\Carpool\CarpoolSearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Attribute\Route;

final class CancelCarpoolController extends AbstractController
{
    #[Route('/covoiturage/annuler/{carpoolId}', name: 'app_carpool_cancel')]
    public function cancelCarpool(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        CarpoolCancelService $carpoolCancelService,
    ): RedirectResponse {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        // Check if user is authenticated
        if (!$user) {
            $this->addFlash('warning', 'Vous devez être connecté(e) pour annuler un covoiturage.');

            return $this->redirectToRoute('app_login');
        }

        // Check if carpool exists
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage que vous recherchez n\'existe pas.');

            return $this->redirectToRoute('app_home');
        }

        // Check if it belongs to authenticated user
        if ($carpool->getDriverUserId() !== $user->getId()) {
            $this->addFlash('error', 'Vous ne pouvez annuler que les covoiturages que vous avez vous-même organisés.');

            return $this->redirectToRoute('app_home');
        }

        // Cancel the carpool
        $carpoolCancelService->cancelCarpool($carpool, $user);
        $this->addFlash('success', 'Le covoiturage a bien été annulé.');

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    #[Route('/covoiturage/annuler/participation/{carpoolId}', name: 'app_carpool_cancel_participation')]
    public function cancelParticipation(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        CarpoolCancelService $carpoolCancelService,
    ): RedirectResponse {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        // Check if user is authenticated
        if (!$user) {
            $this->addFlash('warning', 'Vous devez être connecté(e) pour annuler la participation à ce covoiturage.');

            return $this->redirectToRoute('app_login');
        }

        // Check if carpool exists
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage que vous recherchez n\'existe pas.');

            return $this->redirectToRoute('app_home');
        }

        // Check if user is passenger
        $isPassenger = false;
        foreach ($carpool->getPassengers() as $passengerData) {
            if ($passengerData['passengerId'] === $user->getId()) {
                $isPassenger = true;
            }
        }
        if (!$isPassenger) {
            $this->addFlash('error', 'Vous ne participiez pas au covoiturage sélectionné.');

            return $this->redirectToRoute('app_home');
        }

        // Cancel the participation of authenticated user to the carpool
        $carpoolCancelService->cancelParticipation($carpool, $user);
        $this->addFlash('success', 'Votre participation au covoiturage a bien été annulé.');

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }
}
