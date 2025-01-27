<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Service\DataFixtures\NoSqlDataFixturesService;
use App\Service\DataFixtures\SqlDataFixturesService;
use Doctrine\Bundle\MongoDBBundle\Fixture\Fixture;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function __construct(
        private SqlDataFixturesService $sqlDataFixturesService,
        private NoSqlDataFixturesService $noSqlDataFixturesService,
    ) {
    }

    /**
     * Loads data fixtures into both SQL and NoSQL databases.
     *
     * @param ObjectManager $manager from Doctrine, which should be an instance of DocumentManager for MongoDB
     *
     * @throws \RuntimeException if the manager is not an instance of DocumentManager
     */
    public function load(ObjectManager $manager): void
    {
        /*
         * Ensures that the command is executed with the Doctrine ODM (Object Document Mapper),
         * and not with the ORM (Object Relational Mapper).
         */
        if (!$manager instanceof DocumentManager) {
            throw new \RuntimeException('Expected DocumentManager');
        }

        /* SQL side - using custom SQL queries */
        $drivers = $this->sqlDataFixturesService->loadDriversAndReturnCollection();
        $passengers = $this->sqlDataFixturesService->loadPassengersAndReturnCollection();

        /* NoSQL side - using document manager */
        $this->noSqlDataFixturesService->loadPastCarpoolsForLast6Month($drivers, $passengers);
        $this->noSqlDataFixturesService->loadPopularCarpoolsForNextMonth($drivers, $passengers);
    }
}
