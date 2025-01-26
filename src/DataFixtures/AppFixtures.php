<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Document\Carpool;
use App\Service\SqlDataFixturesService;
use Doctrine\Bundle\MongoDBBundle\Fixture\Fixture;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function __construct(
        private SqlDataFixturesService $sqlDataFixturesService,
        private EntityManagerInterface $entityManager,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        /* SQL side */
        $drivers = $this->sqlDataFixturesService->loadDriversAndReturnCollection();
        $passengers = $this->sqlDataFixturesService->loadPassengersAndReturnCollection();

        /* NoSQL side */
        $this->loadPopularCarpools($drivers, $passengers);
        $this->loadPastCarpoolsAndReturnCollection($drivers, $passengers);
    }

    /**
     * @param ArrayCollection<User> $drivers
     * @param ArrayCollection<User> $passengers
     *
     * @return ArrayCollection<Carpool>
     */
    private function loadPopularCarpools(ArrayCollection $drivers, ArrayCollection $passengers,
    ): ArrayCollection {
        $carpools = new ArrayCollection();
        $carpools->add(new Carpool());

        return new ArrayCollection();
    }

    /**
     * @param ArrayCollection<User> $drivers
     * @param ArrayCollection<User> $passengers
     *
     * @return ArrayCollection<Carpool>
     */
    private function loadPastCarpoolsAndReturnCollection(ArrayCollection $drivers, ArrayCollection $passengers,
    ): ArrayCollection {
        $carpools = new ArrayCollection();
        $carpools->add(new Carpool());
        $this->loadReviewsOnCarpool($carpools);

        return new ArrayCollection();
    }

    /**
     * @param ArrayCollection<Carpool> $carpools
     */
    private function loadReviewsOnCarpool(ArrayCollection $carpools): void
    {
        // Future implementation for MongoDB fixtures
    }
}
