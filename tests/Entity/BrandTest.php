<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Brand;
use App\Entity\Car;
use PHPUnit\Framework\TestCase;

class BrandTest extends TestCase
{
    private Brand $brand;
    private Car $car;

    protected function setUp(): void
    {
        // Initialize the Brand and Car objects before each test
        $this->brand = new Brand();
        $this->car = new Car();
    }

    public function testAddCar()
    {
        // Add a car to the brand
        $this->brand->addCar($this->car);

        // Assert that the car is now part of the brand's cars collection
        $cars = $this->brand->getCars();
        $this->assertCount(1, $cars); // The brand should have one car
        $this->assertContains($this->car, $cars); // The car should be in the collection

        // Check that the brand is set correctly in the car object
        $this->assertSame($this->brand, $this->car->getBrand());
    }

    public function testRemoveCar()
    {
        // Add the car to the brand first
        $this->brand->addCar($this->car);

        // Remove the car from the brand
        $this->brand->removeCar($this->car);

        // Assert that the car is no longer part of the brand's cars collection
        $cars = $this->brand->getCars();
        $this->assertCount(0, $cars); // The brand should have no cars now
        $this->assertNotContains($this->car, $cars); // The car should no longer be in the collection

        // Check that the brand is null in the car object after removal
        $this->assertNull($this->car->getBrand());
    }

    public function testAddCarAlreadyInCollection()
    {
        // Add the car to the brand
        $this->brand->addCar($this->car);

        // Try to add the same car again (should not add a duplicate)
        $this->brand->addCar($this->car);

        // Assert that there is still only one car in the brand's collection
        $cars = $this->brand->getCars();
        $this->assertCount(1, $cars); // Only one car should exist
    }
}
