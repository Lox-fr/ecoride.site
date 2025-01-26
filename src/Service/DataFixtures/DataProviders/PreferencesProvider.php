<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\Preference;
use Doctrine\Common\Collections\ArrayCollection;

class PreferencesProvider
{
    private const APP_DRIVER_PREFERENCES = [
        'Climatisation disponible',
        'Chauffage disponible',
        'Wi-Fi disponible',
        'Prise USB disponible',
        'Siège enfant disponible',
        'Siège chauffant disponible',
        'Espace pour bagages volumineux',
        'Conduite prudente',
        'Conduite éco-responsable',
        'Horaires flexibles',
        'Femmes uniquement',
        // Exclusive préferences
        'Musique autorisée',
        'Pas de musique à bord',
        'Discussions appréciées',
        'Discussions limitées',
        'Arrêts flexibles',
        'Pas d\'arrêts non prévus',
        'Nourriture autorisée',
        'Pas de nourriture à bord',
        'Trajets sur autoroute privilégiés',
        'Trajets sans péage privilégiés',
    ];

    private const EXCLUSIVE_PREFERENCES = [
        'Musique autorisée' => 'Pas de musique à bord',
        'Discussions appréciées' => 'Discussions limitées',
        'Arrêts flexibles' => 'Pas d\'arrêts non prévus',
        'Nourriture autorisée' => 'Pas de nourriture à bord',
        'Trajets sur autoroute privilégiés' => 'Trajets sans péage privilégiés',
    ];

    /**
     * Returns a collection containing a specified number of consistent preferences.
     * Opposite preferences cannot coexist in the returned collection.
     *
     * @param int $numberOfPreferences the number of preferences to include
     *
     * @return ArrayCollection<int, Preference>
     */
    public function getCollectionOfConsistentPreferences(int $numberOfPreferences): ArrayCollection
    {
        $preferenceCollection = new ArrayCollection();

        if ($numberOfPreferences <= 0) {
            return $preferenceCollection;
        }

        $availablePreferences = self::APP_DRIVER_PREFERENCES;
        shuffle($availablePreferences);

        foreach ($availablePreferences as $preference) {
            if ($this->isExclusivePresent($preferenceCollection, $preference)) {
                continue;
            }

            $newPreference = new Preference();
            $newPreference->setLabel($preference);
            $preferenceCollection->add($newPreference);

            if ($preferenceCollection->count() >= $numberOfPreferences) {
                break;
            }
        }

        return $preferenceCollection;
    }

    /**
     * Checks whether an exclusive preference is already present in the collection.
     * Verifies if the opposite preference exists in the current preferences.
     *
     * @param ArrayCollection<int, Preference> $collection The current collection of preferences
     * @param string                           $preference The preference to check
     *
     * @return bool Returns true if an exclusive preference is already present
     */
    private function isExclusivePresent(ArrayCollection $collection, string $preference): bool
    {
        $labels = array_map(fn (Preference $p) => $p->getLabel(), $collection->toArray());

        return (isset(self::EXCLUSIVE_PREFERENCES[$preference])
                && \in_array(self::EXCLUSIVE_PREFERENCES[$preference], $labels, true))
            || (false !== ($opposite = array_search($preference, self::EXCLUSIVE_PREFERENCES, true))
                && \in_array($opposite, $labels, true));
    }
}
