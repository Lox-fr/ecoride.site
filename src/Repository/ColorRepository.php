<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Color;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Color>
 */
class ColorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, Color::class);
    }

    /**
     * Load a color fixture into the database using a SQL query stored in a local file.
     *
     * @param Color $color the color entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadColorFixtures(Color $color): void
    {
        try {
            $this->sqlHandler->execute('color', 'fixtures', null, [
                'label' => $color->getLabel(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Loading of color fixture failed for "%s": %s', $color->getLabel(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Fetches the color ID based on the provided label using a SQL query stored in a local file.
     *
     * This method queries the database for a color with the given label and
     * retrieves the corresponding color ID using a prepared SQL query.
     * If no color is found with the provided label, the method returns null.
     *
     * @param string $label The label of the color whose ID is to be retrieved
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return int|null The color ID if found, or null if no color exists with the provided label
     */
    public function findColorIdByLabel(string $label): ?int
    {
        try {
            $result = $this->sqlHandler->execute('read/colorIdByLabel', 'queries', SqlHandler::FETCH_ONE, [
                'label' => $label,
            ]);

            return $result ? (int) $result : null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf(
                'Error fetching color ID with label "%s": %s', $label, $e->getMessage()), 0, $e);
        }
    }
}
