<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\IdTrait;
use App\Repository\CarRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CarRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_CAR_LICENSE_PLATE', fields: ['licensePlate'])]
class Car
{
    use IdTrait;

    #[ORM\Column(length: 10)]
    private ?string $licensePlate = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $dateOfFirstRegistration = null;

    #[ORM\Column(length: 50)]
    private ?string $model = null;

    #[ORM\ManyToOne(inversedBy: 'cars')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Brand $brand = null;

    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?EngineType $engineType = null;

    #[ORM\ManyToOne(inversedBy: 'cars', fetch: 'EAGER')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Color $color = null;

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
}
