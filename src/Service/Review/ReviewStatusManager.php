<?php

declare(strict_types=1);

namespace App\Service\Review;

use App\Document\Review;
use Doctrine\ODM\MongoDB\DocumentManager;

class ReviewStatusManager
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_REJECTED = 'rejected';
    public const STATUS_CANCELED = 'canceled';
    public const STATUS_APPROVED = 'approved';

    public function __construct(
        private DocumentManager $documentManager,
    ) {
    }

    public function saveReviewAsPending(Review $review)
    {
        $review->setStatus(self::STATUS_PENDING);
        $this->documentManager->persist($review);
        $this->documentManager->flush();
    }

    public function saveReviewAsRejected(Review $review)
    {
        $review->setStatus(self::STATUS_REJECTED);
        $this->documentManager->persist($review);
        $this->documentManager->flush();
    }

    public function saveReviewAsCanceled(Review $review)
    {
        $review->setStatus(self::STATUS_CANCELED);
        $this->documentManager->persist($review);
        $this->documentManager->flush();
    }

    public function saveReviewAsApproved(Review $review)
    {
        $review->setStatus(self::STATUS_APPROVED);
        $this->documentManager->persist($review);
        $this->documentManager->flush();
    }
}
