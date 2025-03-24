<?php

declare(strict_types=1);

namespace App\Document;

use App\Repository\CarpoolRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Doctrine\ODM\MongoDB\Mapping\Annotations\ReferenceMany;
use Symfony\Component\Validator\Constraints as Assert;

#[MongoDB\Document(repositoryClass: CarpoolRepository::class)]
class Carpool
{
    #[MongoDB\Id]
    private ?string $id = null;

    #[Assert\NotNull(message: 'La date de départ est requise.')]
    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $departureTime = null;

    #[Assert\NotBlank(message: 'La ville de départ est requise.')]
    #[Assert\Length(
        min: 2, minMessage: 'Veuillez saisir un nom de ville de départ d\'au moins {{ limit }} caractères.')]
    #[Assert\Length(max: 50, maxMessage: 'Le nom de la ville ne peut pas contenir plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[A-Za-zÀ-ÿ\- ']+$/",
        message: 'Le nom de la ville de départ ne peut contenir que des lettres, des espaces, des apostrophes et des traits d\'union.')]
    #[MongoDB\Field(type: 'string')]
    private ?string $departureCity = null;

    #[Assert\Length(min: 5, minMessage: 'Veuillez saisir une adresse d\'au moins {{ limit }} caractères.')]
    #[Assert\Length(max: 50, maxMessage: 'L\'adresse ne peut pas contenir plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[A-Za-zÀ-ÿ0-9\- ']+$/",
        message: 'L\'adresse ne peut contenir que
            des lettres, des chiffres, des espaces, des apostrophes et des traits d\'union.')]
    #[MongoDB\Field(type: 'string')]
    private ?string $departurePlace = null;

    #[Assert\GreaterThanOrEqual(
        value: 2, message: 'Le temps de trajet doit être supérieur ou égal à {{ compared_value }} minutes.')]
    #[MongoDB\Field(type: 'int')]
    private ?int $estimatedRideTime = null;

    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $arrivalTime = null;

    #[MongoDB\Field(type: 'string')]
    #[Assert\NotBlank(message: 'La ville d\'arrivée est requise.')]
    #[Assert\Length(
        min: 2, minMessage: 'Veuillez saisir un nom de ville d\'arrivée d\'au moins {{ limit }} caractères.')]
    #[Assert\Length(max: 50, maxMessage: 'Le nom de la ville d\arrivée ne doit pas excéder {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[A-Za-zÀ-ÿ\- ']+$/",
        message: 'Le nom de la ville d\'arrivée ne peut contenir que des lettres, des espaces, des apostrophes et des traits d\'union.')]
    private ?string $arrivalCity = null;

    #[Assert\Length(min: 5, minMessage: 'Veuillez saisir une adresse d\'au moins {{ limit }} caractères.')]
    #[Assert\Length(max: 50, maxMessage: 'L\'adresse ne peut pas contenir plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[A-Za-zÀ-ÿ0-9\- ']+$/",
        message: 'L\'adresse ne peut contenir que
            des lettres, des chiffres, des espaces, des apostrophes et des traits d\'union.')]
    #[MongoDB\Field(type: 'string')]
    private ?string $arrivalPlace = null;

    #[Assert\GreaterThanOrEqual(
        value: 3, message: 'Le tarif par personne doit être supérieur ou égal à {{ compared_value }}.')]
    #[Assert\LessThanOrEqual(
        value: 150, message: 'Le tarif par personne ne peut pas dépasser {{ compared_value }}.')]
    #[MongoDB\Field(type: 'int')]
    private ?int $pricePerPerson = null;

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
    private ?string $driverPseudo = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $driverEmail = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $driverPhoneNumber = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $driverPhotoFilename = null;

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

    #[MongoDB\Field(type: 'collection')]
    private ?array $passengers = [];

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

    public function setId(string $id): static
    {
        $this->id = $id;

        return $this;
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

    public function setDeparturePlace(?string $departurePlace): static
    {
        $this->departurePlace = $departurePlace;

        return $this;
    }

    public function getEstimatedRideTime(): ?int
    {
        return $this->estimatedRideTime;
    }

    public function setEstimatedRideTime(int $estimatedRideTime): static
    {
        $this->estimatedRideTime = $estimatedRideTime;

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

    public function setArrivalPlace(?string $arrivalPlace): static
    {
        $this->arrivalPlace = $arrivalPlace;

        return $this;
    }

    public function getPricePerPerson(): ?int
    {
        return $this->pricePerPerson;
    }

    public function setPricePerPerson(int $pricePerPerson): static
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

    public function getDriverPseudo(): ?string
    {
        return $this->driverPseudo;
    }

    public function setDriverPseudo(?string $driverPseudo): static
    {
        $this->driverPseudo = $driverPseudo;

        return $this;
    }

    public function getDriverEmail(): ?string
    {
        return $this->driverEmail;
    }

    public function setDriverEmail(string $driverEmail): static
    {
        $this->driverEmail = $driverEmail;

        return $this;
    }

    public function getDriverPhoneNumber(): ?string
    {
        return $this->driverPhoneNumber;
    }

    public function setDriverPhoneNumber(string $driverPhoneNumber): static
    {
        $this->driverPhoneNumber = $driverPhoneNumber;

        return $this;
    }

    public function getDriverPhotoFilename(): ?string
    {
        return $this->driverPhotoFilename;
    }

    public function setDriverPhotoFilename(?string $driverPhotoFilename): static
    {
        $this->driverPhotoFilename = $driverPhotoFilename;

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

    public function getPassengers(): array
    {
        return $this->passengers ?? [];
    }

    public function setPassengers(?array $passengers): static
    {
        $this->passengers = $passengers ?? [];

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
