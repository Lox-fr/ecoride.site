<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\IdTrait;
use App\Entity\Trait\LabelTrait;
use App\Repository\ColorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ColorRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_COLOR_LABEL', fields: ['label'])]
class Color
{
    use IdTrait;
    use LabelTrait;

    /**
     * @var Collection<int, Car>
     */
    #[ORM\OneToMany(targetEntity: Car::class, mappedBy: 'color', orphanRemoval: true)]
    private Collection $cars;

    public function __construct()
    {
        $this->cars = new ArrayCollection();
    }

    /**
     * @return Collection<int, Car>
     */
    public function getCars(): Collection
    {
        return $this->cars;
    }

    public function addCar(Car $car): static
    {
        if (!$this->cars->contains($car)) {
            $this->cars->add($car);
            $car->setColor($this);
        }

        return $this;
    }

    public function removeCar(Car $car): static
    {
        if ($this->cars->removeElement($car)) {
            // set the owning side to null (unless already changed)
            if ($car->getColor() === $this) {
                $car->setColor(null);
            }
        }

        return $this;
    }
}
