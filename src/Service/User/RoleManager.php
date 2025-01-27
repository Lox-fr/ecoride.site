<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormInterface;

class RoleManager
{
    private const ROLES_DESCRIPTIONS = [
        'ROLE_ADMIN' => 'administrateur',
        'ROLE_EMPLOYEE' => 'employé',
        'ROLE_DRIVER' => 'chauffeur',
        'ROLE_PASSENGER' => 'passager',
    ];

    public function __construct(
        private Security $security,
        private UserRepository $userRepository,
    ) {
    }

    /**
     * Returns a human-readable description of the user's role.
     *
     * @return string role description or 'Utilisateur' if no specific role matches
     */
    public function getRoleDescription(): string
    {
        $user = $this->security->getUser();
        if (!$user) {
            return 'Utilisateur non connecté';
        }
        $roles = $user->getRoles();
        foreach (array_keys(self::ROLES_DESCRIPTIONS) as $role) {
            if (\in_array($role, $roles, true)) {
                return self::ROLES_DESCRIPTIONS[$role];
            }
        }

        return 'Utilisateur';
    }

    /**
     * Handles the form submission to manage the "Driver" role for the user.
     * If the user already has the role, it validates whether they still meet the criteria.
     * If the user does not have the role, it checks if they are eligible to acquire it.
     *
     * Note: Role changes currently cause the user to be logged out due to session updates.
     *
     * @param FormInterface $form the submitted form to process
     *
     * @throws \Exception if the user is not authenticated
     *
     * @return bool true if the user retains or gains the "Driver" role, false otherwise
     */
    public function handleProfileFormToBeDriver(FormInterface $form): bool
    {
        /** @var User $user */
        $user = $this->security->getUser();
        if (!$user) {
            throw new \Exception('Utilisateur non connecté');
        }

        if ($form->isSubmitted() && $form->isValid()) {
            if ($this->userRepository->isDriver($user->getId())) {
                // If the user already has the "Driver" role, validate whether they still meet the criteria
                if (!self::canBeDriver($user) || !$user->isDriverRoleChosen()) {
                    $this->userRepository->removeDriverRoleByUserId($user->getId());

                    return false;
                }
            } else {
                // If the user does not have the role, check if they meet the criteria to acquire it
                if ($user->isDriverRoleChosen()) {
                    if (self::canBeDriver($user)) {
                        $this->userRepository->grantDriverRoleByUserId($user->getId());
                    } else {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    /**
     * Validates whether a user meets the requirements to become a driver.
     *
     * @param User $user the user to validate
     *
     * @return bool true if all criteria are met, false otherwise
     */
    private function canBeDriver(User $user): bool
    {
        return null !== $user->getEmail()
            && null !== $user->getPseudo()
            && null !== $user->getFirstName()
            && null !== $user->getLastName()
            && null !== $user->getPhoneNumber()
            && null !== $user->getDateOfBirth()
            && !empty($user->getCars())
            && null !== $user->isSmokersAllowed()
            && null !== $user->isPetsAllowed();
    }
}
