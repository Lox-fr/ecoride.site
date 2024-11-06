<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\CarRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CarRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_CAR_LICENSE_PLATE', fields: ['licensePlate'])]
class Car
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10)]
    private ?string $licensePlate = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $dateOfFirstRegistration = null;

    #[ORM\Column(length: 50)]
    private ?string $model = null;

    public function getId(): ?int
    {
        return $this->id;
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
}
