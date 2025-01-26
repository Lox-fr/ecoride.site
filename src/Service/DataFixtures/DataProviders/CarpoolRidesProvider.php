<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Document\Carpool;
use Doctrine\Common\Collections\ArrayCollection;

class CarpoolRidesProvider
{
    private const APP_CARPOOL_RIDES = [
        'Paris' => [
            ['from' => 'Lille',         'averageTimeInMinutes' => 150],
            ['from' => 'Lyon',          'averageTimeInMinutes' => 270],
            ['from' => 'Rennes',        'averageTimeInMinutes' => 210],
            ['from' => 'Rouen',         'averageTimeInMinutes' => 105],
            ['from' => 'Nantes',        'averageTimeInMinutes' => 230],
            ['from' => 'Bordeaux',      'averageTimeInMinutes' => 340],
            ['from' => 'Strasbourg',    'averageTimeInMinutes' => 290],
            ['from' => 'Toulouse',      'averageTimeInMinutes' => 380],
            ['from' => 'Marseille',     'averageTimeInMinutes' => 420],
            ['from' => 'Grenoble',      'averageTimeInMinutes' => 320],
            ['from' => 'Le Havre',      'averageTimeInMinutes' => 200],
            ['from' => 'Dijon',         'averageTimeInMinutes' => 190],
        ],
        'Marseille' => [
            ['from' => 'Paris',         'averageTimeInMinutes' => 420],
            ['from' => 'Lyon',          'averageTimeInMinutes' => 160],
            ['from' => 'Nice',          'averageTimeInMinutes' => 120],
            ['from' => 'Toulouse',      'averageTimeInMinutes' => 240],
            ['from' => 'Montpellier',   'averageTimeInMinutes' => 110],
            ['from' => 'Grenoble',      'averageTimeInMinutes' => 200],
            ['from' => 'Avignon',       'averageTimeInMinutes' => 80],
            ['from' => 'Bordeaux',      'averageTimeInMinutes' => 380],
            ['from' => 'Strasbourg',    'averageTimeInMinutes' => 480],
            ['from' => 'Lille',         'averageTimeInMinutes' => 600],
            ['from' => 'Nantes',        'averageTimeInMinutes' => 560],
            ['from' => 'Dijon',         'averageTimeInMinutes' => 310],
        ],
        'Lyon' => [
            ['from' => 'Paris',         'averageTimeInMinutes' => 270],
            ['from' => 'Marseille',     'averageTimeInMinutes' => 160],
            ['from' => 'Grenoble',      'averageTimeInMinutes' => 90],
            ['from' => 'Dijon',         'averageTimeInMinutes' => 120],
            ['from' => 'Toulouse',      'averageTimeInMinutes' => 300],
            ['from' => 'Bordeaux',      'averageTimeInMinutes' => 370],
            ['from' => 'Strasbourg',    'averageTimeInMinutes' => 290],
            ['from' => 'Nantes',        'averageTimeInMinutes' => 420],
            ['from' => 'Nice',          'averageTimeInMinutes' => 250],
            ['from' => 'Lille',         'averageTimeInMinutes' => 380],
            ['from' => 'Montpellier',   'averageTimeInMinutes' => 170],
            ['from' => 'Saint-Étienne', 'averageTimeInMinutes' => 50],
        ],
        'Toulouse' => [
            ['from' => 'Paris',         'averageTimeInMinutes' => 400],
            ['from' => 'Bordeaux',      'averageTimeInMinutes' => 150],
            ['from' => 'Montpellier',   'averageTimeInMinutes' => 140],
            ['from' => 'Nantes',        'averageTimeInMinutes' => 340],
            ['from' => 'Marseille',     'averageTimeInMinutes' => 230],
            ['from' => 'Lyon',          'averageTimeInMinutes' => 320],
            ['from' => 'Perpignan',     'averageTimeInMinutes' => 120],
            ['from' => 'Nice',          'averageTimeInMinutes' => 450],
            ['from' => 'Pau',           'averageTimeInMinutes' => 110],
            ['from' => 'Albi',          'averageTimeInMinutes' => 60],
            ['from' => 'Limoges',       'averageTimeInMinutes' => 210],
            ['from' => 'Bayonne',       'averageTimeInMinutes' => 180],
        ],
        'Nice' => [
            ['from' => 'Marseille',         'averageTimeInMinutes' => 120],
            ['from' => 'Lyon',              'averageTimeInMinutes' => 270],
            ['from' => 'Toulouse',          'averageTimeInMinutes' => 450],
            ['from' => 'Montpellier',       'averageTimeInMinutes' => 300],
            ['from' => 'Grenoble',          'averageTimeInMinutes' => 250],
            ['from' => 'Cannes',            'averageTimeInMinutes' => 40],
            ['from' => 'Paris',             'averageTimeInMinutes' => 550],
            ['from' => 'Toulon',            'averageTimeInMinutes' => 90],
            ['from' => 'Monaco',            'averageTimeInMinutes' => 30],
            ['from' => 'Aix-en-Provence',   'averageTimeInMinutes' => 150],
            ['from' => 'Digne-les-Bains',   'averageTimeInMinutes' => 180],
            ['from' => 'Avignon',           'averageTimeInMinutes' => 210],
        ],
        'Nantes' => [
            ['from' => 'Paris',         'averageTimeInMinutes' => 230],
            ['from' => 'Rennes',        'averageTimeInMinutes' => 90],
            ['from' => 'Bordeaux',      'averageTimeInMinutes' => 180],
            ['from' => 'Angers',        'averageTimeInMinutes' => 60],
            ['from' => 'La Rochelle',   'averageTimeInMinutes' => 110],
            ['from' => 'Tours',         'averageTimeInMinutes' => 160],
            ['from' => 'Le Mans',       'averageTimeInMinutes' => 120],
            ['from' => 'Lyon',          'averageTimeInMinutes' => 420],
            ['from' => 'Toulouse',      'averageTimeInMinutes' => 400],
            ['from' => 'Brest',         'averageTimeInMinutes' => 180],
            ['from' => 'Strasbourg',    'averageTimeInMinutes' => 550],
            ['from' => 'Marseille',     'averageTimeInMinutes' => 600],
        ],
        'Montpellier' => [
            ['from' => 'Paris',             'averageTimeInMinutes' => 380],
            ['from' => 'Toulouse',          'averageTimeInMinutes' => 150],
            ['from' => 'Marseille',         'averageTimeInMinutes' => 120],
            ['from' => 'Lyon',              'averageTimeInMinutes' => 170],
            ['from' => 'Bordeaux',          'averageTimeInMinutes' => 300],
            ['from' => 'Nice',              'averageTimeInMinutes' => 270],
            ['from' => 'Grenoble',          'averageTimeInMinutes' => 200],
            ['from' => 'Nîmes',             'averageTimeInMinutes' => 45],
            ['from' => 'Clermont-Ferrand',  'averageTimeInMinutes' => 240],
            ['from' => 'Perpignan',         'averageTimeInMinutes' => 90],
            ['from' => 'Strasbourg',        'averageTimeInMinutes' => 600],
            ['from' => 'Lille',             'averageTimeInMinutes' => 700],
        ],
        'Lille' => [
            ['from' => 'Paris',      'averageTimeInMinutes' => 150],
            ['from' => 'Rouen',      'averageTimeInMinutes' => 180],
            ['from' => 'Bruxelles',  'averageTimeInMinutes' => 90],
            ['from' => 'Amiens',     'averageTimeInMinutes' => 80],
            ['from' => 'Reims',      'averageTimeInMinutes' => 160],
            ['from' => 'Calais',     'averageTimeInMinutes' => 110],
            ['from' => 'Le Havre',   'averageTimeInMinutes' => 240],
            ['from' => 'Strasbourg', 'averageTimeInMinutes' => 360],
            ['from' => 'Nantes',     'averageTimeInMinutes' => 540],
            ['from' => 'Lyon',       'averageTimeInMinutes' => 380],
            ['from' => 'Marseille',  'averageTimeInMinutes' => 700],
            ['from' => 'Bordeaux',   'averageTimeInMinutes' => 600],
        ],
        'Rennes' => [
            ['from' => 'Paris',      'averageTimeInMinutes' => 210],
            ['from' => 'Nantes',     'averageTimeInMinutes' => 90],
            ['from' => 'Bordeaux',   'averageTimeInMinutes' => 270],
            ['from' => 'Caen',       'averageTimeInMinutes' => 130],
            ['from' => 'Angers',     'averageTimeInMinutes' => 90],
            ['from' => 'Lille',      'averageTimeInMinutes' => 370],
            ['from' => 'Le Mans',    'averageTimeInMinutes' => 90],
            ['from' => 'Brest',      'averageTimeInMinutes' => 150],
            ['from' => 'Tours',      'averageTimeInMinutes' => 200],
            ['from' => 'Rouen',      'averageTimeInMinutes' => 240],
            ['from' => 'Strasbourg', 'averageTimeInMinutes' => 580],
            ['from' => 'Lyon',       'averageTimeInMinutes' => 450],
        ],
        'Reims' => [
            ['from' => 'Paris',      'averageTimeInMinutes' => 90],
            ['from' => 'Lille',      'averageTimeInMinutes' => 160],
            ['from' => 'Metz',       'averageTimeInMinutes' => 100],
            ['from' => 'Nancy',      'averageTimeInMinutes' => 140],
            ['from' => 'Strasbourg', 'averageTimeInMinutes' => 240],
            ['from' => 'Rouen',      'averageTimeInMinutes' => 180],
            ['from' => 'Troyes',     'averageTimeInMinutes' => 90],
            ['from' => 'Amiens',     'averageTimeInMinutes' => 120],
            ['from' => 'Dijon',      'averageTimeInMinutes' => 220],
            ['from' => 'Lyon',       'averageTimeInMinutes' => 300],
            ['from' => 'Nantes',     'averageTimeInMinutes' => 450],
            ['from' => 'Marseille',  'averageTimeInMinutes' => 600],
        ],
        'Saint-Étienne' => [
            ['from' => 'Lyon',              'averageTimeInMinutes' => 50],
            ['from' => 'Clermont-Ferrand',  'averageTimeInMinutes' => 90],
            ['from' => 'Grenoble',          'averageTimeInMinutes' => 110],
            ['from' => 'Paris',             'averageTimeInMinutes' => 290],
            ['from' => 'Marseille',         'averageTimeInMinutes' => 220],
            ['from' => 'Bordeaux',          'averageTimeInMinutes' => 360],
            ['from' => 'Montpellier',       'averageTimeInMinutes' => 180],
            ['from' => 'Dijon',             'averageTimeInMinutes' => 140],
            ['from' => 'Nice',              'averageTimeInMinutes' => 300],
            ['from' => 'Toulouse',          'averageTimeInMinutes' => 320],
            ['from' => 'Strasbourg',        'averageTimeInMinutes' => 400],
            ['from' => 'Nantes',            'averageTimeInMinutes' => 500],
        ],
        'Le Havre' => [
            ['from' => 'Paris',      'averageTimeInMinutes' => 120],
            ['from' => 'Rouen',      'averageTimeInMinutes' => 60],
            ['from' => 'Caen',       'averageTimeInMinutes' => 90],
            ['from' => 'Lille',      'averageTimeInMinutes' => 210],
            ['from' => 'Rennes',     'averageTimeInMinutes' => 220],
            ['from' => 'Amiens',     'averageTimeInMinutes' => 150],
            ['from' => 'Nantes',     'averageTimeInMinutes' => 300],
            ['from' => 'Brest',      'averageTimeInMinutes' => 360],
            ['from' => 'Tours',      'averageTimeInMinutes' => 240],
            ['from' => 'Dijon',      'averageTimeInMinutes' => 320],
            ['from' => 'Lyon',       'averageTimeInMinutes' => 420],
            ['from' => 'Bordeaux',   'averageTimeInMinutes' => 480],
        ],
        'Toulon' => [
            ['from' => 'Marseille',         'averageTimeInMinutes' => 60],
            ['from' => 'Nice',              'averageTimeInMinutes' => 90],
            ['from' => 'Aix-en-Provence',   'averageTimeInMinutes' => 50],
            ['from' => 'Lyon',              'averageTimeInMinutes' => 240],
            ['from' => 'Montpellier',       'averageTimeInMinutes' => 180],
            ['from' => 'Grenoble',          'averageTimeInMinutes' => 240],
            ['from' => 'Bordeaux',          'averageTimeInMinutes' => 480],
            ['from' => 'Paris',             'averageTimeInMinutes' => 540],
            ['from' => 'Clermont-Ferrand',  'averageTimeInMinutes' => 360],
            ['from' => 'Toulouse',          'averageTimeInMinutes' => 420],
            ['from' => 'Dijon',             'averageTimeInMinutes' => 400],
            ['from' => 'Nantes',            'averageTimeInMinutes' => 600],
        ],
        'Grenoble' => [
            ['from' => 'Lyon',              'averageTimeInMinutes' => 90],
            ['from' => 'Chambéry',          'averageTimeInMinutes' => 50],
            ['from' => 'Saint-Étienne',     'averageTimeInMinutes' => 110],
            ['from' => 'Marseille',         'averageTimeInMinutes' => 180],
            ['from' => 'Toulouse',          'averageTimeInMinutes' => 360],
            ['from' => 'Paris',             'averageTimeInMinutes' => 320],
            ['from' => 'Nice',              'averageTimeInMinutes' => 270],
            ['from' => 'Dijon',             'averageTimeInMinutes' => 180],
            ['from' => 'Nantes',            'averageTimeInMinutes' => 480],
            ['from' => 'Bordeaux',          'averageTimeInMinutes' => 540],
            ['from' => 'Montpellier',       'averageTimeInMinutes' => 200],
            ['from' => 'Clermont-Ferrand',  'averageTimeInMinutes' => 150],
        ],
    ];

