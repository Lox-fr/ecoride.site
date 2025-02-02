<?php

declare(strict_types=1);

namespace App\Service\User;

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
}
