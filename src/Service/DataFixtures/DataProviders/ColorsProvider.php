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
        'Blanc',
        'Bleu',
        'Gris',
        'Jaune',
        'Marron',
        'Noir',
        'Orange',
        'Rose',
        'Rouge',
        'Turquoise',
        'Violet',
        'Vert',
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
