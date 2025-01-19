<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Entity\Preference;
use App\Repository\PreferenceRepository;

class PreferenceManager
{
    public function __construct(
        private PreferenceRepository $preferenceRepository,
    ) {
    }

    /**
     * Add a new preference entry to the database, linking it to a specific user.
     *
     * @param Preference $newPreference the preference entity to be saved in the database
     */
    public function saveNewPreference(Preference $newPreference): void
    {
        $this->preferenceRepository->createPreference($newPreference);
    }

    /**
     * Retrieve the preference ids of preferences linked to a specific user.
     *
     * @param int $userId the id of the user whose preference labels should be retrieved
     *
     * @return array<int, int> an array of preference ids or an empty array if no preferences are found
     */
    public function findPreferenceIdsByUserId(int $userId): array
    {
        return $this->preferenceRepository->findPreferenceIdsByUserId($userId);
    }

    /**
     * Delete a preference from the database by its id.
     */
    public function deletePreferenceById(int $preferenceId): void
    {
        $this->preferenceRepository->deletePreferenceById($preferenceId);
    }
}
