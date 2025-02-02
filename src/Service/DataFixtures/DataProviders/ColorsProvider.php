<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\Color;
use Doctrine\Common\Collections\ArrayCollection;

class ColorsProvider
{
    private const APP_CAR_COLORS = [
        'Argent',
        'Beige',
        'Bordeaux',
        'Blanche',
        'Bleue',
        'Grise',
        'Jaune',
        'Marron',
        'Noire',
        'Orange',
        'Rose',
        'Rouge',
        'Turquoise',
        'Violet',
        'Verte',
    ];

    /**
     * Returns a collection of all predefined colors.
     *
     * @return ArrayCollection<int, Color>
     */
    public function getCollectionOfColors(): ArrayCollection
    {
        $colorColl = new ArrayCollection();
        foreach (self::APP_CAR_COLORS as $color) {
            $newColor = new Color();
            $newColor->setLabel($color);

            $colorColl->add($newColor);
        }

        return $colorColl;
    }
}
