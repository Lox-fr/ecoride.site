<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Car;
use App\Entity\Preference;
use App\Entity\Role;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    private User $user;

    protected function setUp(): void
    {
        $this->user = new User();
    }

    public function testInitialValues()
    {
        // Test if the initial values are correct
        $this->assertNull($this->user->getFirstName());
        $this->assertNull($this->user->getLastName());
        $this->assertSame(20, $this->user->getCredits());
        $this->assertTrue($this->user->isActive());
    }

    public function testSettersAndGetters()
    {
        // Test setters and getters
        $this->user->setFirstName('John');
        $this->user->setLastName('Doe');
        $this->user->setEmail('john.doe@example.com');
        $this->user->setPhoneNumber('+33123456789');
        $this->user->setDateOfBirth(new \DateTimeImmutable('2000-01-01'));

        $this->assertSame('John', $this->user->getFirstName());
        $this->assertSame('Doe', $this->user->getLastName());
        $this->assertSame('john.doe@example.com', $this->user->getEmail());
        $this->assertSame('+33123456789', $this->user->getPhoneNumber());
        $this->assertSame(25, $this->user->getAge()); // Age should be 25 if the current date is 2025
    }

    public function testHasPassengerProfileCompleted()
    {
        // Test if the passenger profile is completed
        $this->user->setPhotoFilename('photo.jpg');
        $this->user->setFirstName('John');
        $this->user->setLastName('Doe');
        $this->user->setPhoneNumber('+33123456789');
        $this->user->setAddress('123 rue de Paris');
        $this->user->setDateOfBirth(new \DateTimeImmutable('2000-01-01'));

        $this->assertTrue($this->user->hasPassengerProfileCompleted());

        $this->user->setAddress(null); // Incomplete
        $this->assertFalse($this->user->hasPassengerProfileCompleted());
    }

    public function testGetAverageRating()
    {
        // Test the calculation of the average rating
        $this->user->setSumOfRatings(15);
        $this->user->setNumberOfRatings(3);

        $this->assertSame(5, (int) $this->user->getAverageRating());

        $this->user->setSumOfRatings(10);
        $this->user->setNumberOfRatings(0);

        $this->assertNull($this->user->getAverageRating()); // Average rating is not defined
    }

    public function testSetCredits()
    {
        // Test modifying credits
        $this->user->setCredits(50);
        $this->assertSame(50, $this->user->getCredits());

        // Case where credits are negative
        $this->user->setCredits(-5);
        $this->assertSame(-5, $this->user->getCredits());
    }

    public function testRoles()
    {
        // Test role management

        // Create a new user
        $this->user = new User();

        // Check that the default role is ROLE_PASSENGER
        $this->assertCount(1, $this->user->getRoles());
        $this->assertContains('ROLE_PASSENGER', $this->user->getRoles());

        // Create an additional role
        $role = new Role();
        $role->setLabel('ROLE_DRIVER'); // Ensure the role is properly configured

        // Add the role to the user
        $this->user->addRole($role);

        // Check that there are now two roles
        $this->assertCount(2, $this->user->getRoles());
        $this->assertContains('ROLE_PASSENGER', $this->user->getRoles());
        $this->assertContains('ROLE_DRIVER', $this->user->getRoles());

        // Remove the added role
        $this->user->removeRole($role);

        // Check that only the default role remains
        $this->assertCount(1, $this->user->getRoles());
        $this->assertContains('ROLE_PASSENGER', $this->user->getRoles());
    }

    public function testPreferences()
    {
        // Test preference management
        $preference = new Preference();
        $this->user->addPreference($preference);

        $this->assertCount(1, $this->user->getPreferences());
        $this->assertSame($preference, $this->user->getPreferences()->first());

        $this->user->removePreference($preference);
        $this->assertCount(0, $this->user->getPreferences());
    }

    public function testCarAssociation()
    {
        // Test the car association
        $car = new Car();
        $this->user->addCar($car);

        $this->assertCount(1, $this->user->getCars());
        $this->assertSame($car, $this->user->getCars()->first());

        $this->assertSame($this->user, $car->getUser());

        $this->user->removeCar($car);
        $this->assertCount(0, $this->user->getCars());
        $this->assertNull($car->getUser());
    }

    public function testEraseCredentials()
    {
        // Test the eraseCredentials method
        $this->user->eraseCredentials();
        // No temporary data is stored, so no assertion needed here
        $this->assertTrue(true);
    }

    public function testGetAge()
    {
        // Test the getter for age, including null
        $this->user->setDateOfBirth(new \DateTimeImmutable('2000-01-01'));
        $this->assertSame(25, $this->user->getAge()); // Assuming the current year is 2025

        $this->user->setDateOfBirth(null);
        $this->assertNull($this->user->getAge()); // Should return null if no date of birth is set
    }

    public function testSetPetsAllowed()
    {
        // Test setting the petsAllowed value
        $this->user->setPetsAllowed(true);
        $this->assertTrue($this->user->isPetsAllowed());

        $this->user->setPetsAllowed(false);
        $this->assertFalse($this->user->isPetsAllowed());
    }

    public function testSetSmokersAllowed()
    {
        // Test setting the smokersAllowed value
        $this->user->setSmokersAllowed(true);
        $this->assertTrue($this->user->isSmokersAllowed());

        $this->user->setSmokersAllowed(false);
        $this->assertFalse($this->user->isSmokersAllowed());
    }

    public function testGetSumOfRatings()
    {
        // Test getter for sum of ratings
        $this->user->setSumOfRatings(50);
        $this->assertSame(50, $this->user->getSumOfRatings());
    }

    public function testGetNumberOfRatings()
    {
        // Test getter for number of ratings
        $this->user->setNumberOfRatings(5);
        $this->assertSame(5, $this->user->getNumberOfRatings());
    }

    public function testSetDriverRoleChosen()
    {
        // Test setting the driver role chosen flag
        $this->user->setDriverRoleChosen(true);
        $this->assertTrue($this->user->isDriverRoleChosen());

        $this->user->setDriverRoleChosen(false);
        $this->assertFalse($this->user->isDriverRoleChosen());
    }
}
