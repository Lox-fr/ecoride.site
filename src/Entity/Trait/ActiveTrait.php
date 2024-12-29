<?php

declare(strict_types=1);

namespace App\Entity\Trait;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

trait ActiveTrait
{
    #[Assert\NotNull(message: 'Le statut d\'activité doit être défini.')]
    #[Assert\Type('bool', message: 'Le statut d\'activité doit être un booléen.')]
    #[ORM\Column]
    private ?bool $active = null;

    public function __construct()
    {
        $this->active = true;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

        return $this;
    }
}
