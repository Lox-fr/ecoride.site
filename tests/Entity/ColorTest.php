<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Car;
use App\Entity\Color;
use PHPUnit\Framework\TestCase;

class ColorTest extends TestCase
{
    private Color $color;
    private Car $car;

    protected function setUp(): void
    {
        // Initialize the Color and Car objects before each test
        $this->color = new Color();
        $this->car = new Car();
    }

    public function testAddCar()
    {
        // Add a car to the color
        $this->color->addCar($this->car);

        // Assert that the car is now part of the color's cars collection
        $cars = $this->color->getCars();
        $this->assertCount(1, $cars); // The color should have one car
        $this->assertContains($this->car, $cars); // The car should be in the collection

        // Check that the color is set correctly in the car object
        $this->assertSame($this->color, $this->car->getColor());
    }

    public function testRemoveCar()
    {
        // Add the car to the color first
        $this->color->addCar($this->car);

        // Remove the car from the color
        $this->color->removeCar($this->car);

        // Assert that the car is no longer part of the color's cars collection
        $cars = $this->color->getCars();
        $this->assertCount(0, $cars); // The color should have no cars now
        $this->assertNotContains($this->car, $cars); // The car should no longer be in the collection

        // Check that the color is null in the car object after removal
        $this->assertNull($this->car->getColor());
    }

    public function testAddCarAlreadyInCollection()
    {
        // Add the car to the color
        $this->color->addCar($this->car);

        // Try to add the same car again (should not add a duplicate)
        $this->color->addCar($this->car);

        // Assert that there is still only one car in the color's collection
        $cars = $this->color->getCars();
        $this->assertCount(1, $cars); // Only one car should exist
    }
}
