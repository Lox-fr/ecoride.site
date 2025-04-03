<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Entity\User;
use App\Repository\UserRepository;

class UserManager
{
    public function __construct(
        private UserRepository $userRepository,
    ) {
    }

    /**
     * Creates a new employee in the system.
     *
     * This method checks if the email already exists in the database. If it does, an exception is thrown.
     * If the email is unique, a new employee is created with the provided details.
     *
     * @param string $email     the email address of the new employee
     * @param string $firstName the first name of the new employee
     * @param string $lastName  the last name of the new employee
     *
     * @throws \Exception if the email already exists or if there is an error during creation
     */
    public function createNewEmployee(string $email, string $firstName, string $lastName): void
    {
        // Check if email already exists
        $userId = $this->userRepository->findUserIdByEmail($email);
        if (false !== $userId && null !== $userId) {
            throw new \Exception('A user with this email address already exists.');
        }
        $employee = new User();
        $employee
            ->setEmail($email)
            ->setPseudo($firstName ?? null)
            ->setPassword('mustBeDefined') // Default password - should be changed by the user upon first login
            ->setCreatedAt(new \DateTimeImmutable())
            ->setActive(true)
            ->setCredits(200) // 200 credits for new employees
            ->setPhotoFileName('default.svg')
            ->setFirstName($firstName)
            ->setLastName($lastName)
            ->setAddress(null)
            ->setPhoneNumber(null)
            ->setDateOfBirth(null)
            ->setUpdatedAt(null);
        // flush the new employee to the database
        $this->userRepository->register($employee);
        $employee->setId($this->userRepository->findUserIdByEmail($employee->getEmail()));
        $this->userRepository->savePassengerProfile($employee);
        $this->userRepository->grantEmployeeRoleByUserId($employee->getId());
    }

    /**
     * Suspends a user by their ID.
     *
     * This method updates the user's active status in the database to mark them as suspended.
     *
     * @param int $userId the ID of the user to suspend
     *
     * @throws \Exception if the suspension operation fails
     */
    public function suspendUserByTheirId(int $userId): void
    {
        $result = $this->userRepository->findUserPseudoAndEmailByUserId($userId);

        if (!$result) {
            throw new \Exception('User not found.');
        }

        $this->userRepository->updateActiveAttributeByUserId($userId, 0);
    }

    /**
     * Activates a user by their ID.
     *
     * This method updates the user's active status in the database to mark them as active.
     *
     * @param int $userId the ID of the user to activate
     *
     * @throws \Exception if the activation operation fails
     */
    public function activateUserByTheirId(int $userId): void
    {
        $result = $this->userRepository->findUserPseudoAndEmailByUserId($userId);

        if (!$result) {
            throw new \Exception('User not found.');
        }

        $this->userRepository->updateActiveAttributeByUserId($userId, 1);
    }
}
