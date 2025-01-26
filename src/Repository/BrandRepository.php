<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Brand;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Brand>
 */
class BrandRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, Brand::class);
    }

    /**
     * Load a brand fixture into the database using a SQL query stored in a local file.
     *
     * @param Brand $brand the brand entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadBrandFixtures(Brand $brand): void
    {
        try {
            $this->sqlHandler->execute('brand', 'fixtures', null, [
                'label' => $brand->getLabel(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Loading of brand fixture failed for "%s": %s', $brand->getLabel(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Fetches the brand ID based on the provided label using a SQL query stored in a local file.
     *
     * This method queries the database for a brand with the given label and
     * retrieves the corresponding brand ID using a prepared SQL query.
     * If no brand is found with the provided label, the method returns null.
     *
     * @param string $label The label of the brand whose ID is to be retrieved
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return int|null The brand ID if found, or null if no brand exists with the provided label
     */
    public function findBrandIdByLabel(string $label): ?int
    {
        try {
            $result = $this->sqlHandler->execute('read/brandIdByLabel', 'queries', SqlHandler::FETCH_ONE, [
                'label' => $label,
            ]);

            return $result ? (int) $result : null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Error fetching brand ID with label "%s": %s', $label, $e->getMessage()), 0, $e);
        }
    }
}
