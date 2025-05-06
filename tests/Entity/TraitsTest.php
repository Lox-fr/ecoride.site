<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Trait\ActiveTrait;
use App\Entity\Trait\CreatedAtTrait;
use App\Entity\Trait\UpdatedAtTrait;
use PHPUnit\Framework\TestCase;

class TraitsTest extends TestCase
{
    public function testActiveTrait(): void
    {
        // Créer une classe anonyme pour utiliser les traits
        $object = new class {
            use ActiveTrait;
        };

        // Vérifier la valeur par défaut de "active"
        $this->assertTrue($object->isActive());

        // Modifier la valeur de "active"
        $object->setActive(false);
        $this->assertFalse($object->isActive());

        // Vérifier que l'on peut la remettre à "true"
        $object->setActive(true);
        $this->assertTrue($object->isActive());
    }

    public function testCreatedAtTrait(): void
    {
        // Créer une classe anonyme pour utiliser les traits
        $object = new class {
            use CreatedAtTrait;
        };

        // Vérifier que la valeur de "createdAt" est bien définie à la création
        $createdAt = $object->getCreatedAt();
        $this->assertInstanceOf(\DateTimeImmutable::class, $createdAt);

        // Modifier la valeur de "createdAt" et vérifier
        $newCreatedAt = new \DateTimeImmutable('2023-01-01');
        $object->setCreatedAt($newCreatedAt);
        $this->assertSame($newCreatedAt, $object->getCreatedAt());
    }

    public function testUpdatedAtTrait(): void
    {
        // Créer une classe anonyme pour utiliser les traits
        $object = new class {
            use UpdatedAtTrait;
        };

        // Vérifier que la valeur de "updatedAt" est nulle au départ
        $this->assertNull($object->getUpdatedAt());

        // Définir la valeur de "updatedAt"
        $newUpdatedAt = new \DateTimeImmutable('2023-01-01');
        $object->setUpdatedAt($newUpdatedAt);
        $this->assertSame($newUpdatedAt, $object->getUpdatedAt());

        // Vérifier que la méthode "setUpdatedAtValue" modifie la valeur
        $object->setUpdatedAtValue();
        $this->assertInstanceOf(\DateTimeImmutable::class, $object->getUpdatedAt());
        $this->assertNotSame($newUpdatedAt, $object->getUpdatedAt()); // La date doit être modifiée

        // Vérifier que la méthode "setUpdatedAtValue" met à jour "updatedAt" lorsqu'une entité est mise à jour
    }
}
