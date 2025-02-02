<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Service\Carpool\CarpoolJoinService;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Review\ReviewSearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class JoinCarpoolController extends AbstractController
{
    #[Route('/rejoindre/{carpoolId}', name: 'app_carpool_join')]
    public function index(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        CarpoolJoinService $carpoolJoinService,
        ReviewSearchService $reviewSearchService,
    ): Response|RedirectResponse {
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
        $approvedReviewsDriver = $reviewSearchService->findApprovedReviewsDriver($carpool);

        // Check existence of carpool
        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage auquel vous souhaitez participer n\'existe pas ou plus.');

            return $this->redirectToRoute('app_home');
        }

        // Check number of available seats
        if ($carpool->getNumberOfAvailableSeats() <= 0) {
            $this->addFlash('error',
                'La ou les places disponibles ont été réservées par un ou d\'autres utilisateurs<br/>
                entre le moment de votre sélection et celui de votre validation.<br/>
                Désolé pour le désagrément, veuillez choisir un autre covoiturage');

            $this->redirectToRoute('app_carpool_search');
        }

        /** @var \App\Entity\User $passenger */
        $passenger = $this->getUser();

        // Check if user is authenticated
        if (!$passenger) {
            $this->addFlash('warning', 'Vous devez être connecté(e) pour réserver votre place.');

            return $this->redirectToRoute('app_login');
        }

        // Check if the user is already present as passenger of this carpool
        if ($carpoolJoinService->isUserAlreadyPassengerOfCarpool($passenger, $carpool)) {
            $this->addFlash('info', 'Vous êtes déjà enregistré(e) comme participant(e) de ce covoiturage.');

            return $this->redirectToRoute('app_carpool_view', ['carpoolId' => $carpool->getId()]);
        }

        // Check if passenger has enough credits to pay
        if ($passenger->getCredits() < $carpool->getPricePerPerson()) {
            $this->addFlash('warning',
                'Vous ne possédez pas suffisamment de crédits pour réserver cette place ...<br/>
                Essayez d\'en trouver une moins cher ou recréditez votre compte.');

            return $this->redirectToRoute('app_carpool_search');
        }

        $carpoolJoinService->authenticatedUserJoinsCarpool($carpool);
        $this->addFlash('success', 'Votre participation est enregistrée.');

        return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
    }
}
