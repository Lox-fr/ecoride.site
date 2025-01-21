<?php

declare(strict_types=1);

namespace App\Service;

use App\Repository\UserRepository;
use App\Service\DataFixtures\UserFixturesProvider;
use App\Service\SqlHandler;

class SqlDataFixturesService
{
    public function __construct(
        private UserFixturesProvider $userFixturesProvider,
        private UserRepository $userRepository,
        private SqlHandler $sqlHandler,
    ) {
    }

    public function loadUDrivers(): void
    {
        $drivers = $this->userFixturesProvider->getCollectionOfDrivers();
        foreach ($drivers as $driver) {
            $this->userRepository->loadDriverFixtures($driver);
            $userId = $this->userRepository->findUserIdByEmail($driver->getEmail());
            $this->userRepository->grantDriverRoleByUserId($userId);
        }
    }

    public function loadPassengers(): void
    {
        $passengers = $this->userFixturesProvider->getCollectionOfPassengers();
        foreach ($passengers as $passenger) {
            $this->userRepository->loadPassengerFixtures($passenger);
        }
    }
}
