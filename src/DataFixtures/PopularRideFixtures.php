<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Service\SqlDataFixturesService;
use Doctrine\Bundle\MongoDBBundle\Fixture\Fixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;

class PopularRideFixtures extends Fixture
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SqlDataFixturesService $sqlDataFixturesService,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $this->sqlDataFixturesService->loadUDrivers();
        $this->sqlDataFixturesService->loadPassengers();
    }
}
