<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\EngineType;
use Doctrine\Common\Collections\ArrayCollection;

class EngineTypesProvider
{
    private const APP_CAR_ENGINE_TYPES = [
        'Essence',
        'Diesel',
        'Hybride',
        'Électrique',
        'GPL',
        'Hydrogène',
    ];

    /**
     * Returns a collection of all predefined engine types.
     *
     * @return ArrayCollection<int, EngineType>
     */
    public function getCollectionOfEngineTypes(): ArrayCollection
    {
        $engineTypeColl = new ArrayCollection();
        foreach (self::APP_CAR_ENGINE_TYPES as $engineType) {
            $newEngineType = new EngineType();
            $newEngineType->setLabel($engineType);

            $engineTypeColl->add($newEngineType);
        }

        return $engineTypeColl;
    }
}
