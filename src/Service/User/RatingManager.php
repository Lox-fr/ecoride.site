<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Entity\User;
use App\Repository\UserRepository;

class RatingManager
{
    public function __construct(
        private UserRepository $userRepository,
    ) {
    }

    public function addARating(User $driver, int $rating): void
    {
        $driver->setNumberOfRatings($driver->getNumberOfRatings() + 1);
        $driver->setSumOfRatings($driver->getSumOfRatings() + $rating);
        $this->userRepository->updateDriverRatings($driver);
    }
}
