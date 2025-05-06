<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Review;
use App\Form\ReviewFormType;
use App\Service\Review\ReviewSearchService;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Carpool\CarpoolStatusManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class CarpoolViewController extends AbstractController
{
    #[Route('/covoiturage/{carpoolId}', name: 'app_carpool_view')]
    public function index(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        ReviewSearchService $reviewSearchService,
        CarpoolStatusManager $carpoolStatusManager
    ): Response|RedirectResponse {
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
        $approvedReviewsDriver = $reviewSearchService->findApprovedReviewsDriver($carpool);

        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage que vous recherchez n\'existe pas.');

            return $this->redirectToRoute('app_home');
        }

        // Create review form for each carpool which is Arrived or Validated
        $reviewsFormViews = [];
        if ($carpool->getStatus() === $carpoolStatusManager::STATUS_ARRIVED
        || $carpool->getStatus() === $carpoolStatusManager::STATUS_VALIDATED) {
            $reviewsFormViews[$carpool->getId()] =
                $this->createForm(ReviewFormType::class, new Review())->createView();
        }

        return $this->render('carpool/view/index.html.twig', [
            'controller_name' => 'ViewCarpoolController',
            'carpool' => $carpool,
            'approvedReviewsDriver' => $approvedReviewsDriver,
            'reviewsFormViews' => $reviewsFormViews,
        ]);
    }

    #[Route('ajax/covoiturage/details/{carpoolId}', name: 'app_carpool_details_partial', methods: ['GET'])]
    public function partialDetails(CarpoolSearchService $carpoolSearchService, string $carpoolId): Response
    {
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
    
        if (!$carpool) {
            return new Response("Covoiturage introuvable", 404);
        }
    
        return $this->render('carpool/_fetchedDetails.html.twig', [
            'carpool' => $carpool,
        ]);
    }
}
