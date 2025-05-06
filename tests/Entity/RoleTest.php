<?php

declare(strict_types=1);

namespace App\Tests\Entity;

use App\Entity\Role;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class RoleTest extends TestCase
{
    private User $user;

    protected function setUp(): void
    {
        $this->user = new User(); // Initialize the User object before each test
    }

    public function testRoleManagement()
    {
        // Create a new role
        $role = new Role();
        $role->setLabel('ROLE_DRIVER'); // Set the role label

        // Add the role to the user
        $this->user->addRole($role);

        // Check that the role has been added to the user
        $roles = $this->user->getRoles();
        $this->assertCount(2, $roles); // The user should have two roles: the default ROLE_PASSENGER and ROLE_DRIVER
        $this->assertContains('ROLE_PASSENGER', $roles);
        $this->assertContains('ROLE_DRIVER', $roles);

        // Remove the role from the user
        $this->user->removeRole($role);

        // Check that only the default role remains for the user
        $roles = $this->user->getRoles();
        $this->assertCount(1, $roles); // Only the default ROLE_PASSENGER should remain
        $this->assertContains('ROLE_PASSENGER', $roles);
        $this->assertNotContains('ROLE_DRIVER', $roles);

        // Check that the role no longer has any users associated with it
        $users = $role->getUsers();
        $this->assertCount(0, $users); // The role should no longer have any users associated with it
    }

    public function testAddAndRemoveUserToRole()
    {
        // Create a new role
        $role = new Role();
        $role->setLabel('ROLE_DRIVER');

        // Create a new user
        $user = new User();

        // Add the user to the role using the addUser method
        $role->addUser($user);

        // Check that the user has been added to the role's users collection
        $users = $role->getUsers();
        $this->assertCount(1, $users); // The role should have one user
        $this->assertContains($user, $users); // The user should be in the collection

        // Check that the role has been added to the user's roles collection
        $roles = $user->getRoles();
        $this->assertCount(2, $roles); // The user should have two roles: the default and ROLE_DRIVER
        $this->assertContains('ROLE_DRIVER', $roles);

        // Remove the user from the role using the removeUser method
        $role->removeUser($user);

        // Check that the user has been removed from the role's users collection
        $users = $role->getUsers();
        $this->assertCount(0, $users); // The role should no longer have any users
        $this->assertNotContains($user, $users); // The user should no longer be in the collection

        // Check that the role has been removed from the user's roles collection
        $roles = $user->getRoles();
        $this->assertCount(1, $roles); // Only the default role should remain
        $this->assertNotContains('ROLE_DRIVER', $roles); // The user should no longer have ROLE_DRIVER
    }
}
