<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\EngineTypeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EngineTypeRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_ENGINE_TYPE_LABEL', fields: ['label'])]
class EngineType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    private ?string $label = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }
}
