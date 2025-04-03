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
     * Fetches the user's pseudo and email based on the provided user ID using a SQL query stored in a local file.
     *
     * This method queries the database for a user with the given user ID
     * and retrieves the corresponding pseudo and email
     * using a prepared SQL query. If no user is found with the provided ID, the method returns null.
     *
     * @param int $userId The ID of the user whose pseudo and email are to be retrieved
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return User|null The User object containing the pseudo and email if found, or null if no user exists with the provided user ID
     */
    public function findUserPseudoAndEmailByUserId(int $userId): ?User
    {
        try {
            $result = $this->sqlHandler->execute('read/userPseudoAndEmailByUserId', 'queries',
                SqlHandler::FETCH_ASSOCIATIVE, [
                    'user_id' => $userId,
                ]);

            if ($result) {
                $user = new User();
                $user->setPseudo($result['pseudo']);
                $user->setEmail($result['email']);

                return $user;
            }

            return null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Error fetching pseudo and email for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
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
     * Add the employee role for a specific user (identified by the given user ID) in the database using a SQL file.
     *
     * @param int $employeeId The user ID for which the employee role is to be added
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     */
    public function grantEmployeeRoleByUserId(int $employeeId): void
    {
        try {
            $this->sqlHandler->execute(
                'create/employeeRoleByUserId', 'queries', null, ['user_id' => (int) $employeeId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Creation of employee role failed for user id "%s": %s', $employeeId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Retrieves all employees from the database using a SQL query stored in a local file.
     *
     * This method fetches the IDs and email addresses of all employees
     * using a SQL query stored in a local file.
     *
     * @throws \Exception if the retrieval operation fails
     *
     * @return array An array of employees with their IDs and email addresses
     */
    public function findAllActiveEmployees(): array
    {
        try {
            $result = $this->sqlHandler->execute(
                'read/pseudoAndEmailOfActiveEmployees', 'queries', SqlHandler::FETCH_ALL_ASSOCIATIVE, []);

            return $result ?: [];
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Retrieving employees failed: %s', $e->getMessage()), 0, $e);
        }
    }

    /**
     * Add the admin role for a specific user (identified by the given user ID) in the database using a SQL file.
     *
     * @param int $adminId The user ID for which the admin role is to be added
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     */
    public function grantAdminRoleByUserId(int $adminId): void
    {
        try {
            $this->sqlHandler->execute('create/adminRoleByUserId', 'queries', null, ['user_id' => (int) $adminId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Creation of admin role failed for user id "%s": %s', $adminId, $e->getMessage()), 0, $e);
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

    /**
     * Retrieves the credit balance for a given user ID.
     *
     * This method fetches the current credit balance of the specified user
     * from the database.
     *
     * @param int $userId the ID of the user whose credit balance is being retrieved
     *
     * @throws \Exception if the retrieval operation fails
     */
    public function findCreditsByUserId(int $userId): ?int
    {
        try {
            $result =
                $this->sqlHandler->execute('read/creditsByUserId', 'queries', SqlHandler::FETCH_ONE, [
                    'user_id' => $userId,
                ]);

            return $result ?? null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Update of credits value failed for "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Retrieves a user by their ID.
     *
     * This method fetches the user data from the database using a raw SQL query.
     *
     * @param int $userId the ID of the user to retrieve
     *
     * @throws \Exception if the retrieval operation fails
     */
    public function findUserById(int $userId): ?User
    {
        try {
            $result = $this->sqlHandler->execute('read/userById', 'queries', SqlHandler::FETCH_ASSOCIATIVE, [
                'user_id' => $userId,
            ]);

            if ($result) {
                $user = new User();
                $user->setId($userId)
                    ->setPseudo($result['pseudo'])
                    ->setEmail($result['email'])
                    ->setCreatedAt(new \DateTimeImmutable($result['created_at']))
                    ->setActive((bool) $result['active'])
                    ->setFirstName($result['first_name'])
                    ->setLastName($result['last_name'])
                    ->setAddress($result['address'])
                    ->setPhoneNumber($result['phone_number'])
                    ->setPhotoFilename($result['photo_filename'])
                    ->setDateOfBirth(new \DateTimeImmutable($result['date_of_birth']))
                    ->setPetsAllowed((bool) $result['pets_allowed'])
                    ->setDriverRoleChosen((bool) $result['driver_role_chosen'])
                    ->setSmokersAllowed((bool) $result['smokers_allowed'])
                    ->setSumOfRatings((int) $result['sum_of_ratings'])
                    ->setNumberOfRatings((int) $result['number_of_ratings'])
                    ->setCredits((int) $result['credits'])
                ;

                return $user;
            }

            return null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Retrieving user failed for ID "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates the active status of a user by their ID.
     *
     * This method updates the user's active status in the database using a SQL query stored in a local file.
     *
     * @param int $userId the ID of the user whose active status is to be updated
     *
     * @throws \Exception if the update operation fails
     */
    public function updateActiveAttributeByUserId(int $userId, int $boolStatus): void
    {
        try {
            $this->sqlHandler->execute('update/activeStatusByUserId', 'queries', null, [
                'user_id' => $userId,
                'status' => $boolStatus,
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Suspending user failed for ID "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Retrieves all suspended users from the database.
     *
     * This method fetches the IDs and email addresses of all suspended users
     * using a SQL query stored in a local file.
     *
     * @throws \Exception if the retrieval operation fails
     *
     * @return array An array of suspended users with their IDs and email addresses
     */
    public function findAllSuspendedUsers(): array
    {
        try {
            $result = $this->sqlHandler->execute(
                'read/idAndEmailOfsuspendedUsers', 'queries', SqlHandler::FETCH_ALL_ASSOCIATIVE, []);

            return $result ?: [];
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Retrieving suspended users failed: %s', $e->getMessage()), 0, $e);
        }
    }
}
