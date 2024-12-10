<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Bundle\SecurityBundle\Security;

class RoleManager
{
    private const ROLES_DESCRIPTIONS = [
        'ROLE_PASSENGER' => 'passager',
        'ROLE_DRIVER' => 'chauffeur',
        'ROLE_EMPLOYEE' => 'employé',
        'ROLE_ADMIN' => 'administrateur',
    ];

    public function __construct(private Security $security)
    {
    }

    public function getRoleDescription(): string
    {
        $user = $this->security->getUser();
        if ($user) {
            $roles = $user->getRoles();
            foreach (array_keys(self::ROLES_DESCRIPTIONS) as $prioRole) {
                if (\in_array($prioRole, $roles, true)) {
                    return self::ROLES_DESCRIPTIONS[$prioRole];
                }
            }
        }

        return 'Utilisateur';
    }
}
