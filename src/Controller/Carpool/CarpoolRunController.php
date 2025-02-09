<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Carpool;
use App\Service\Carpool\CarpoolEndService;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Carpool\CarpoolStatusManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Attribute\Route;

final class CarpoolRunController extends AbstractController
{
    #[Route('/covoiturage/commencer/{carpoolId}', name: 'app_carpool_start')]
    public function start(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        CarpoolStatusManager $carpoolStatusManager,
    ): RedirectResponse {
        // Carpool validation : if exist, if has "open" status, if authenticated user is driver
        $carpool = $this->validateCarpool($carpoolId, $carpoolSearchService, 'start');
        if ($carpool instanceof RedirectResponse) {
            return $carpool;
        }

        // Change carpool status to "inProgress"
        $carpoolStatusManager->startCarpool($carpool);

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    #[Route('/covoiturage/terminer/{carpoolId}', name: 'app_carpool_finish')]
    public function finish(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        CarpoolStatusManager $carpoolStatusManager,
        CarpoolEndService $carpoolEndService,
    ): RedirectResponse {
        // Carpool validation : if exist, if has "in progress" status, if authenticated user is driver
        $carpool = $this->validateCarpool($carpoolId, $carpoolSearchService, 'finish');
        if ($carpool instanceof RedirectResponse) {
            return $carpool;
        }

        // Change carpool status to "arrived"
        $carpoolStatusManager->finishCarpool($carpool);

        // Send email to passengers to ask them to validate their participation
        $carpoolEndService->notifyPassengers($carpool);

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    /**
     * Validates a carpool based on the provided carpool ID and mode of action (start or finish).
     * Checks if the user is authenticated, if the carpool exists, if it belongs to the authenticated user,
     * and whether its status is compatible with the requested action (start or finish).
     *
     * @param string               $carpoolId            the ID of the carpool to be validated
     * @param CarpoolSearchService $carpoolSearchService the service used to search for the carpool by its ID
     * @param string               $mode                 the mode of the action ('start' or 'finish')
     *
     * @return Carpool|RedirectResponse the validated carpool object or a RedirectResponse in case of an error
     */
    private function validateCarpool(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        string $mode,
    ): Carpool|RedirectResponse {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        // Define message depending on the mode
        $actionLabels = [
            'start' => 'démarrer',
            'finish' => 'arrêter',
        ];
        $label = $actionLabels[$mode] ?? 'modifier';

        // Check if user is authenticated
        if (!$user) {
            $this->addFlash('warning', 'Vous devez être connecté(e) pour '.$label.' un covoiturage.');

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
            $this->addFlash(
                'error', 'Vous ne pouvez '.$label.' que les covoiturages que vous avez vous-même organisés.');

            return $this->redirectToRoute('app_home');
        }
        // Check if Carpool has status "open" for become "inProgress" = start mode
        if ('start' === $mode) {
            if (CarpoolStatusManager::STATUS_OPEN !== $carpool->getStatus()) {
                $this->addFlash('error', 'Le covoiturage ne peut pas être '.$label.' car il n\'est pas "ouvert".');

                return $this->redirectToRoute('app_home');
            }
        }
        // Check if Carpool has status "open" for become "inProgress" = finish mode
        if ('finish' === $mode) {
            if (CarpoolStatusManager::STATUS_IN_PROGRESS !== $carpool->getStatus()) {
                $this->addFlash('error', 'Le covoiturage ne peut pas être '.$label.' car il n\'est pas "En cours".');

                return $this->redirectToRoute('app_home');
            }
        }

        return $carpool;
    }
}
