<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

class CarpoolPlacesProvider
{
    private const APP_CARPOOL_PLACES = [
        'Allée des Tilleuls',
        "Avenue de l'Indépendance",
        'Avenue de la Gare',
        'Boulevard de la Liberté',
        'Boulevard de la Mer',
        'Boulevard des Invalides',
        'Boulevard Saint-Germain',
        'Chemin de la Mer',
        'Chemin des Vignes',
        'Gare',
        'Mairie',
        'Passage du Commerce',
        "Place de l'Ancienne Mairie",
        "Place de l'Église",
        "Place de l'Hotel de Ville",
        'Place de la Concorde',
        'Place de la Fontaine',
        'Place de la Mairie',
        'Place de la République',
        'Place des Fêtes',
        'Place des Vosges',
        'Place du Carrousel',
        'Place du Marché',
        'Place du Palais',
        'Place du Tertre',
        'Place Saint-Michel',
        'Quai du Fleuve',
        "Rue de l'Opéra",
        'Rue de la Fontaine',
        'Rue de la Liberté',
        'Rue de la Mare',
        'Rue de la Paix',
        'Rue de la République',
        'Rue de la Tour',
        'Rue des Acacias',
        'Rue des Écoles',
        'Rue des Lilas',
        'Rue du 11 Novembre',
        'Rue du Château',
        'Rue du Général Leclerc',
        'Rue du Faubourg Saint-Antoine',
        'Rue du Mont-Saint-Michel',
        'Rue du Parc',
        'Rue du Port',
        'Rue du Soleil Levant',
        "Square de l'Indépendance",
    ];

    /**
     * Returns a place picked from a predefined list of places.
     */
    public function getRandomCarpoolPlace(): string
    {
        return self::APP_CARPOOL_PLACES[rand(0, \count(self::APP_CARPOOL_PLACES) - 1)];
    }
}
