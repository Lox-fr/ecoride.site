<?php

declare(strict_types=1);

namespace App\Tests\Document;

use App\Document\Carpool;
use App\Document\Review;
use Doctrine\Common\Collections\ArrayCollection;
use PHPUnit\Framework\TestCase;

class CarpoolTest extends TestCase
{
    public function testGettersAndSetters(): void
    {
        $carpool = new Carpool();

        $departurePlace = '1 Rue de Paris';
        $carpool->setDeparturePlace($departurePlace);
        $this->assertSame($departurePlace, $carpool->getDeparturePlace());

        $departureTime = new \DateTimeImmutable('2025-01-01 08:00:00');
        $carpool->setDepartureTime($departureTime);
        $this->assertSame($departureTime, $carpool->getDepartureTime());

        $departureCity = 'Paris';
        $carpool->setDepartureCity($departureCity);
        $this->assertSame($departureCity, $carpool->getDepartureCity());

        $estimatedRideTime = 120;
        $carpool->setEstimatedRideTime($estimatedRideTime);
        $this->assertSame($estimatedRideTime, $carpool->getEstimatedRideTime());

        $arrivalTime = new \DateTimeImmutable('2025-01-01 13:00:00');
        $carpool->setArrivalTime($arrivalTime);
        $this->assertSame($arrivalTime, $carpool->getArrivalTime());

        $arrivalPlace = '1 Rue de Lyon';
        $carpool->setArrivalPlace($arrivalPlace);
        $this->assertSame($arrivalPlace, $carpool->getArrivalPlace());

        $arrivalCity = 'Lyon';
        $carpool->setArrivalCity($arrivalCity);
        $this->assertSame($arrivalCity, $carpool->getArrivalCity());

        $driverPseudo = 'TestDriver';
        $carpool->setDriverPseudo($driverPseudo);
        $this->assertSame($driverPseudo, $carpool->getDriverPseudo());

        $driverPhotoFilename = 'photo.jpg';
        $carpool->setDriverPhotoFilename($driverPhotoFilename);
        $this->assertSame($driverPhotoFilename, $carpool->getDriverPhotoFilename());

        $driverAge = 35;
        $carpool->setDriverAge($driverAge);
        $this->assertSame($driverAge, $carpool->getDriverAge());

        $driverPetsAllowed = true;
        $carpool->setDriverPetsAllowed($driverPetsAllowed);
        $this->assertSame($driverPetsAllowed, $carpool->isDriverPetsAllowed());

        $driverSmokersAllowed = false;
        $carpool->setDriverSmokersAllowed($driverSmokersAllowed);
        $this->assertSame($driverSmokersAllowed, $carpool->isDriverSmokersAllowed());

        $driverPreferences = ['Climatisation', 'Musique'];
        $carpool->setDriverPreferences($driverPreferences);
        $this->assertSame($driverPreferences, $carpool->getDriverPreferences());

        $driverAverageRating = 4.8;
        $carpool->setDriverAverageRating($driverAverageRating);
        $this->assertSame($driverAverageRating, $carpool->getDriverAverageRating());

        $carBrand = 'Toyota';
        $carpool->setCarBrand($carBrand);
        $this->assertSame($carBrand, $carpool->getCarBrand());

        $carModel = 'Yaris IV';
        $carpool->setCarModel($carModel);
        $this->assertSame($carModel, $carpool->getCarModel());

        $carColor = 'Noir';
        $carpool->setCarColor($carColor);
        $this->assertSame($carColor, $carpool->getCarColor());

        $carEngineType = 'Hybride';
        $carpool->setCarEngineType($carEngineType);
        $this->assertSame($carEngineType, $carpool->getCarEngineType());

        $totalNumberOfSeats = 4;
        $carpool->setTotalNumberOfSeats($totalNumberOfSeats);
        $this->assertSame($totalNumberOfSeats, $carpool->getTotalNumberOfSeats());

        $passengers = ['John', 'Bob'];
        $carpool->setPassengers($passengers);
        $this->assertSame($passengers, $carpool->getPassengers());

        $status = 'Disponible';
        $carpool->setStatus($status);
        $this->assertSame($status, $carpool->getStatus());

        $createdAt = new \DateTimeImmutable();
        $carpool->setCreatedAt($createdAt);
        $this->assertSame($createdAt, $carpool->getCreatedAt());
    }

    public function testReviewsCollection(): void
    {
        $carpool = new Carpool();
        $this->assertInstanceOf(ArrayCollection::class, $carpool->getReviews());
        $this->assertCount(0, $carpool->getReviews());

        $review1 = new Review();
        $review2 = new Review();

        // Add reviews
        $carpool->addReview($review1);
        $carpool->addReview($review2);

        $this->assertCount(2, $carpool->getReviews());
        $this->assertTrue($carpool->getReviews()->contains($review1));
        $this->assertTrue($carpool->getReviews()->contains($review2));

        // Remove a review
        $carpool->removeReview($review1);
        $this->assertCount(1, $carpool->getReviews());
        $this->assertFalse($carpool->getReviews()->contains($review1));
        $this->assertTrue($carpool->getReviews()->contains($review2));
    }
}
