<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Trait\IdTrait;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Trait\ActiveTrait;
use App\Repository\UserRepository;
use App\Entity\Trait\CreatedAtTrait;
use App\Entity\Trait\UpdatedAtTrait;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_USER_EMAIL', fields: ['email'])]
#[ORM\UniqueConstraint(name: 'UNIQ_USER_PHONENUMBER', fields: ['phoneNumber'])]
#[ORM\UniqueConstraint(name: 'UNIQ_USER_PHOTOFILENAME', fields: ['photoFilename'])]
#[UniqueEntity(fields: ['email'], message: 'Il existe déjà un compte lié à cette adresse email.')]
#[UniqueEntity(fields: ['phoneNumber'], message: 'Il existe déjà un compte lié à ce numéro de téléphone.')]
#[ORM\HasLifecycleCallbacks]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    use IdTrait;
    use CreatedAtTrait;
    use UpdatedAtTrait;
    use ActiveTrait;

    #[Assert\NotBlank(message: 'Votre pseudo est requis.')]
    #[Assert\Length(
        min: 3, minMessage: 'Votre pseudo doit comporter au minimum {{ limit }} caractères.',
        max: 30, maxMessage: 'Votre pseudo ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9_]+$/',
        message: 'Votre pseudo ne peut contenir que des lettres, des chiffres et des underscores.')]
    #[ORM\Column(length: 30)]
    private ?string $pseudo = null;

    #[Assert\NotBlank(message: 'Votre adresse email est requise.')]
    #[Assert\Length(
        min: 9, minMessage: 'Votre adresse email doit comporter au minimum {{ limit }} caractères.',
        max: 180, maxMessage: 'Votre adresse email ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Email(message: '{{ value }} n\'est pas une adresse e-mail valide.')]
    #[Assert\NoSuspiciousCharacters]
    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var string The hashed password
     */
    #[Assert\Length(max: 255, maxMessage: 'Votre mot de passe ne doit pas comporter plus de {{ limit }} caractères.')]
    #[ORM\Column]
    private ?string $password = null;

    #[Assert\Length(
        min: 3, minMessage: 'Votre prénom doit comporter au minimum {{ limit }} caractères.',
        max: 50, maxMessage: 'Votre prénom ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[a-zA-ZÀ-ÿ\s'-]+$/u",
        message: 'Votre prénom ne peut contenir que des lettres, des espaces, des tirets ou des apostrophes.')]
    #[ORM\Column(length: 50, nullable: true)]
    private ?string $firstName = null;

    #[Assert\Length(
        min: 3, minMessage: 'Votre nom de famille doit comporter au minimum {{ limit }} caractères.',
        max: 50, maxMessage: 'Votre nom de famille ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[a-zA-ZÀ-ÿ\s'-]+$/u",
        message: 'Votre nom de famille ne peut contenir que des lettres, des espaces, des tirets ou des apostrophes.')]
    #[ORM\Column(length: 50, nullable: true)]
    private ?string $lastName = null;

    #[Assert\Length(
        min: 10, minMessage: 'Votre adresse doit comporter au minimum {{ limit }} caractères.',
        max: 255, maxMessage: 'Votre adresse ne doit pas comporter plus de {{ limit }} caractères.')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $address = null;

    #[Assert\Length(
        min: 10, minMessage: 'Votre numéro de téléphone doit comporter au minimum {{ limit }} caractères.',
        max: 17, maxMessage: 'Votre numéro de téléphone ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^(\+33|0)[1-9](\d{2}){4}$/",
        message: "Le numéro de téléphone n'est pas valide.")]
    #[ORM\Column(length: 17, nullable: true)]
    private ?string $phoneNumber = null;

    #[Assert\Length(
        min: 5, minMessage: 'Le nom du fichier photo doit comporter au minimum {{ limit }} caractères.',
        max: 255, maxMessage: 'Le nom du fichier photo ne doit pas comporter plus de {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^[a-zA-Z0-9-_]+\.(jpg|jpeg|png|webp)$/i",
        message: 'Le fichier photo doit être valide et avec une extension image correcte (jpg, jpeg, png, webp).')]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photoFilename = null;

    #[Assert\LessThanOrEqual(
        '-18 years',
        message: 'En validant les CGU, vous aviez déclaré avoir plus de 18 ans ...')]
    #[Assert\GreaterThanOrEqual(
        '-130 years',
        message: 'La date de naissance indiquée est incohérente. Vous ne pouvez pas avoir plus de 130 ans.')]
    #[ORM\Column(type: Types::DATE_IMMUTABLE, nullable: true)]
    private ?\DateTimeImmutable $dateOfBirth = null;

    #[Assert\Type(
        type: 'integer',
        message: 'L\'âge doit être un nombre entier valide.')]
    #[Assert\GreaterThanOrEqual(
        value: 18,
        message: 'Vous devez être majeur.')]
    #[Assert\LessThanOrEqual(
        value: 130,
        message: 'L\'âge ne peut pas dépasser 130 ans.')]
    private ?int $age = null;

    #[Assert\Type('bool', message: 'Le choix de préférence (animaux) doit être un booléen.')]
    #[ORM\Column(nullable: true)]
    private ?bool $petsAllowed = null;

    #[Assert\Type('bool', message: 'Le choix de préférence (fumeurs) doit être un booléen.')]
    #[ORM\Column(nullable: true)]
    private ?bool $smokersAllowed = null;

    #[Assert\Type(
        type: 'integer',
        message: 'La somme des évaluations doit être un entier valide.')]
    #[Assert\PositiveOrZero(
        message: 'La somme des évaluations ne peut pas être négative.')]
    #[Assert\LessThanOrEqual(
        value: 2000000,
        message: 'La somme des évaluations ne peut pas dépasser 2 000 000.')]
    #[ORM\Column(nullable: true)]
    private ?int $sumOfRatings = null;

    #[Assert\Type(
        type: 'integer',
        message: 'Le nombre d\'évaluations doit être un entier valide.')]
    #[Assert\PositiveOrZero(
        message: 'Le nombre d\'évaluations ne peut pas être négative.')]
    #[Assert\LessThanOrEqual(
        value: 2000000,
        message: 'Le nombre d\'évaluations ne peut pas dépasser 2 000 000.')]
    #[ORM\Column(nullable: true)]
    private ?int $numberOfRatings = null;

    #[Assert\Type(
        type: 'float',
        message: 'La note moyenne doit être un nombre décimal valide.')]
    #[Assert\GreaterThanOrEqual(
        value: 0,
        message: 'La note moyenne ne peut pas être inférieure à 0.')]
    #[Assert\LessThanOrEqual(
        value: 5,
        message: 'La note moyenne ne peut pas être supérieure à 5.')]
    private ?float $averageRating = null;

    #[Assert\Type(
        type: 'integer',
        message: 'Les crédits doivent être un entier valide.')]
    #[Assert\PositiveOrZero(message: 'Les crédits ne peuvent pas être négatifs.')]
    #[Assert\LessThanOrEqual(
        value: 2000000,
        message: 'Les crédits ne peuvent pas dépasser 2 000 000.')]
    #[ORM\Column]
    private ?int $credits = null;

    /**
     * @var Collection<int, Role>
     */
    #[ORM\ManyToMany(targetEntity: Role::class, inversedBy: 'users')]
    private Collection $roles;

    /**
     * @var Collection<int, Preference>
     */
    #[ORM\OneToMany(targetEntity: Preference::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $preferences;

    /**
     * @var Collection<int, Car>
     */
    #[ORM\OneToMany(targetEntity: Car::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $cars;

    private ?bool $passengerProfileCompleted = null;

    private ?bool $driverProfileCompleted = null;

    #[ORM\Column(nullable: true)]
    private ?bool $driverRoleChosen = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->setActive(true);
        $this->roles = new ArrayCollection();
        $this->preferences = new ArrayCollection();
        $this->cars = new ArrayCollection();
        $this->credits = 20;
    }

    /**
     * Checks if the passenger profile is completed.
     *
     * This method ensures that all required attributes for a passenger profile
     * (photoFilename, firstName, lastName, phoneNumber, address, dateOfBirth) are set.
     *
     * @return bool|null returns true if all required attributes are non-null, false if any attribute is null, or null if profile completion is not applicable
     */
    public function hasPassengerProfileCompleted(): ?bool
    {
        return null !== $this->photoFilename
            && null !== $this->firstName
            && null !== $this->lastName
            && null !== $this->phoneNumber
            && null !== $this->address
            && null !== $this->dateOfBirth;
    }

    /**
     * Checks if the driver profile is completed.
     *
     * This method ensures that all required attributes for a driver profile
     * (one car minimum, required preferences : smokers allowed and animals allowed) are set.
     *
     * @return bool|null returns true if all required attributes are set, false if any attribute is missing, or null if profile completion is not applicable
     */
    public function hasDriverProfileCompleted(): ?bool
    {
        return $this->hasPassengerProfileCompleted()
            && null !== $this->petsAllowed
            && null !== $this->smokersAllowed
            && !$this->cars->isEmpty();
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): static
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): static
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getPhotoFilename(): ?string
    {
        return $this->photoFilename;
    }

    public function setPhotoFilename(?string $photoFilename): static
    {
        $this->photoFilename = $photoFilename;

        return $this;
    }

    public function getDateOfBirth(): ?\DateTimeImmutable
    {
        return $this->dateOfBirth;
    }

    public function setDateOfBirth(?\DateTimeImmutable $dateOfBirth): static
    {
        $this->dateOfBirth = $dateOfBirth;

        return $this;
    }

    public function getAge(): ?int
    {
        if (null === $this->dateOfBirth) {
            return null;
        }
        $now = new \DateTime();
        $age = $now->diff($this->dateOfBirth)->y;

        return $age;
    }

    public function setAge(int $age): static
    {
        $this->age = $age;

        return $this;
    }

    public function isPetsAllowed(): ?bool
    {
        return $this->petsAllowed;
    }

    public function setPetsAllowed(?bool $petsAllowed): static
    {
        $this->petsAllowed = $petsAllowed;

        return $this;
    }

    public function isSmokersAllowed(): ?bool
    {
        return $this->smokersAllowed;
    }

    public function setSmokersAllowed(?bool $smokersAllowed): static
    {
        $this->smokersAllowed = $smokersAllowed;

        return $this;
    }

    public function getSumOfRatings(): ?int
    {
        return $this->sumOfRatings;
    }

    public function setSumOfRatings(?int $sumOfRatings): static
    {
        $this->sumOfRatings = $sumOfRatings;

        return $this;
    }

    public function getNumberOfRatings(): ?int
    {
        return $this->numberOfRatings;
    }

    public function setNumberOfRatings(?int $numberOfRatings): static
    {
        $this->numberOfRatings = $numberOfRatings;

        return $this;
    }

    public function getAverageRating(): ?float
    {
        if (null === $this->numberOfRatings || 0 === $this->numberOfRatings) {
            return null;
        }

        return $this->sumOfRatings / $this->numberOfRatings;
    }

    public function setAverageRating(float $averageRating): static
    {
        $this->averageRating = $averageRating;

        return $this;
    }

    public function getCredits(): ?int
    {
        return $this->credits;
    }

    public function setCredits(int $credits): static
    {
        $this->credits = $credits;

        return $this;
    }

    /**
     * @see UserInterface
     *
     * @return array<int,string|null>
     */
    public function getRoles(): array
    {
        // Extract role names from Role objects
        $roleLabels = $this->roles->map(fn (Role $role) => $role->getLabel())->toArray();
        // Guarantee every user at least has ROLE_PASSENGER
        $roleLabels[] = 'ROLE_PASSENGER';

        return array_unique($roleLabels);
    }

    public function addRoles(Role $roles): static
    {
        if (!$this->roles->contains($roles)) {
            $this->roles->add($roles);
        }

        return $this;
    }

    public function removeRoles(Role $roles): static
    {
        $this->roles->removeElement($roles);

        return $this;
    }

    /**
     * @return Collection<int, Preference>
     */
    public function getPreferences(): Collection
    {
        return $this->preferences;
    }

    public function addPreference(Preference $preference): static
    {
        if (!$this->preferences->contains($preference)) {
            $this->preferences->add($preference);
            $preference->setUser($this);
        }

        return $this;
    }

    public function removePreference(Preference $preference): static
    {
        if ($this->preferences->removeElement($preference)) {
            // set the owning side to null (unless already changed)
            if ($preference->getUser() === $this) {
                $preference->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Car>
     */
    public function getCars(): Collection
    {
        return $this->cars;
    }

    public function addCar(Car $car): static
    {
        if (!$this->cars->contains($car)) {
            $this->cars->add($car);
            $car->setUser($this);
        }

        return $this;
    }

    public function removeCar(Car $car): static
    {
        if ($this->cars->removeElement($car)) {
            // set the owning side to null (unless already changed)
            if ($car->getUser() === $this) {
                $car->setUser(null);
            }
        }

        return $this;
    }

    public function isDriverRoleChosen(): ?bool
    {
        return $this->driverRoleChosen;
    }

    public function setDriverRoleChosen(?bool $driverRoleChosen): static
    {
        $this->driverRoleChosen = $driverRoleChosen;

        return $this;
    }
}
