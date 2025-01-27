<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\EngineType;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EngineType>
 */
class EngineTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, EngineType::class);
    }

    /**
     * Load a engineType fixture into the database using a SQL query stored in a local file.
     *
     * @param EngineType $engineType the engineType entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadEngineTypeFixtures(EngineType $engineType): void
    {
        try {
            $this->sqlHandler->execute('engineType', 'fixtures', null, [
                'label' => $engineType->getLabel(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Loading of engineType fixture failed for "%s": %s', $engineType->getLabel(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Fetches the engine type ID based on the provided label using a SQL query stored in a local file.
     *
     * This method queries the database for a engine type with the given label and
     * retrieves the corresponding engine type ID using a prepared SQL query.
     * If no engine type is found with the provided label, the method returns null.
     *
     * @param string $label The label of the engine type whose ID is to be retrieved
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return int|null The engine type ID if found, or null if no engine type exists with the provided label
     */
    public function findEngineTypeIdByLabel(string $label): ?int
    {
        try {
            $result = $this->sqlHandler->execute('read/engineTypeIdByLabel', 'queries', SqlHandler::FETCH_ONE, [
                'label' => $label,
            ]);

            return $result ? (int) $result : null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Error fetching engine type ID with label "%s": %s', $label, $e->getMessage()), 0, $e);
        }
    }
}
