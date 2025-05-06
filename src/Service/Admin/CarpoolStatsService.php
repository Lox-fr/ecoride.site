<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Document\Carpool;
use Doctrine\ODM\MongoDB\DocumentManager;

class CarpoolStatsService
{
    public function __construct(
        private DocumentManager $documentManager,
    ) {
    }

    public function getCarpoolStatsForChart(): array
    {
        // Direct access to the MongoDB collection
        $collection = $this->documentManager->getDocumentCollection(Carpool::class);

        // Aggregation pipeline
        $pipeline = [
            [
                '$addFields' => [
                    'arrivalTimeDate' => ['$toDate' => '$arrivalTime'],
                ],
            ],
            [
                '$unwind' => [ // Separate each passenger
                    'path' => '$passengers',
                    'preserveNullAndEmptyArrays' => true, // Keep carpools without passengers
                ],
            ],
            [
                '$group' => [
                    '_id' => [
                        'year' => ['$year' => '$arrivalTimeDate'],
                        'month' => ['$month' => '$arrivalTimeDate'],
                        'day' => ['$dayOfMonth' => '$arrivalTimeDate'],
                    ],
                    'carpool_count' => ['$sum' => 1], // Total number of carpools
                    'credits_earned' => [
                        '$sum' => [
                            '$cond' => [
                                'if' => ['$eq' => ['$passengers.hasValidatedTheRide', true]],
                                'then' => 2, // Each validation earns 2 credits
                                'else' => 0,
                            ],
                        ],
                    ],
                ],
            ],
            [
                '$sort' => ['_id' => 1],
            ],
        ];

        // Running the aggregation
        $result = $collection->aggregate($pipeline);

        return iterator_to_array($result);
    }

    public function getTotalCreditsEarned(): int
    {
        $collection = $this->documentManager->getDocumentCollection(Carpool::class);

        $pipeline = [
            [
                '$unwind' => '$passengers',
            ],
            [
                '$match' => [
                    'passengers.hasValidatedTheRide' => true,
                ],
            ],
            [
                '$group' => [
                    '_id' => null,
                    'total_credits' => ['$sum' => 2], // Each validation earns 2 credits
                ],
            ],
        ];

        $result = iterator_to_array($collection->aggregate($pipeline));

        return $result[0]['total_credits'] ?? 0;
    }
}
