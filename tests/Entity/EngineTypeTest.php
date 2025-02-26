<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Car;
use App\Entity\EngineType;
use PHPUnit\Framework\TestCase;

class EngineTypeTest extends TestCase
{
    private EngineType $engineType;
    private Car $car;

    protected function setUp(): void
    {
        // Initialize the EngineType and Car objects before each test
        $this->engineType = new EngineType();
        $this->car = new Car();
    }

    public function testAddCar()
    {
        // Add a car to the engine type
        $this->engineType->addCar($this->car);

        // Assert that the car is now part of the engine type's cars collection
        $cars = $this->engineType->getCars();
        $this->assertCount(1, $cars); // The engine type should have one car
        $this->assertContains($this->car, $cars); // The car should be in the collection

        // Check that the engine type is set correctly in the car object
        $this->assertSame($this->engineType, $this->car->getEngineType());
    }

    public function testRemoveCar()
    {
        // Add the car to the engine type first
        $this->engineType->addCar($this->car);

        // Remove the car from the engine type
        $this->engineType->removeCar($this->car);

        // Assert that the car is no longer part of the engine type's cars collection
        $cars = $this->engineType->getCars();
        $this->assertCount(0, $cars); // The engine type should have no cars now
        $this->assertNotContains($this->car, $cars); // The car should no longer be in the collection

        // Check that the engine type is null in the car object after removal
        $this->assertNull($this->car->getEngineType());
    }

    public function testAddCarAlreadyInCollection()
    {
        // Add the car to the engine type
        $this->engineType->addCar($this->car);

        // Try to add the same car again (should not add a duplicate)
        $this->engineType->addCar($this->car);

        // Assert that there is still only one car in the engine type's collection
        $cars = $this->engineType->getCars();
        $this->assertCount(1, $cars); // Only one car should exist
    }
}
