<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\ActiveTrait;
use App\Entity\Trait\CreatedAtTrait;
use App\Entity\Trait\IdTrait;
use App\Entity\Trait\UpdatedAtTrait;
use App\Repository\CarRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CarRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_CAR_LICENSE_PLATE', fields: ['licensePlate'])]
#[UniqueEntity(fields: ['licensePlate'], message: 'Il existe déjà un véhicule enregistré avec cette plaque.')]
#[ORM\HasLifecycleCallbacks]
class Car
{
    use IdTrait;
    use CreatedAtTrait;
    use UpdatedAtTrait;
    use ActiveTrait;

    #[Assert\NotBlank(message: 'La plaque d\'immatriculation est requise.')]
    #[Assert\Length(
        min: 7, minMessage: "La plaque d'immatriculation doit contenir au moins {{ limit }} caractères.",
        max: 10, maxMessage: "La plaque d'immatriculation ne peut pas contenir plus de {{ limit }} caractères.")]
    #[Assert\Regex(
        pattern: '/^[A-Z0-9\s-]{7,10}$/',
        message: "La plaque d'immatriculation doit être composée de lettres majuscules, chiffres, espaces ou tirets."
    )]
    #[ORM\Column(length: 10)]
    private ?string $licensePlate = null;

    #[Assert\NotBlank(message: 'La date de première immatriculation est requise.')]
    #[Assert\LessThanOrEqual('today', message: 'Votre véhicule doit déjà être immatriculé.')]
    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $dateOfFirstRegistration = null;

    #[Assert\NotBlank(message: 'Le modèle est requis.')]
    #[Assert\Length(max: 50, maxMessage: 'Le modèle ne peut pas contenir plus de {{ limit }} caractères.')]
    #[ORM\Column(length: 50)]
    private ?string $model = null;

    #[ORM\ManyToOne(inversedBy: 'cars')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[Assert\NotBlank(message: 'La marque est requise.')]
    #[Assert\Valid]
    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Brand $brand = null;

    #[Assert\NotBlank(message: 'La motorisation est requise.')]
    #[Assert\Valid]
    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?EngineType $engineType = null;

    #[Assert\NotBlank(message: 'La couleur est requise.')]
    #[Assert\Valid]
    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Color $color = null;

    #[Assert\NotNull(message: 'Le nombre de places ne peut pas être nul.')]
    #[Assert\Range(
        min: 1, max: 9, notInRangeMessage: 'Le nombre de places doit être compris entre {{ min }} et {{ max }}.')]
    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $numberOfSeats = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->setActive(true);
    }

    public function getLicensePlate(): ?string
    {
        return $this->licensePlate;
    }

    public function setLicensePlate(string $licensePlate): static
    {
        $this->licensePlate = $licensePlate;

        return $this;
    }

    public function getDateOfFirstRegistration(): ?\DateTimeImmutable
    {
        return $this->dateOfFirstRegistration;
    }

    public function setDateOfFirstRegistration(\DateTimeImmutable $dateOfFirstRegistration): static
    {
        $this->dateOfFirstRegistration = $dateOfFirstRegistration;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getBrand(): ?Brand
    {
        return $this->brand;
    }

    public function setBrand(?Brand $brand): static
    {
        $this->brand = $brand;

        return $this;
    }

    public function getEngineType(): ?EngineType
    {
        return $this->engineType;
    }

    public function setEngineType(?EngineType $engineType): static
    {
        $this->engineType = $engineType;

        return $this;
    }

    public function getColor(): ?Color
    {
        return $this->color;
    }

    public function setColor(?Color $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getNumberOfSeats(): ?int
    {
        return $this->numberOfSeats;
    }

    public function setNumberOfSeats(int $numberOfSeats): static
    {
        $this->numberOfSeats = $numberOfSeats;

        return $this;
    }
}
