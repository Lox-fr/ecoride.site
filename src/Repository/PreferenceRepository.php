<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Preference;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Preference>
 */
class PreferenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, Preference::class);
    }

    /**
     * Load a preference fixture into the database using a SQL query stored in a local file.
     *
     * @param Preference $preference the preference entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadPreferenceFixtures(Preference $preference): void
    {
        try {
            $this->sqlHandler->execute('preference', 'fixtures', null, [
                'label' => $preference->getLabel(),
                'user_id' => (int) $preference->getUser()->getId(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Loading of preference fixture failed for "%s": %s', $preference->getLabel(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Adds a new custom preference in the database using a SQL query stored in a local file.
     *
     * This method inserts a preference into the 'preference' table using a prepared SQL query.
     * If any error occurs during the registration process (e.g., database issues, query execution failure),
     * an exception is thrown.
     *
     * @param Preference $preference The flushed preference entity
     *
     * @throws \Exception If the SQL query execution fails or any other error occurs during registration,
     *                    including issues with the user data (e.g., invalid values)
     */
    public function createPreference(Preference $preference): void
    {
        try {
            $this->sqlHandler->execute('create/preference', 'queries', null, [
                'label' => $preference->getLabel(),
                'user_id' => (int) $preference->getUser()->getId(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Creation of new preference failed for "%s": %s', $preference->getLabel(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Fetches the preference labels (PL) associated with a specific user ID using a SQL query stored in a local file.
     *
     * This method queries the database for PL linked to the provided user ID
     * and retrieves them using a prepared SQL query.
     *
     * @param int $userId The user id of the PL to retrieve
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return array An array of PL with numeric index as keys, or an empty array if no PL are found
     */
    public function findPreferenceIdsByUserId(int $userId): array
    {
        try {
            $result = $this->sqlHandler->execute(
                'read/preferenceIdsByUserId', 'queries', SqlHandler::FETCH_FIRST_COLUMN, [
                    'user_id' => (int) $userId,
                ]);

            return $result ?: [];
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Error fetching preference labels for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Deletes a preference from the database based on its id.
     *
     * @throws \Exception If an error occurs during the deletion process
     */
    public function deletePreferenceById(int $preferenceId): void
    {
        try {
            $this->sqlHandler->execute(
                'delete/preferenceById', 'queries', null, ['preference_id' => (int) $preferenceId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Error deleting preference with id "%s": %s', $preferenceId, $e->getMessage()), 0, $e);
        }
    }
}
