<?php

declare(strict_types=1);

namespace App\Service\DataFixtures;

use App\Entity\Car;
use App\Entity\User;
use App\Repository\BrandRepository;
use App\Repository\CarRepository;
use App\Repository\ColorRepository;
use App\Repository\EngineTypeRepository;
use App\Repository\PreferenceRepository;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use App\Service\DataFixtures\DataProviders\BrandsAndModelsProvider;
use App\Service\DataFixtures\DataProviders\ColorsProvider;
use App\Service\DataFixtures\DataProviders\EngineTypesProvider;
use App\Service\DataFixtures\DataProviders\PreferencesProvider;
use App\Service\DataFixtures\DataProviders\RolesProvider;
use App\Service\DataFixtures\DataProviders\UsersProvider;
use Doctrine\Common\Collections\ArrayCollection;

class SqlDataFixturesService
{
    public function __construct(
        // Providers
        private BrandsAndModelsProvider $brandAndModelsFixturesProvider,
        private CarGenerator $carGenerator,
        private ColorsProvider $colorFixturesProvider,
        private EngineTypesProvider $engineTypeFixturesProvider,
        private PreferencesProvider $preferenceFixturesProvider,
        private RolesProvider $roleFixturesProvider,
        private UsersProvider $userFixturesProvider,
        // Repositories
        private BrandRepository $brandRepository,
        private CarRepository $carRepository,
        private ColorRepository $colorRepository,
        private EngineTypeRepository $engineTypeRepository,
        private PreferenceRepository $preferenceRepository,
        private RoleRepository $roleRepository,
        private UserRepository $userRepository,
    ) {
    }

    public function loadAdminAndEmployees(): void
    {
        $this->loadRoles();
        $this->loadBrands();
        $this->loadColors();
        $this->loadEngineTypes();

        // Admin
        $admin = $this->userFixturesProvider->getAdmin();
        $this->userRepository->loadDriverFixtures($admin);
        $adminId = $this->userRepository->findUserIdByEmail($admin->getEmail());
        $admin->setId($adminId);
        $this->userRepository->grantAdminRoleByUserId($adminId);
        for ($i = 0; $i < 3; ++$i) {
            $car = $this->loadAndReturnRandomCar($admin);
            $admin->addCar($car);
        }
        $randomPreferences = $this->preferenceFixturesProvider->getCollectionOfConsistentPreferences(mt_rand(0, 3));
        foreach ($randomPreferences as $preference) {
            $preference->setUser($admin);
            $this->preferenceRepository->loadPreferenceFixtures($preference);
            $admin->addPreference($preference);
        }

        // Employees
        $employees = $this->userFixturesProvider->getCollectionOfEmployees();
        foreach ($employees as $employee) {
            $this->userRepository->loadDriverFixtures($employee);
            $employeeId = $this->userRepository->findUserIdByEmail($employee->getEmail());
            $employee->setId($employeeId);
            $this->userRepository->grantEmployeeRoleByUserId($employeeId);
            for ($i = 0; $i < mt_rand(1, 3); ++$i) {
                $car = $this->loadAndReturnRandomCar($employee);
                $employee->addCar($car);
            }
            $randomPreferences = $this->preferenceFixturesProvider->getCollectionOfConsistentPreferences(mt_rand(0, 3));
            foreach ($randomPreferences as $preference) {
                $preference->setUser($employee);
                $this->preferenceRepository->loadPreferenceFixtures($preference);
                $employee->addPreference($preference);
            }
        }
    }

    /**
     * @return ArrayCollection<User>
     */
    public function loadPassengersAndReturnCollection(): ArrayCollection
    {
        $passengers = $this->userFixturesProvider->getCollectionOfPassengers();
        foreach ($passengers as $passenger) {
            $this->userRepository->loadPassengerFixtures($passenger);
            $userId = $this->userRepository->findUserIdByEmail($passenger->getEmail());
            $passenger->setId($userId);
        }

        return $passengers;
    }

    /**
     * @return ArrayCollection<User>
     */
    public function loadDriversAndReturnCollection(): ArrayCollection
    {
        $drivers = $this->loadAndReturnDrivers();
        foreach ($drivers as $driver) {
            for ($i = 0; $i < mt_rand(1, 3); ++$i) {
                $car = $this->loadAndReturnRandomCar($driver);
                $driver->addCar($car);
            }
            $randomPreferences = $this->preferenceFixturesProvider->getCollectionOfConsistentPreferences(mt_rand(0, 3));
            foreach ($randomPreferences as $preference) {
                $preference->setUser($driver);
                $this->preferenceRepository->loadPreferenceFixtures($preference);
                $driver->addPreference($preference);
            }
        }

        return $drivers;
    }

    /**
     * @return ArrayCollection<User>
     */
    private function loadAndReturnDrivers(): ArrayCollection
    {
        $drivers = $this->userFixturesProvider->getCollectionOfDrivers();
        foreach ($drivers as $driver) {
            $this->userRepository->loadDriverFixtures($driver);
            $userId = $this->userRepository->findUserIdByEmail($driver->getEmail());
            $driver->setId($userId);
            $this->userRepository->grantDriverRoleByUserId($userId);
        }

        return $drivers;
    }

    private function loadAndReturnRandomCar(User $owner): Car
    {
        $randomCar = $this->carGenerator->getRandomCar($owner);
        $this->carRepository->loadCarFixtures($randomCar);

        return $randomCar;
    }

    private function loadBrands(): void
    {
        $brands = $this->brandAndModelsFixturesProvider->getCollectionOfBrands();
        foreach ($brands as $brand) {
            $this->brandRepository->loadBrandFixtures($brand);
        }
    }

    private function loadColors(): void
    {
        $colors = $this->colorFixturesProvider->getCollectionOfColors();
        foreach ($colors as $color) {
            $this->colorRepository->loadColorFixtures($color);
        }
    }

    private function loadEngineTypes(): void
    {
        $engineTypes = $this->engineTypeFixturesProvider->getCollectionOfEngineTypes();
        foreach ($engineTypes as $engineType) {
            $this->engineTypeRepository->loadEngineTypeFixtures($engineType);
        }
    }

    private function loadRoles(): void
    {
        $roles = $this->roleFixturesProvider->getCollectionOfRoles();
        foreach ($roles as $role) {
            $this->roleRepository->loadRoleFixtures($role);
        }
    }
}
