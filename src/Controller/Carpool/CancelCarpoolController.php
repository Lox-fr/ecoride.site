<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Carpool;
use App\Service\Carpool\CarpoolCancelService;
use App\Service\Carpool\CarpoolSearchService;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class CancelCarpoolController extends AbstractController
{
    #[Route('/covoiturage/annuler/{carpoolId}', name: 'app_carpool_cancel')]
    public function index(
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

        // Check if carpool exists and is not already canceled
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
        $carpoolCancelService->cancel($carpool, $user);
        $this->addFlash('success', 'Le covoiturage a bien été annulé.');

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }
}
