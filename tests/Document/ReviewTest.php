<?php

declare(strict_types=1);

namespace App\Tests\Document;

use App\Document\Carpool;
use App\Document\Review;
use PHPUnit\Framework\TestCase;

class ReviewTest extends TestCase
{
    public function testGettersAndSetters(): void
    {
        $review = new Review();

        // Set an ID and verify that it is returned correctly
        $this->assertNull($review->getId());
        $reflection = new \ReflectionClass($review);
        $idProperty = $reflection->getProperty('id');
        $idProperty->setAccessible(true);
        $idProperty->setValue($review, 'some-id');
        $this->assertSame('some-id', $review->getId());

        // Test set/get Comment
        $comment = 'Très bon covoiturage !';
        $review->setComment($comment);
        $this->assertSame($comment, $review->getComment());

        // Test set/get Rating
        $rating = 5;
        $review->setRating($rating);
        $this->assertSame($rating, $review->getRating());

        // Test set/get Status
        $status = 'Publié';
        $review->setStatus($status);
        $this->assertSame($status, $review->getStatus());

        // Test set/get CreatedAt
        $createdAt = new \DateTimeImmutable('2025-02-25 15:30:00');
        $review->setCreatedAt($createdAt);
        $this->assertSame($createdAt, $review->getCreatedAt());

        // Test set/get DriverUserId
        $driverUserId = 123;
        $review->setDriverUserId($driverUserId);
        $this->assertSame($driverUserId, $review->getDriverUserId());

        // Test set/get AuthorUserId
        $authorUserId = 456;
        $review->setAuthorUserId($authorUserId);
        $this->assertSame($authorUserId, $review->getAuthorUserId());

        // Test set/get AuthorPseudo
        $authorPseudo = 'Utilisateur123';
        $review->setAuthorPseudo($authorPseudo);
        $this->assertSame($authorPseudo, $review->getAuthorPseudo());

        // Test set/get AuthorPhotoFilename
        $authorPhotoFilename = 'author-photo.jpg';
        $review->setAuthorPhotoFilename($authorPhotoFilename);
        $this->assertSame($authorPhotoFilename, $review->getAuthorPhotoFilename());
    }

    public function testCarpoolAssociation(): void
    {
        $review = new Review();
        $carpool = new Carpool();
        $review->setCarpool($carpool);

        $this->assertSame($carpool, $review->getCarpool());
    }
}
