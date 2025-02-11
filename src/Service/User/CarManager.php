<?php

declare(strict_types=1);

namespace App\Service\User;

use App\Entity\Car;
use App\Repository\CarRepository;

class CarManager
{
    public function __construct(
        private CarRepository $carRepository,
    ) {
    }

    /**
     * Add a new car entry to the database, linking it to a specific user.
     *
     * @param Car $newCar The car entity to be saved in the database
     */
    public function saveNewCar(Car $newCar): void
    {
        $this->carRepository->createCar($newCar);
    }

    /**
     * Update an existing car entry in the database.
     *
     * This function updates the car's information in the database.
     * The SQL query is based on the "user_id".
     *
     * @param Car $newCar the updated car entity to be saved
     */
    public function updateCar(Car $newCar): void
    {
        $this->carRepository->updateCar($newCar);
    }

    /**
     * Retrieve the license plates of cars linked to a specific user.
     *
     * @param int $userId The id of the user whose cars' license plates should be retrieved
     *
     * @return array<int, string> An array of license plates or an empty array
     */
    public function findLicencePlatesByUserId(int $userId): array
    {
        return $this->carRepository->findLicencePlatesByUserId($userId);
    }

    /**
     * Delete a car from the database by its license plate.
     *
     * @param string $licensePlate the license plate of the car to be removed
     */
    public function deleteCarByLicensePlate(string $licensePlate): void
    {
        $this->carRepository->deleteCarByLicensePlate($licensePlate);
    }
}
