<?php

declare(strict_types=1);

namespace App\Repository;

use Doctrine\ODM\MongoDB\Repository\DocumentRepository;

/**
 * @extends DocumentRepository<Carpool>
 */
class ReviewRepository extends DocumentRepository
{
}
