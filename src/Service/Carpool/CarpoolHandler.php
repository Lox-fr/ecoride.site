<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use App\Entity\User;
use Symfony\Component\Form\FormInterface;

class CarpoolHandler
{
    /**
     * Populates a given Carpool instance with data from the driver and submitted form.
     * Also handles the non-mapped attribute `estimatedRideTime` to calculate the arrival time.
     *
     * @param Carpool       $carpool     the Carpool instance to update
     * @param FormInterface $carpoolForm the submitted form containing carpool data
     * @param User          $driver      the user who is the driver for the carpool
     *
     * @return Carpool the updated Carpool instance with driver and vehicle details
     */
    public function populateCarpoolWithDriverAndFormDetails(
        Carpool $carpool, FormInterface $carpoolForm, User $driver): Carpool
    {
        $car = $carpoolForm->get('car')->getData();

        $driverPreferences = [];
        foreach ($driver->getPreferences() as $preference) {
            $driverPreferences[] = $preference->getLabel();
        }

        $arrivalTime = $this->calculateArrivalTime($carpool, $carpoolForm);

        $carpool
            ->setArrivalTime($arrivalTime)
            ->setTotalNumberOfSeats($car->getNumberOfSeats())
            ->setNumberOfAvailableSeats($car->getNumberOfSeats())
            ->setStatus('Available')
            ->setDriverUserId($driver->getId())
            ->setDriverPseudo($driver->getPseudo())
            ->setDriverPhotoFilename($driver->getPhotoFilename())
            ->setDriverAge($driver->getAge())
            ->setDriverPetsAllowed($driver->isPetsAllowed())
            ->setDriverSmokersAllowed($driver->isSmokersAllowed())
            ->setDriverAverageRating($driver->getAverageRating())
            ->setDriverPreferences($driverPreferences)
            ->setCarBrand($car->getBrand()->getLabel())
            ->setCarModel($car->getModel())
            ->setCarColor($car->getColor()->getLabel())
            ->setCarEngineType($car->getEngineType()->getLabel())
        ;

        return $carpool;
    }

    /**
     * Adds a passenger to the carpool.
     *
     * This method updates the list of passengers by adding the given user.
     * It does not persist changes to the database, it only modifies the in-memory object.
     *
     * @param Carpool $carpool   the carpool to update
     * @param User    $passenger the user to add as a passenger
     *
     * @return Carpool the updated carpool instance
     */
    public function addPassengerToCarpool(Carpool $carpool, User $passenger): Carpool
    {
        $passengers = $carpool->getPassengers();
        $passengers[] = [
            'passengerId' => $passenger->getId(),
            'passengerPseudo' => $passenger->getPseudo(),
            'passengerPhotoFilename' => $passenger->getPhotoFilename(),
        ];

        return $carpool->setPassengers(array_values($passengers));
    }

    public function removePassengerFromCarpool(Carpool $carpool, User $passenger): Carpool
    {
        $passengers = $carpool->getPassengers();
        $filteredPassengers = array_filter($passengers, fn ($p) => $p['passengerId'] !== $passenger->getId());

        if (\count($filteredPassengers) !== \count($passengers)) {
            $carpool->setPassengers(array_values($filteredPassengers));
            $carpool->setNumberOfAvailableSeats($carpool->getNumberOfAvailableSeats() + 1);
        }

        return $carpool;
    }

    private function calculateArrivalTime(Carpool $carpool, FormInterface $carpoolForm): ?\DateTimeImmutable
    {
        $arrivalTime = null;
        $departureTime = $carpoolForm->get('departureTime')->getData();
        $estimatedRideTime = $carpoolForm->get('estimatedRideTime')->getData();
        if ($departureTime instanceof \DateTimeImmutable && is_numeric($estimatedRideTime)) {
            $arrivalTime = (clone $departureTime)->modify("+{$estimatedRideTime} minutes");
            $carpool->setArrivalTime($arrivalTime);
        }

        return $arrivalTime;
    }
}
