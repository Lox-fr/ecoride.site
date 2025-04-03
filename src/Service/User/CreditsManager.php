<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Document\Carpool;
use App\Entity\User;
use App\Repository\UserRepository;

class CreditsManager
{
    public function __construct(
        private UserRepository $userRepository,
    ) {
    }

    /**
     * Update the credits of the provided user.
     * This method updates the user's credits in the database with the provided value.
     *
     * @param User $user     the targeted user
     * @param int  $newValue the new value to set for the user's credits
     */
    public function updateCredits(User $user, int $newValue): void
    {
        $user->setCredits($newValue);
        $this->userRepository->updateCredits($user);
    }

    /**
     * Credit a ride to the driver.
     * This method credits the driver of the provided carpool with the price per person of the carpool.
     *
     * @param Carpool $carpool the carpool to credit to the driver
     */
    public function creditARideToTheDriver(Carpool $carpool): void
    {
        // A user instance hydrated with the driver ID and its credits is required by the user repository method
        $driver = new User();
        $driver->setId($carpool->getDriverUserId());

        // Retrieve the current driver's credits value, calculate the new value and set it
        $currentDriverCreditsValue = $this->userRepository->findCreditsByUserId((int) $carpool->getDriverUserId());
        if ($currentDriverCreditsValue) {
            $newDriverCreditsValue = $currentDriverCreditsValue + $carpool->getPricePerPerson() - 2;
        } else {
            $newDriverCreditsValue = $currentDriverCreditsValue;
        }
        $driver->setCredits((int) $newDriverCreditsValue); 

        // Update the driver's credits in the database
        $this->userRepository->updateCredits($driver);
    }

    /**
     * Credit a ride to the platform.
     * This method credits the admin account with 2 credits.
     */
    public function creditARideToThePlatform(): void
    {
        // A user instance hydrated with the driver ID and its credits is required by the user repository method
        $admin = new User();
        $admin->setId($this->userRepository->findUserIdByEmail('admin@ecoride.site'));

        // Retrieve the admin's credits value, calculate the new value and set it
        $currentAdminCreditsValue = $this->userRepository->findCreditsByUserId((int) $admin->getId());
        $admin->setCredits((int) $currentAdminCreditsValue + 2); 

        // Update the driver's credits in the database
        $this->userRepository->updateCredits($admin);
    }
}
