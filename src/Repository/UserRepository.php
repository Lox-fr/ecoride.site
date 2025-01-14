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
            throw new \Exception(\sprintf('
                Error fetching user ID for email "%s": %s', $email, $e->getMessage()), 0, $e);
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
            throw new \Exception(\sprintf('
                Flush of passenger informations failed for "%s": %s', $user->getEmail(), $e->getMessage()), 0, $e);
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
            throw new \Exception(\sprintf('
                Flush of driver informations failed for "%s": %s', $user->getEmail(), $e->getMessage()), 0, $e);
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
            throw new \Exception(\sprintf('
                Fetch of user roles failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
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
            throw new \Exception(\sprintf('
                Deletion of driver role failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Add the driver role for a specific user (identified by the given user ID) in the database using a SQL file.
     *
     * @param int $userId The user ID for which the driver role is to be added
     *
     * @throws \Exception If the SQL query execution fails, an exception is thrown with details
     */
    public function addDriverRoleByUserId(int $userId): void
    {
        try {
            $this->sqlHandler->execute('create/driverRoleByUserId', 'queries', null, ['user_id' => (int) $userId]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Creation of driver role failed for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }
}
