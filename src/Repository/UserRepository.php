<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Registers a new user in the database using a SQL query stored in a local file.
     *
     * This method inserts the user's information into the 'user' table using a prepared SQL query.
     * If any error occurs during the registration process (e.g., database issues, query execution failure),
     * an exception is thrown.
     *
     * @param User $user The user entity containing the registration details such as email, pseudo, password, etc
     *
     * @throws \Exception If the SQL query execution fails or any other error occurs during registration,
     *                    including issues with the user data (e.g., invalid values).
     */
    public function register(User $user): void
    {
        try {
            $this->sqlHandler->execute('create/user', 'queries', null, [
                'email' => $user->getEmail(),
                'pseudo' => $user->getPseudo(),
                'password' => $user->getPassword(),
                'created_at' => $user->getCreatedAt()->format('Y-m-d H:i:s'),
                'active' => (int) $user->isActive(),
                'credits' => (int) $user->getCredits(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('User registration failed for email "%s": %s', $user->getEmail(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(\sprintf('Instances of "%s" are not supported.', $user::class));
        }

        $user->setPassword($newHashedPassword);
        $this->getEntityManager()->persist($user);
        $this->getEntityManager()->flush();
    }

    /**
     * Fetches the user ID based on the provided email using a SQL query stored in a local file.
     *
     * This method queries the database for a user with the given email and
     * retrieves the corresponding user ID using a prepared SQL query.
     * If no user is found with the provided email, the method returns null.
     *
     * @param string $email The email of the user whose ID is to be retrieved
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return int|null The user ID if found, or null if no user exists with the provided email
     */
    public function findUserIdByEmail(string $email): ?int
    {
        try {
            $result = $this->sqlHandler->execute('read/userIdByEmail', 'queries', SqlHandler::FETCH_ONE, [
                'email' => $email,
            ]);

            return $result ? (int) $result : null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Error fetching user ID for email "%s": %s', $email, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates the passenger profile in the database using a SQL file.
     *
     * This method executes an SQL update query to synchronize the passenger's profile information.
     * It returns "true" if the update was successful, or "false" otherwise.
     *
     * @param User $user The user entity containing the passenger's profile information
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     *
     * @return bool "true" If the update succeeds, "false" otherwise
     */
    public function savePassengerProfile(User $user): bool
    {
        try {
            $result = $this->sqlHandler->execute('update/passengerProfile', 'queries', null, [
                'pseudo' => $user->getPseudo(),
                'photo_filename' => $user->getPhotoFilename(),
                'first_name' => $user->getFirstName(),
                'last_name' => $user->getLastName(),
                'address' => $user->getAddress(),
                'phone_number' => $user->getPhoneNumber(),
                'date_of_birth' => $user->getDateOfBirth() ? $user->getDateOfBirth()->format('Y-m-d H:i:s') : null,
                'updated_at' => (new \DateTime())->format('Y-m-d H:i:s'),
                'id' => $user->getId(),
            ]);

            return true === $result;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Flush of passenger informations failed for "%s": %s', $user->getEmail(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates the driver profile in the database using a SQL file.
     *
     * This method executes an SQL update query to synchronize the driver's profile information.
     * It returns "true" if the update was successful, or "false" otherwise.
     *
     * @param User $user The user entity containing the driver's profile information
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     *
     * @return bool "true" If the update succeeds, "false" otherwise
     */
    public function saveDriverProfile(User $user): bool
    {
        try {
            $result = $this->sqlHandler->execute('update/driverProfile', 'queries', null, [
                'pets_allowed' => (int) $user->isPetsAllowed(),
                'smokers_allowed' => (int) $user->isSmokersAllowed(),
                'driver_role_chosen' => (int) $user->isDriverRoleChosen(),
                'updated_at' => (new \DateTime())->format('Y-m-d H:i:s'),
                'id' => $user->getId(),
            ]);

            return true === $result;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Flush of driver informations failed for "%s": %s', $user->getEmail(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Checks if a user has the role of driver (ROLE_DRIVER).
     *
     * This method uses an SQL query to count the occurrences of the role 'ROLE_DRIVER' for a given user.
     *
     * @param int $userId The ID of the user for whom to check the role
     *
     * @throws \Exception If there is an error executing the SQL query
     *
     * @return bool Returns true if the user is a driver, otherwise false
     */
    public function isDriver(int $userId): bool
    {
        try {
            $result =
                $this->sqlHandler->execute('read/isDriverByUserId', 'queries', SqlHandler::FETCH_ONE,
                    ['user_id' => (int) $userId]);

            return $result > 0;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Fetch of user roles failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Remove the driver role for a specific user (identified by the given user ID) in the database using a SQL file.
     *
     * @param int $userId The user ID for which the driver role is to be removed
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     */
    public function removeDriverRoleByUserId(int $userId): void
    {
        try {
            $this->sqlHandler->execute('delete/driverRoleByUserId', 'queries', null, ['user_id' => (int) $userId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Deletion of driver role failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Add the driver role for a specific user (identified by the given user ID) in the database using a SQL file.
     *
     * @param int $userId The user ID for which the driver role is to be added
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     */
    public function grantDriverRoleByUserId(int $userId): void
    {
        try {
            $this->sqlHandler->execute('create/driverRoleByUserId', 'queries', null, ['user_id' => (int) $userId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Creation of driver role failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Load a driver fixture into the database.
     *
     * This method inserts driver-related data into the database fixtures table.
     * It includes personal information such as pseudo, email, first name, last name,
     * and additional details like address, phone number, and ratings.
     *
     * @param User $user the driver user entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadDriverFixtures(User $user): void
    {
        try {
            $this->sqlHandler->execute('driver', 'fixtures', null, [
                'pseudo' => $user->getPseudo(),
                'email' => $user->getEmail(),
                'password' => $user->getPassword(),
                'created_at' => $user->getCreatedAt()->format('Y-m-d'),
                'active' => (int) $user->isActive(),
                'first_name' => $user->getFirstName(),
                'last_name' => $user->getLastName(),
                'address' => $user->getAddress(),
                'phone_number' => $user->getPhoneNumber(),
                'photo_filename' => $user->getPhotoFilename(),
                'date_of_birth' => $user->getDateOfBirth()->format('Y-m-d'),
                'pets_allowed' => (int) $user->isPetsAllowed(),
                'smokers_allowed' => (int) $user->isSmokersAllowed(),
                'driver_role_chosen' => (int) $user->isDriverRoleChosen(),
                'sum_of_ratings' => $user->getSumOfRatings(),
                'number_of_ratings' => $user->getNumberOfRatings(),
                'credits' => $user->getCredits(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Loading of driver fixture failed for "%s": %s', $user->getPseudo(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Load a passenger fixture into the database using a SQL query stored in a local file.
     *
     * This method inserts passenger-related data into the database fixtures table.
     * It contains limited personal information compared to drivers, focusing on pseudo,
     * email, creation date, and profile photo.
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadPassengerFixtures(User $passenger): void
    {
        try {
            $this->sqlHandler->execute('passenger', 'fixtures', null, [
                'pseudo' => $passenger->getPseudo(),
                'email' => $passenger->getEmail(),
                'password' => $passenger->getPassword(),
                'created_at' => $passenger->getCreatedAt()->format('Y-m-d'),
                'active' => (int) $passenger->isActive(),
                'photo_filename' => $passenger->getPhotoFilename(),
                'credits' => $passenger->getCredits(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Loading of passenger fixture failed for "%s": %s', $passenger->getPseudo(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates the driver's rating values in the database.
     *
     * This method updates the number of ratings and the sum of ratings for the given driver
     * in the database, ensuring that their rating statistics remain accurate.
     *
     * @param User $driver the driver whose ratings need to be updated
     *
     * @throws \Exception if the update operation fails
     */
    public function updateDriverRatings(User $driver): void
    {
        try {
            $this->sqlHandler->execute('update/numberAndSumOfRatings', 'queries', null, [
                'number_of_ratings' => $driver->getNumberOfRatings(),
                'sum_of_ratings' => $driver->getSumOfRatings(),
                'user_id' => $driver->getId(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Update of rating values failed for "%s": %s', $driver->getPseudo(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates the user's credit balance in the database.
     *
     * This method updates the credit balance of the given user, ensuring that their
     * available credits reflect the latest value.
     *
     * @param User $user the user whose credits need to be updated
     *
     * @throws \Exception if the update operation fails
     */
    public function updateCredits(User $user): void
    {
        try {
            $this->sqlHandler->execute('update/creditsByUserId', 'queries', null, [
                'credits' => $user->getCredits(),
                'user_id' => $user->getId(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Update of credits value failed for "%s": %s', $user->getPseudo(), $e->getMessage()), 0, $e);
        }
    }
}
