<?php

declare(strict_types=1);

namespace App\Document;

use App\Repository\ReviewRepository;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Doctrine\ODM\MongoDB\Mapping\Annotations\ReferenceOne;

#[MongoDB\Document(repositoryClass: ReviewRepository::class)]
class Review
{
    #[MongoDB\Id]
    private ?string $id = null;

    #[MongoDB\Field(type: 'date_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $comment = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $rating = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $status = null;

    #[ReferenceOne(targetDocument: Carpool::class, inversedBy: 'reviews')]
    private ?Carpool $carpool = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $driverUserId = null;

    #[MongoDB\Field(type: 'int')]
    private ?int $authorUserId = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $authorPseudo = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $authorEmail = null;

    #[MongoDB\Field(type: 'string')]
    private ?string $authorPhotoFilename = null;

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): static
    {
        $this->comment = $comment;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(int $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCarpool(): ?Carpool
    {
        return $this->carpool;
    }

    public function setCarpool(?Carpool $carpool): static
    {
        $this->carpool = $carpool;

        return $this;
    }

    public function getDriverUserId(): ?int
    {
        return $this->driverUserId;
    }

    public function setDriverUserId(int $driverUserId): static
    {
        $this->driverUserId = $driverUserId;

        return $this;
    }

    public function getAuthorUserId(): ?int
    {
        return $this->authorUserId;
    }

    public function setAuthorUserId(int $authorUserId): static
    {
        $this->authorUserId = $authorUserId;

        return $this;
    }

    public function getAuthorPseudo(): ?string
    {
        return $this->authorPseudo;
    }

    public function setAuthorPseudo(string $authorPseudo): static
    {
        $this->authorPseudo = $authorPseudo;

        return $this;
    }

    public function getAuthorEmail(): ?string
    {
        return $this->authorEmail;
    }

    public function setAuthorEmail(string $authorEmail): static
    {
        $this->authorEmail = $authorEmail;

        return $this;
    }

    public function getAuthorPhotoFilename(): ?string
    {
        return $this->authorPhotoFilename;
    }

    public function setAuthorPhotoFilename(?string $authorPhotoFilename): static
    {
        $this->authorPhotoFilename = $authorPhotoFilename;

        return $this;
    }
}
