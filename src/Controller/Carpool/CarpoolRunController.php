<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Carpool;
use App\Form\ReviewFormType;
use App\Service\Carpool\CarpoolEndService;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Carpool\CarpoolStatusManager;
use App\Service\Review\ReviewManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class CarpoolRunController extends AbstractController
{
    // Start a ride
    #[Route('/covoiturage/commencer/{carpoolId}', name: 'app_carpool_start')]
    public function start(
        string $carpoolId, CarpoolSearchService $carpoolSearchService, CarpoolEndService $carpoolEndService,
    ): RedirectResponse {
        // Carpool validation : if exist, if has "open" status, if authenticated user is driver
        $carpool = $this->validateCarpoolForUserAction($carpoolId, $carpoolSearchService, 'start');
        if ($carpool instanceof RedirectResponse) {
            return $carpool;
        }

        // Change carpool status to "inProgress" if nacessary
        $carpoolEndService->driverStartsCarpool($carpool);

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    // End a ride
    #[Route('/covoiturage/terminer/{carpoolId}', name: 'app_carpool_finish')]
    public function finish(
        string $carpoolId, CarpoolSearchService $carpoolSearchService, CarpoolEndService $carpoolEndService,
    ): RedirectResponse {
        // Carpool validation : if exist, if has "in progress" status, if authenticated user is driver
        $carpool = $this->validateCarpoolForUserAction($carpoolId, $carpoolSearchService, 'finish');
        if ($carpool instanceof RedirectResponse) {
            return $carpool;
        }

        if (!empty($carpool->getPassengers())) {
            // Change carpool status to "arrived" if necessary and if there was at least one passenger
            // And send email to passengers to ask them to validate their participation
            $carpoolEndService->driverFinishesCarpool($carpool);
        } else {
            // Change carpool status to "done" if there was no passenger
            $carpoolEndService->passengerValidatesCarpool($carpool);
        }

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    // Validate a ride, leave a rating and a comment
    #[Route('/covoiturage/valider/{carpoolId}', name: 'app_carpool_validate')]
    public function validate(
        string $carpoolId,
        Request $request,
        CarpoolSearchService $carpoolSearchService,
        CarpoolEndService $carpoolEndService,
        ReviewManager $reviewManager,
    ): RedirectResponse {
        // Carpool validation : if exist, if has "arrived" status, if authenticated user is passenger
        $carpool = $this->validateCarpoolForUserAction($carpoolId, $carpoolSearchService, 'validate');
        if ($carpool instanceof RedirectResponse) {
            return $carpool;
        }

        // Change carpool status to "done" if nacessary and give the credits to driver
        $carpoolEndService->passengerValidatesCarpool($carpool, true);

        // Handle carpool review leaved by passenger
        $reviewForm = $this->createForm(ReviewFormType::class);
        $reviewForm->handleRequest($request);
        if ($reviewForm->isSubmitted() && $reviewForm->isValid()) {
            /** @var \App\Entity\User $user */
            $user = $this->getUser();

            // Save the review with the correct status
            $rating = (int) $reviewForm->get('rating')->getData();
            $comment = $reviewForm->get('comment')->getData() ?? '';
            $reviewManager->populateAndSaveReview($rating, $comment, $user, $carpool);

            $flashMessage = 'Merci pour votre participation ! Votre retour a été enregistré';
            if ($rating < 3 || !empty($comment)) {
                $this->addFlash('info',
                    $flashMessage.' et sera validé par nos équipes avant d\'être publié sur le site.');
            } else {
                $this->addFlash('info', $flashMessage.'.');
            }
        }

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }

    /**
     * Validates a carpool based on the provided carpool ID and mode of action (start or finish).
     * Checks if the user is authenticated, if the carpool exists, if it belongs to the authenticated user,
     * and whether its status is compatible with the requested action (start or finish).
     *
     * @param string               $carpoolId            the ID of the carpool to be validated
     * @param CarpoolSearchService $carpoolSearchService the service used to search for the carpool by its ID
     * @param string               $mode                 the mode of the action ('start', 'finish', or 'validate')
     *
     * @return Carpool|RedirectResponse the validated carpool object or a RedirectResponse in case of an error
     */
    private function validateCarpoolForUserAction(
        string $carpoolId, CarpoolSearchService $carpoolSearchService, string $mode,
    ): Carpool|RedirectResponse {
        // Define message depending on the mode
        $actionLabels = [
            'start' => 'démarrer',
            'finish' => 'arrêter',
            'validate' => 'valider',
        ];
        $label = $actionLabels[$mode] ?? 'modifier';

        /** @var \App\Entity\User $user */
        $user = $this->getUser();

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

        if ('start' === $mode || 'finish' === $mode) {
            // Check if authenticated user is driver
            if ($carpool->getDriverUserId() !== $user->getId()) {
                $this->addFlash(
                    'error', 'Vous ne pouvez '.$label.' que les covoiturages que vous avez vous-même organisés.');

                return $this->redirectToRoute('app_home');
            }
        } elseif ('validate' === $mode) {
            // Check if auhtenticated user is passenger
            $isPassenger = false;
            foreach ($carpool->getPassengers() as $carpoolData) {
                if ($carpoolData['passengerId'] === $user->getId()) {
                    $isPassenger = true;
                }
            }
            if (!$isPassenger) {
                $this->addFlash('error', 'Vous n\'étiez pas passager de ce covoiturage.');

                return $this->redirectToRoute('app_home');
            }
        }

        // Check if Carpool has status "open" to become "inProgress" = start mode
        if ('start' === $mode) {
            if (CarpoolStatusManager::STATUS_OPEN !== $carpool->getStatus()) {
                $this->addFlash('error', 'Vous ne pouvez pas '.$label.' le covoiturage car il n\'est pas "ouvert".');

                return $this->redirectToRoute('app_home');
            }
        }
        // Check if Carpool has status "inProgress" to become "arrived" = finish mode
        elseif ('finish' === $mode) {
            if (CarpoolStatusManager::STATUS_IN_PROGRESS !== $carpool->getStatus()) {
                $this->addFlash('error', 'Vous ne pouvez pas '.$label.' le covoiturage car il n\'est pas "En cours".');

                return $this->redirectToRoute('app_home');
            }
        }
        // Check if Carpool has status "arrived" to become "validated" = validate mode
        // It might already have the status "validated" if one passenger has already validated it
        elseif ('validate' === $mode) {
            if (CarpoolStatusManager::STATUS_ARRIVED !== $carpool->getStatus()
            && CarpoolStatusManager::STATUS_VALIDATED !== $carpool->getStatus()) {
                $this->addFlash('error', 'Vous ne pouvez pas '.$label.' le covoiturage car il n\'est pas "Arrivé".');

                return $this->redirectToRoute('app_home');
            }
        }

        return $carpool;
    }
}
