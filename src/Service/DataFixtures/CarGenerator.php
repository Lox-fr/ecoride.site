<?php

declare(strict_types=1);

namespace App\Service\DataFixtures;

use App\Entity\Brand;
use App\Entity\Car;
use App\Entity\Color;
use App\Entity\EngineType;
use App\Entity\User;
use App\Repository\BrandRepository;
use App\Repository\ColorRepository;
use App\Repository\EngineTypeRepository;
use App\Service\DataFixtures\DataProviders\BrandsAndModelsProvider;
use App\Service\DataFixtures\DataProviders\ColorsProvider;
use App\Service\DataFixtures\DataProviders\EngineTypesProvider;
use Faker\Factory;

class CarGenerator
{
    private \Faker\Generator $fakerFactory;

    public function __construct(
        private BrandsAndModelsProvider $brandAndModelsFixturesProvider,
        private BrandRepository $brandRepository,
        private EngineTypesProvider $engineTypeFixturesProvider,
        private EngineTypeRepository $engineTypeRepository,
        private ColorsProvider $colorFixturesProvider,
        private ColorRepository $colorRepository,
    ) {
        $this->fakerFactory = Factory::create('fr_FR');
    }

    /**
     * Generates a random Car instance with realistic data for testing purposes.
     *
     * This method is used to populate fixtures with random car data, including:
     * - A randomly generated license plate in the format "AA-999-AA".
     * - A random first registration date within the past 9 years.
     * - A random car model based on the selected brand.
     * - A randomly selected brand, engine type, and color from predefined data fixtures.
     * - A random number of seats (between 1 and 4).
     * - The current timestamp as the creation date.
     * - The car is set as active by default.
     *
     * @param User $owner the owner of the car to be generated
     *
     * @return Car a randomly generated Car instance
     */
    public function getRandomCar(User $owner): Car
    {
        $randomBrand = $this->selectRandomCarBrandFromDataFixtures();

        $randomCar = new Car();
        $randomCar->setLicensePlate($this->generateRandomCarLicensePlate())
            ->setDateOfFirstRegistration(
                \DateTimeImmutable::createFromMutable($this->fakerFactory->dateTimeBetween('-9 years', 'now')))
            ->setModel($this->selectRandomCarModelName($randomBrand->getLabel()))
            ->setUser($owner)
            ->setBrand($randomBrand)
            ->setEngineType($this->selectRandomCarEngineTypeFromDataFixtures())
            ->setColor($this->selectRandomCarColorFromDataFixtures())
            ->setNumberOfSeats(mt_rand(1, 4))
            ->setCreatedAt(new \DateTimeImmutable())
            ->setActive(true);

        return $randomCar;
    }

    private function generateRandomCarLicensePlate(): string
    {
        $lettersStart = mb_strtoupper($this->fakerFactory->lexify('??'));
        $numbers = $this->fakerFactory->numerify('###');
        $lettersEnd = mb_strtoupper($this->fakerFactory->lexify('??'));

        return $lettersStart.'-'.$numbers.'-'.$lettersEnd;
    }

    /**
     * Select a random car model from a given brand.
     *
     * @param string $brandName the name of the car brand
     *
     * @return string a random model name from the given brand
     */
    public function selectRandomCarModelName(string $brandName): string
    {
        $modelList = $this->brandAndModelsFixturesProvider->getArrayOfModelNames($brandName);
        $modelName = $modelList[array_rand($modelList)];

        return $modelName;
    }

    private function selectRandomCarBrandFromDataFixtures(): Brand
    {
        $brands = $this->brandAndModelsFixturesProvider->getCollectionOfBrands();
        $randomBrand = $brands->get(rand(0, $brands->count() - 1));
        $brandId = $this->brandRepository->findBrandIdByLabel($randomBrand->getLabel());
        $randomBrand->setId($brandId);

        return $randomBrand;
    }

    private function selectRandomCarEngineTypeFromDataFixtures(): EngineType
    {
        $engineTypes = $this->engineTypeFixturesProvider->getCollectionOfEngineTypes();
        $randomEngineType = $engineTypes->get(rand(0, $engineTypes->count() - 1));
        $engineTypeId = $this->engineTypeRepository->findEngineTypeIdByLabel($randomEngineType->getLabel());
        $randomEngineType->setId($engineTypeId);

        return $randomEngineType;
    }

    private function selectRandomCarColorFromDataFixtures(): Color
    {
        $colors = $this->colorFixturesProvider->getCollectionOfColors();
        $randomColor = $colors->get(rand(0, $colors->count() - 1));
        $colorId = $this->colorRepository->findColorIdByLabel($randomColor->getLabel());
        $randomColor->setId($colorId);

        return $randomColor;
    }
}