    private const APP_POPULAR_CARPOOL_RIDES = [
        'Paris' => [
            ['from' => 'Lille',     'averageTimeInMinutes' => 150],
            ['from' => 'Lyon',      'averageTimeInMinutes' => 270],
            ['from' => 'Rennes',    'averageTimeInMinutes' => 210],
            ['from' => 'Rouen',     'averageTimeInMinutes' => 105],
        ],
        'Lyon' => [
            ['from' => 'Paris',         'averageTimeInMinutes' => 270],
            ['from' => 'Saint-Étienne', 'averageTimeInMinutes' => 50],
            ['from' => 'Grenoble',      'averageTimeInMinutes' => 80],
            ['from' => 'Marseille',     'averageTimeInMinutes' => 180],
        ],
        'Rennes' => [
            ['from' => 'Nantes',    'averageTimeInMinutes' => 90],
            ['from' => 'Caen',      'averageTimeInMinutes' => 130],
            ['from' => 'Paris',     'averageTimeInMinutes' => 210],
            ['from' => 'Bordeaux',  'averageTimeInMinutes' => 270],
        ],
    ];

    /**
     * Returns a collection of all predefined carpools.
     * Each instance is populated with departureCity, arrivalCity, estimatedRideTime and PricePerPerson values.
     *
     * @return ArrayCollection<int, Color>
     */
    public function getCollectionOfCarpools(): ArrayCollection
    {
        $carpoolsCollection = new ArrayCollection();

        foreach (self::APP_CARPOOL_RIDES as $arrivalCity => $data) {
            foreach ($data as $values) {
                $newCarpool = new Carpool();
                $newCarpool
                    ->setDepartureCity($values['from'])
                    ->setArrivalCity($arrivalCity)
                    ->setEstimatedRideTime($values['averageTimeInMinutes'])
                    ->setPricePerPerson((int) ceil($values['averageTimeInMinutes'] / 10));
                $carpoolsCollection->add($newCarpool);
            }
        }

        return $carpoolsCollection;
    }

    /**
     * Returns a collection of all predefined popular carpools.
     * Each instance is populated with departureCity, arrivalCity, estimatedRideTime and PricePerPerson values.
     *
     * @return ArrayCollection<int, Color>
     */
    public function getCollectionOfPopularCarpools(): ArrayCollection
    {
        $popularCarpoolsCollection = new ArrayCollection();

        foreach (self::APP_POPULAR_CARPOOL_RIDES as $arrivalCity => $data) {
            foreach ($data as $values) {
                $newPopularCarpool = new Carpool();
                $newPopularCarpool
                    ->setDepartureCity($values['from'])
                    ->setArrivalCity($arrivalCity)
                    ->setEstimatedRideTime($values['averageTimeInMinutes'])
                    ->setPricePerPerson((int) ceil($values['averageTimeInMinutes'] / 10));
                $popularCarpoolsCollection->add($newPopularCarpool);
            }
        }

        return $popularCarpoolsCollection;
    }
}
