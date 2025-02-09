<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Document\Carpool;
use Doctrine\ODM\MongoDB\DocumentManager;

class CarpoolStatusManager
{
    public const STATUS_OPEN = 'open';
    public const STATUS_IN_PROGRESS = 'inProgress';
    public const STATUS_ARRIVED = 'arrived';
    public const STATUS_CONTESTED = 'contested';
    public const STATUS_DONE = 'done';
    public const STATUS_CANCELED = 'canceled';

    public function __construct(
        private DocumentManager $documentManager,
    ) {
    }

    public function startCarpool(Carpool $carpool)
    {
        $carpool->setStatus(self::STATUS_IN_PROGRESS);
        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }

    public function finishCarpool(Carpool $carpool)
    {
        $carpool->setStatus(self::STATUS_ARRIVED);
        $this->documentManager->persist($carpool);
        $this->documentManager->flush();
    }
}
