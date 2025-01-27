<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Car;
use App\Service\SqlHandler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Car>
 */
class CarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private SqlHandler $sqlHandler)
    {
        parent::__construct($registry, Car::class);
    }

    /**
     * Load a car fixture into the database using a SQL query stored in a local file.
     *
     * @param Car $car the car entity containing the necessary fixture data
     *
     * @throws \Exception if an error occurs during the execution of the SQL statement
     */
    public function loadCarFixtures(Car $car): void
    {
        try {
            $this->sqlHandler->execute('car', 'fixtures', null, [
                'license_plate' => $car->getLicensePlate(),
                'date_of_first_registration' => $car->getDateOfFirstRegistration()->format('Y-m-d H:i:s'),
                'model' => $car->getModel(),
                'user_id' => $car->getUser()->getId(),
                'brand_id' => $car->getBrand()->getId(),
                'engine_type_id' => $car->getEngineType()->getId(),
                'color_id' => $car->getColor()->getId(),
                'number_of_seats' => (int) $car->getNumberOfSeats(),
                'created_at' => $car->getCreatedAt()->format('Y-m-d H:i:s'),
                'active' => (int) $car->isActive(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('Loading of car fixture failed for "%s": %s', $car->getUser()->getPseudo(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Adds a new car in the database using a SQL query stored in a local file.
     *
     * This method inserts a car into the 'car' table using a prepared SQL query.
     * If any error occurs during the registration process (e.g., database issues, query execution failure),
     * an exception is thrown.
     *
     * @param Car $car The flushed car entity
     *
     * @throws \Exception If the SQL query execution fails or any other error occurs during registration,
     *                    including issues with the user data (e.g., invalid values)
     */
    public function createCar(Car $car): void
    {
        try {
            $this->sqlHandler->execute('create/car', 'queries', null, [
                'license_plate' => $car->getLicensePlate(),
                'date_of_first_registration' => $car->getDateOfFirstRegistration()->format('Y-m-d H:i:s'),
                'model' => $car->getModel(),
                'user_id' => $car->getUser()->getId(),
                'brand_id' => $car->getBrand()->getId(),
                'engine_type_id' => $car->getEngineType()->getId(),
                'color_id' => $car->getColor()->getId(),
                'number_of_seats' => (int) $car->getNumberOfSeats(),
                'created_at' => $car->getCreatedAt()->format('Y-m-d H:i:s'),
                'active' => (int) $car->isActive(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Creation of new car failed for "%s": %s', $car->getLicensePlate(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Fetches the licenses plates (LP) associated with a specific user ID using a SQL query stored in a local file.
     *
     * This method queries the database for LP linked to the provided user ID
     * and retrieves them using a prepared SQL query.
     *
     * @param int $userId The user id of the LP to retrieve
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     *
     * @return array An array of LP with numeric index as keys, or an empty array if no LP are found
     */
    public function findLicencePlatesByUserId(int $userId): array
    {
        try {
            $result = $this->sqlHandler->execute(
                'read/licensePlatesByUserId', 'queries', SqlHandler::FETCH_FIRST_COLUMN, [
                    'user_id' => (int) $userId,
                ]);

            return $result ?: [];
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Error fetching license plates for user id "%s": %s', $userId, $e->getMessage()), 0, $e);
        }
    }

    /**
     * Updates an existing car entry in the database.
     * 
     * This function updates the car's information in the database, ensuring
     * that the update applies to the car owned by the specific user.
     * The SQL query is based on the "user_id".
     * 
     * @param Car $car The car entity containing updated information.
     * 
     * @throws \Exception If the update fails for any reason.
     */
    public function updateCar(Car $car): void
    {
        try {
            $this->sqlHandler->execute('update/car', 'queries', null, [
                'license_plate' => $car->getLicensePlate(),
                'date_of_first_registration' => $car->getDateOfFirstRegistration()->format('Y-m-d H:i:s'),
                'model' => $car->getModel(),
                'user_id' => $car->getUser()->getId(),
                'brand_id' => $car->getBrand()->getId(),
                'engine_type_id' => $car->getEngineType()->getId(),
                'color_id' => $car->getColor()->getId(),
                'number_of_seats' => (int) $car->getNumberOfSeats(),
                'created_at' => $car->getCreatedAt()->format('Y-m-d H:i:s'),
                'active' => (int) $car->isActive(),
                'car_id' => (int) $car->getId(),
            ]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Creation of new car failed for "%s": %s', $car->getLicensePlate(), $e->getMessage()), 0, $e);
        }
    }

    /**
     * Deletes the car associated with a specific license plate using a SQL query stored in a local file.
     *
     * This method executes a prepared SQL query to delete the car linked to the provided license plate.
     *
     * @param string $licensePlate The license plate of the car to delete
     *
     * @throws \Exception If there is an error executing the SQL query or during the database interaction
     */
    public function deleteCarByLicensePlate(string $licensePlate): void
    {
        try {
            $this->sqlHandler->execute(
                'delete/carByLicensePlate', 'queries', null, ['license_plate' => $licensePlate]);
        } catch (\Exception $e) {
            throw new \Exception(\sprintf('
                Error deleting car for license plate "%s": %s', $licensePlate, $e->getMessage()), 0, $e);
        }
    }
}
