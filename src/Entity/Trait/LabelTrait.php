<?php

declare(strict_types=1);

namespace App\Entity\Trait;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

trait LabelTrait
{
    #[Assert\Length(max: 50, maxMessage: 'L\'intitulé ne peut pas contenir plus de {{ limit }} caractères.')]
    #[ORM\Column(length: 50)]
    private ?string $label = null;

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
