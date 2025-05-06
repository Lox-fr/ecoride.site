<?php

declare(strict_types=1);

namespace App\Tests\DataFixtures;

use App\DataFixtures\AppFixtures;
use App\Service\DataFixtures\NoSqlDataFixturesService;
use App\Service\DataFixtures\SqlDataFixturesService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\Persistence\ObjectManager;
use PHPUnit\Framework\TestCase;
use Doctrine\Common\Collections\ArrayCollection;

class AppFixturesTest extends TestCase
{
    private SqlDataFixturesService $sqlDataFixturesService;
    private NoSqlDataFixturesService $noSqlDataFixturesService;
    private AppFixtures $appFixtures;

    protected function setUp(): void
    {
        $this->sqlDataFixturesService = $this->createMock(SqlDataFixturesService::class);
        $this->noSqlDataFixturesService = $this->createMock(NoSqlDataFixturesService::class);

        $this->appFixtures = new AppFixtures(
            $this->sqlDataFixturesService,
            $this->noSqlDataFixturesService
        );
    }

    public function testLoadThrowsExceptionIfManagerIsNotDocumentManager(): void
    {
        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessage('Expected DocumentManager');

        $objectManager = $this->createMock(ObjectManager::class);
        $this->appFixtures->load($objectManager);
    }

    public function testLoadExecutesSqlAndNoSqlDataFixtures(): void
    {
        $documentManager = $this->createMock(DocumentManager::class);

        // Simuler des collections de drivers et de passagers
        $drivers = new ArrayCollection();
        $passengers = new ArrayCollection();

        // On vérifie que les méthodes des services sont bien appelées
        $this->sqlDataFixturesService
            ->expects($this->once())
            ->method('loadDriversAndReturnCollection')
            ->willReturn($drivers);

        $this->sqlDataFixturesService
            ->expects($this->once())
            ->method('loadPassengersAndReturnCollection')
            ->willReturn($passengers);

        $this->noSqlDataFixturesService
            ->expects($this->once())
            ->method('loadPastCarpoolsForLast6Month')
            ->with($drivers, $passengers);

        $this->noSqlDataFixturesService
            ->expects($this->once())
            ->method('loadPopularCarpoolsForNextMonth')
            ->with($drivers, $passengers);

        // Exécuter la méthode load
        $this->appFixtures->load($documentManager);
    }
}
