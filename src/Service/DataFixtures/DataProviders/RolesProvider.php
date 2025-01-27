<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\Role;
use Doctrine\Common\Collections\ArrayCollection;

class RolesProvider
{
    private const APP_ROLE_LABELS = [
        'ROLE_ADMIN',
        'ROLE_EMPLOYEE',
        'ROLE_DRIVER',
        'ROLE_PASSENGER',
    ];

    /**
     * Returns a collection of all predefined roles.
     *
     * @return ArrayCollection<int, Role>
     */
    public function getCollectionOfRoles(): ArrayCollection
    {
        $roleColl = new ArrayCollection();
        foreach (self::APP_ROLE_LABELS as $roleLabel) {
            $newRole = new Role();
            $newRole->setLabel($roleLabel);

            $roleColl->add($newRole);
        }

        return $roleColl;
    }
}
