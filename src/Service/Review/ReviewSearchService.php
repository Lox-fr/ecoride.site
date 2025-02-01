<?php

declare(strict_types=1);

namespace App\Service\Review;

use App\Document\Carpool;
use App\Document\Review;
use App\Repository\ReviewRepository;
use Doctrine\ODM\MongoDB\DocumentManager;

final class ReviewSearchService
{
    private ReviewRepository $reviewRepository;

    public function __construct(
        private DocumentManager $documentManager,
    ) {
        $this->reviewRepository = $documentManager->getRepository(Review::class);
    }

    /**
     * Retrieves approved reviews for the carpool driver.
     *
     * @return array<int, Review> List of reviews sorted from most recent to oldest.
     */
    public function findApprovedReviewsDriver(Carpool $carpool): array
    {
        return $this->reviewRepository->findBy(
            [
                'driverUserId' => $carpool->getDriverUserId(),
                'status' => 'approved',
            ],
            ['createdAt' => 'DESC']
        );
    }
}
