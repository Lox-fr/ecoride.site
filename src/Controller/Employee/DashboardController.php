<?php

declare(strict_types=1);

namespace App\Controller\Employee;

use App\Document\Review;
use App\Service\Review\ReviewManager;
use App\Service\Review\ReviewSearchService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/employe')]
final class DashboardController extends AbstractController
{
    #[Route('/tableau-de-bord', name: 'app_employee_dashboard')]
    public function index(ReviewSearchService $reviewSearchService): Response
    {
        // Get the list of reviews to moderate findReviewsToModerate
        $reviewsToModerate = $reviewSearchService->findReviewsToModerate();

        return $this->render('employee/index.html.twig', [
            'controller_name' => 'EmployeeDashboardController',
            'reviewsToModerate' => $reviewsToModerate,
        ]);
    }

    #[Route('/valider-avis/{reviewId}', name: 'app_employee_validate_review')]
    public function validateReview(
        string $reviewId,
        DocumentManager $dm,
        ReviewManager $reviewManager,
    ): Response {
        // Retrieve the review with Document Manager
        $review = $dm->getRepository(Review::class)->find($reviewId);

        // Check if the review exists
        if (null === $review) {
            throw $this->createNotFoundException('Avis non trouvé');
        }
        // Validate the review via ReviewManager
        $reviewManager->validateReview($review);
        // Redirect to the dashboard with a flash message
        $this->addFlash('success', 'L\'avis '.$review->getId().' a bien été validé.');

        return $this->redirectToRoute('app_employee_dashboard');
    }

    #[Route('/refuser-avis/{reviewId}', name: 'app_employee_reject_review')]
    public function rejectReview(
        string $reviewId,
        DocumentManager $dm,
        ReviewManager $reviewManager,
    ): Response {
        // Retrieve the review with Document Manager
        $review = $dm->getRepository(Review::class)->find($reviewId);

        // Check if the review exists
        if (null === $review) {
            throw $this->createNotFoundException('Avis non trouvé');
        }
        // Reject the review via ReviewManager
        $reviewManager->rejectReview($review);
        // Redirect to the dashboard with a flash message
        $this->addFlash('success', 'L\'avis '.$review->getId().' a bien été refusé.');

        return $this->redirectToRoute('app_employee_dashboard');
    }
}
