<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use App\Service\SqlManager;
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
    public function __construct(ManagerRegistry $registry, private SqlManager $sqlManager)
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
     * @param User $user the user entity containing the registration details such as email, pseudo, password, etc
     *
     * @throws \Exception If the SQL query execution fails or any other error occurs during registration,
     *                    including issues with the user data (e.g., invalid values).
     */
    public function register(User $user): void
    {
        try {
            $this->sqlManager->execute('userRegistration', 'queries/create', null, [
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
     * Fetches the user ID based on the provided email using a SQL query stored in a local file.
     *
     * This method queries the database for a user with the given email and
     * retrieves the corresponding user ID using a prepared SQL query.
     * If no user is found with the provided email, the method returns null.
     *
     * @param string $email the email of the user whose ID is to be retrieved
     *
     * @throws \Exception if there is an error executing the SQL query or any issue occurs during the database interaction
     *
     * @return int|null the user ID if found, or null if no user exists with the provided email
     */
    public function getUserIdByEmail(string $email): ?int
    {
        try {
            $result = $this->sqlManager->execute('userIdByEmail', 'queries/read', SqlManager::FETCH_ONE, [
                'email' => $email,
            ]);

            return $result ? (int) $result : null;
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Error fetching user ID for email "%s": %s', $email, $e->getMessage()));
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

    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
