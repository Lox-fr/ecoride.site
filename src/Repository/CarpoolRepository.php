<?php

declare(strict_types=1);

namespace App\Repository;

use MongoDB\BSON\Regex;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;

/**
 * @extends DocumentRepository<Carpool>
 */
class CarpoolRepository extends DocumentRepository
{
    /**
     * Searches for available carpool rides matching the given criteria.
     *
     * @param string             $departureCity the city where the ride starts
     * @param string             $arrivalCity   the city where the ride ends
     * @param \DateTimeImmutable $departureTime the earliest allowed departure time
     *
     * @return array an array of carpool rides that match the search criteria
     */
    public function searchCarpools(
        string $departureCity,
        string $arrivalCity,
        \DateTimeImmutable $departureTime,
    ): array {
        return $this->createQueryBuilder()
            ->select(
                'departureCity',
                'departureTime',
                'arrivalCity',
                'arrivalTime',
                'driverPseudo',
                'driverPhotoFilename',
                'driverAverageRating',
                'numberOfAvailableSeats',
                'totalNumberOfSeats',
                'pricePerPerson',
                'carEngineType'
            )
            ->readOnly()
            ->field('departureCity')->equals(new Regex('^' . preg_quote($departureCity) . '$', 'i'))
            ->field('arrivalCity')->equals(new Regex('^' . preg_quote($arrivalCity) . '$', 'i'))
            ->field('departureTime')->gte($departureTime)
            ->field('numberOfAvailableSeats')->gt(0)
            ->sort('departureTime', 'asc')
            ->getQuery()
            ->execute()
            ->toArray();
    }
}
