<?php

declare(strict_types=1);

namespace App\Document;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Doctrine\ODM\MongoDB\Mapping\Annotations\ReferenceMany;

#[MongoDB\Document]
class Carpool
{
    #[MongoDB\Id]
    private ?string $id = null;

    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $departureTime = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $departureCity = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $departurePlace = null;

    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $arrivalTime = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $arrivalCity = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $arrivalPlace = null;

    #[MongoDB\Field(type: 'float')]
    private ?float $pricePerPerson = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $totalNumberOfSeats = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $numberOfAvailableSeats = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $status = null;

    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $driverUserId = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $driverPhotoName = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $driverAge = null;

    #[MongoDB\Field(type: 'bool')]
    private ?bool $driverPetsAllowed = null;

    #[MongoDB\Field(type: 'bool')]
    private ?bool $driverSmokersAllowed = null;

    #[MongoDB\Field(type: 'hash')]
    private ?array $driverPreferences = null;

    #[MongoDB\Field(type: 'float')]
    private ?float $driverAverageRating = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $carBrand = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $carModel = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $carColor = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $carEngineType = null;

    #[MongoDB\Field(type: 'hash')]
    private ?array $passengers = null;

    /**
     * @var Collection<int, Review>
     */
    #[ReferenceMany(targetDocument: Review::class, mappedBy: 'carpool')]
    private Collection $reviews;

    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getDepartureTime(): ?\DateTimeImmutable
    {
        return $this->departureTime;
    }

    public function setDepartureTime(\DateTimeImmutable $departureTime): static
    {
        $this->departureTime = $departureTime;

        return $this;
    }

    public function getDepartureCity(): ?string
    {
        return $this->departureCity;
    }

    public function setDepartureCity(string $departureCity): static
    {
        $this->departureCity = $departureCity;

        return $this;
    }

    public function getDeparturePlace(): ?string
    {
        return $this->departurePlace;
    }

    public function setDeparturePlace(string $departurePlace): static
    {
        $this->departurePlace = $departurePlace;

        return $this;
    }

    public function getArrivalTime(): ?\DateTimeImmutable
    {
        return $this->arrivalTime;
    }

    public function setArrivalTime(\DateTimeImmutable $arrivalTime): static
    {
        $this->arrivalTime = $arrivalTime;

        return $this;
    }

    public function getArrivalCity(): ?string
    {
        return $this->arrivalCity;
    }

    public function setArrivalCity(string $arrivalCity): static
    {
        $this->arrivalCity = $arrivalCity;

        return $this;
    }

    public function getArrivalPlace(): ?string
    {
        return $this->arrivalPlace;
    }

    public function setArrivalPlace(string $arrivalPlace): static
    {
        $this->arrivalPlace = $arrivalPlace;

        return $this;
    }

    public function getPricePerPerson(): ?float
    {
        return $this->pricePerPerson;
    }

    public function setPricePerPerson(float $pricePerPerson): static
    {
        $this->pricePerPerson = $pricePerPerson;

        return $this;
    }

    public function getTotalNumberOfSeats(): ?int
    {
        return $this->totalNumberOfSeats;
    }

    public function setTotalNumberOfSeats(int $totalNumberOfSeats): static
    {
        $this->totalNumberOfSeats = $totalNumberOfSeats;

        return $this;
    }

    public function getNumberOfAvailableSeats(): ?int
    {
        return $this->numberOfAvailableSeats;
    }

    public function setNumberOfAvailableSeats(int $numberOfAvailableSeats): static
    {
        $this->numberOfAvailableSeats = $numberOfAvailableSeats;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getDriverUserId(): ?int
    {
        return $this->driverUserId;
    }

    public function setDriverUserId(int $driverUserId): static
    {
        $this->driverUserId = $driverUserId;

        return $this;
    }

    public function getDriverPhotoName(): ?string
    {
        return $this->driverPhotoName;
    }

    public function setDriverPhotoName(?string $driverPhotoName): static
    {
        $this->driverPhotoName = $driverPhotoName;

        return $this;
    }

    public function getDriverAge(): ?int
    {
        return $this->driverAge;
    }

    public function setDriverAge(int $driverAge): static
    {
        $this->driverAge = $driverAge;

        return $this;
    }

    public function isDriverPetsAllowed(): ?bool
    {
        return $this->driverPetsAllowed;
    }

    public function setDriverPetsAllowed(bool $driverPetsAllowed): static
    {
        $this->driverPetsAllowed = $driverPetsAllowed;

        return $this;
    }

    public function isDriverSmokersAllowed(): ?bool
    {
        return $this->driverSmokersAllowed;
    }

    public function setDriverSmokersAllowed(bool $driverSmokersAllowed): static
    {
        $this->driverSmokersAllowed = $driverSmokersAllowed;

        return $this;
    }

    public function getDriverPreferences(): ?array
    {
        return $this->driverPreferences;
    }

    public function setDriverPreferences(?array $driverPreferences): static
    {
        $this->driverPreferences = $driverPreferences;

        return $this;
    }

    public function getDriverAverageRating(): ?float
    {
        return $this->driverAverageRating;
    }

    public function setDriverAverageRating(?float $driverAverageRating): static
    {
        $this->driverAverageRating = $driverAverageRating;

        return $this;
    }

    public function getCarBrand(): ?string
    {
        return $this->carBrand;
    }

    public function setCarBrand(string $carBrand): static
    {
        $this->carBrand = $carBrand;

        return $this;
    }

    public function getCarModel(): ?string
    {
        return $this->carModel;
    }

    public function setCarModel(string $carModel): static
    {
        $this->carModel = $carModel;

        return $this;
    }

    public function getCarColor(): ?string
    {
        return $this->carColor;
    }

    public function setCarColor(string $carColor): static
    {
        $this->carColor = $carColor;

        return $this;
    }

    public function getCarEngineType(): ?string
    {
        return $this->carEngineType;
    }

    public function setCarEngineType(string $carEngineType): static
    {
        $this->carEngineType = $carEngineType;

        return $this;
    }

    public function getPassengers(): ?array
    {
        return $this->passengers;
    }

    public function setPassengers(?array $passengers): static
    {
        $this->passengers = $passengers;

        return $this;
    }

    /**
     * @return Collection<int, Review>
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): static
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews->add($review);
            $review->setCarpool($this);
        }

        return $this;
    }

    public function removeReview(Review $review): static
    {
        if ($this->reviews->removeElement($review)) {
            // set the owning side to null (unless already changed)
            if ($review->getCarpool() === $this) {
                $review->setCarpool(null);
            }
        }

        return $this;
    }
}
