<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Role;
use App\Service\SqlHandler;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Role>
 */
class RoleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, Role::class);
    }

    /**
     * Load a role fixture into the database using a SQL query stored in a local file.
     *
     * @param Role $role the role entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadRoleFixtures(Role $role): void
    {
        try {
            $this->sqlHandler->execute('role', 'fixtures', null, [
                'label' => $role->getLabel(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Loading of role fixture failed for "%s": %s', $role->getLabel(), $e->getMessage()), 0, $e);
        }
    }
}
