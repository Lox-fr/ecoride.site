<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Car;
use App\Entity\User;
use App\Entity\Brand;
use App\Entity\Color;
use App\Entity\EngineType;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints\Range;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\NotBlank;

class CarTest extends TestCase
{
    private Car $car;
    private Brand $brand;
    private EngineType $engineType;
    private Color $color;
    private User $user;

    protected function setUp(): void
    {
        // Initialize the Car entity with necessary related entities
        $this->car = new Car();
        $this->brand = new Brand();
        $this->engineType = new EngineType();
        $this->color = new Color();
        $this->user = new User();

        // Set default values
        $this->car->setLicensePlate('AB123CD');
        $this->car->setDateOfFirstRegistration(new \DateTimeImmutable('2020-01-01'));
        $this->car->setModel('Model X');
        $this->car->setUser($this->user);
        $this->car->setBrand($this->brand);
        $this->car->setEngineType($this->engineType);
        $this->car->setColor($this->color);
        $this->car->setNumberOfSeats(5);
    }

    public function testCarSettersAndGetters()
    {
        // Assert License Plate
        $this->assertSame('AB123CD', $this->car->getLicensePlate());
        $this->car->setLicensePlate('EF456GH');
        $this->assertSame('EF456GH', $this->car->getLicensePlate());

        // Assert Date of First Registration
        $this->assertSame('2020-01-01', $this->car->getDateOfFirstRegistration()->format('Y-m-d'));
        $this->car->setDateOfFirstRegistration(new \DateTimeImmutable('2021-05-10'));
        $this->assertSame('2021-05-10', $this->car->getDateOfFirstRegistration()->format('Y-m-d'));

        // Assert Model
        $this->assertSame('Model X', $this->car->getModel());
        $this->car->setModel('Model Y');
        $this->assertSame('Model Y', $this->car->getModel());

        // Assert User
        $this->assertSame($this->user, $this->car->getUser());
        $newUser = new User();
        $this->car->setUser($newUser);
        $this->assertSame($newUser, $this->car->getUser());

        // Assert Brand
        $this->assertSame($this->brand, $this->car->getBrand());
        $newBrand = new Brand();
        $this->car->setBrand($newBrand);
        $this->assertSame($newBrand, $this->car->getBrand());

        // Assert Engine Type
        $this->assertSame($this->engineType, $this->car->getEngineType());
        $newEngineType = new EngineType();
        $this->car->setEngineType($newEngineType);
        $this->assertSame($newEngineType, $this->car->getEngineType());

        // Assert Color
        $this->assertSame($this->color, $this->car->getColor());
        $newColor = new Color();
        $this->car->setColor($newColor);
        $this->assertSame($newColor, $this->car->getColor());

        // Assert Number of Seats
        $this->assertSame(5, $this->car->getNumberOfSeats());
        $this->car->setNumberOfSeats(7);
        $this->assertSame(7, $this->car->getNumberOfSeats());
    }

    public function testCarValidation()
    {
        $validator = Validation::createValidator();

        // License Plate validation
        $violations = $validator->validate($this->car->getLicensePlate(), [
            new NotBlank(),
            new Length(['min' => 7, 'max' => 10]),
            new Regex(['pattern' => '/^[A-Z0-9\s-]{7,10}$/']),
        ]);
        $this->assertCount(0, $violations); // No violations for a valid license plate

        // Date of First Registration validation
        $violations = $validator->validate($this->car->getDateOfFirstRegistration(), [
            new NotBlank(),
            new \Symfony\Component\Validator\Constraints\LessThanOrEqual('today'),
        ]);
        $this->assertCount(0, $violations); // No violations for a valid date

        // Model validation
        $violations = $validator->validate($this->car->getModel(), [
            new NotBlank(),
            new Length(['max' => 50]),
        ]);
        $this->assertCount(0, $violations); // No violations for a valid model

        // Number of Seats validation
        $violations = $validator->validate($this->car->getNumberOfSeats(), [
            new NotNull(),
            new Range(['min' => 1, 'max' => 9]),
        ]);
        $this->assertCount(0, $violations); // No violations for a valid number of seats
    }
}
