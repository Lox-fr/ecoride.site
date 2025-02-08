<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Service\Carpool\CarpoolSearchService;
use App\Service\Review\ReviewSearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CarpoolViewController extends AbstractController
{
    #[Route('/covoiturage/{carpoolId}', name: 'app_carpool_view')]
    public function index(
        string $carpoolId,
        CarpoolSearchService $carpoolSearchService,
        ReviewSearchService $reviewSearchService,
    ): Response|RedirectResponse {
        $carpool = $carpoolSearchService->findOneCarpoolByItsId($carpoolId);
        $approvedReviewsDriver = $reviewSearchService->findApprovedReviewsDriver($carpool);

        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage que vous recherchez n\'existe pas.');

            return $this->redirectToRoute('app_home');
        }

        return $this->render('carpool/view/index.html.twig', [
            'controller_name' => 'ViewCarpoolController',
            'carpool' => $carpool,
            'approvedReviewsDriver' => $approvedReviewsDriver,
        ]);
    }
}
