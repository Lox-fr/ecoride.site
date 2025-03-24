<?php

declare(strict_types=1);

namespace App\Service\Review;

use App\Document\Carpool;
use App\Document\Review;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\User\RatingManager;
use Doctrine\ODM\MongoDB\DocumentManager;

class ReviewManager
{
    public function __construct(
        private DocumentManager $documentManager,
        private ReviewStatusManager $reviewStatusManager,
        private UserRepository $userRepository,
        private RatingManager $ratingManager,
    ) {
    }

    public function populateAndSaveReview(int $rating, string $comment, User $user, Carpool $carpool): void
    {
        $comment = trim($comment);
        $review = new Review();
        if ('' !== $comment) {
            $review->setComment($comment);
        }
        $review
            ->setCreatedAt(new \DateTimeImmutable())
            ->setRating($rating)
            ->setStatus($this->reviewStatusManager::STATUS_PENDING)
            ->setCarpool($carpool)
            ->setDriverUserId($carpool->getDriverUserId())
            ->setAuthorUserId($user->getId())
            ->setAuthorPseudo($user->getPseudo())
            ->setAuthorEmail($user->getEmail())
            ->setAuthorPhotoFilename($user->getPhotoFilename());
        // Save in MongoDB
        $this->documentManager->persist($review);
        $this->documentManager->flush();

        // Directly validate the review if the rating is greater than 2 and there is no comment
        if ('' === $comment && $rating > 2) {
            $this->validateReview($review);
        }
    }

    public function validateReview(Review $review): void
    {
        // Update the status of the review to "approved"
        $review->setStatus($this->reviewStatusManager::STATUS_APPROVED);
        $this->documentManager->persist($review);
        $this->documentManager->flush();

        // Update the average rating and number of ratings of the driver
        $driver = $this->userRepository->findUserById($review->getDriverUserId());
        if ($driver) {
            $this->ratingManager->addARating($driver, $review->getRating());
        }
    }

    public function rejectReview(Review $review): void
    {
        // Update the status of the review to "rejected"
        $review->setStatus($this->reviewStatusManager::STATUS_REJECTED);
        $this->documentManager->persist($review);
        $this->documentManager->flush();
    }
}
