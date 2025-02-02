<?php

declare(strict_types=1);

namespace App\Controller\User;

use App\Document\Carpool;
use App\Entity\Car;
use App\Entity\User;
use App\Form\CarFormType;
use App\Form\Carpool\CarpoolAddFormType;
use App\Form\User\DriverProfileFormType;
use App\Form\User\PassengerProfileFormType;
use App\Repository\UserRepository;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\FileUploader;
use App\Service\User\CarManager;
use App\Service\User\PreferenceManager;
use App\Service\User\RoleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/profil')]
class ProfileController extends AbstractController
{
    public function __construct(
        private CarpoolSearchService $carpoolSearchService,
        private RoleManager $roleManager,
        private CarManager $carManager,
        private PreferenceManager $preferenceManager,
        private FileUploader $fileUploader,
    ) {
    }

    #[Route('/{activeTab}',
        name: 'app_profile',
        requirements: ['activeTab' => 'informations|devenir-chauffeur|publier-trajet|historique-trajets'],
        defaults: ['activeTab' => null]
    )]
    public function index(
        Request $request,
        UserRepository $userRepository,
        ?string $activeTab,
    ): Response|RedirectResponse {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        if ('publier-trajets' === $activeTab) {
            return $this->redirectToRoute('app_carpool_add');
        }

        /** @var User $user */
        $user = $this->getUser() ?? new User();

        // Passenger form
        $passengerProfileForm = $this->handlePassengerForm($request, $user, $userRepository);
        if ($passengerProfileForm instanceof RedirectResponse) {
            return $passengerProfileForm;
        }

        // Driver form
        $driverProfileForm = $this->handleDriverForm($request, $user, $userRepository);
        if ($driverProfileForm instanceof RedirectResponse) {
            return $driverProfileForm;
        } elseif ($driverProfileForm->isSubmitted()) {
            $activeTab = 'devenir-chauffeur';
        }

        // User carpool history
        $userCarpoolsData = $this->getUserCarpools($user);

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'UserProfileController',
            'activeTab' => $activeTab ?? 'informations',
            'roleDescription' => $this->roleManager->getRoleDescription(),
            'passengerProfileForm' => $passengerProfileForm,
            'driverProfileForm' => $driverProfileForm,
            'carpoolForm' => $this->createForm(CarpoolAddFormType::class, new Carpool(),
                ['user_cars' => \is_array($user->getCars()) ? $user->getCars() : iterator_to_array($user->getCars())]),
            'addCarFormInCarpoolForm' => $this->createForm(CarFormType::class, new Car()),
            'upcomingCarpools' => $userCarpoolsData['upcomingCarpools'],
            'pastCarpoolsByYear' => $userCarpoolsData['pastCarpoolsByYear'],
        ]);
    }

    private function handlePassengerForm(
        Request $request,
        User $user,
        UserRepository $userRepository,
    ): FormInterface|RedirectResponse {
        $passengerForm = $this->createForm(PassengerProfileFormType::class, $user);
        $passengerForm->handleRequest($request);
        if ($passengerForm->isSubmitted() && $passengerForm->isValid()) {
            /** @var UploadedFile $photoFile */
            $photoFile = $passengerForm->get('photo')->getData();
            if ($photoFile) {
                $photoFileName = $this->fileUploader->upload($photoFile);
                $user->setPhotoFilename($photoFileName);
            }

            if ($userRepository->savePassengerProfile($user)) {
                $this->addFlash('success', 'Vos informations passager ont bien été enregistrées.');
                $this->updateUserRoles($passengerForm, $this->roleManager);
            } else {
                $this->addFlash('error',
                    'Une erreur est survenue lors de la sauvegarde de votre profil passager. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_profile');
        }

        return $passengerForm;
    }

    private function handleDriverForm(
        Request $request,
        User $user,
        UserRepository $userRepository,
    ): FormInterface|RedirectResponse {
        $driverProfileForm = $this->createForm(DriverProfileFormType::class, $user);
        $driverProfileForm->handleRequest($request);
        if ($driverProfileForm->isSubmitted() && $driverProfileForm->isValid()) {
            $this->handleCarInputsInDriverForm($user);
            $this->handlePreferenceInputsInDriverForm($user);

            if ($userRepository->saveDriverProfile($user)) {
                $this->addFlash('success', 'Vos informations chauffeur ont bien été enregistrées.');
                $this->updateUserRoles($driverProfileForm, $this->roleManager);
            } else {
                $this->addFlash('error',
                    'Une erreur est survenue lors de la sauvegarde de votre profil chauffeur. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
        }

        return $driverProfileForm;
    }

    private function handleCarInputsInDriverForm(User $user): void
    {
        $registeredUserLicensePlates = $this->carManager->findLicencePlatesByUserId($user->getId());
        $submittedLicensePlates = [];

        foreach ($user->getCars() as $car) {
            $submittedLicensePlates[] = $car->getLicensePlate();
            if (!\in_array($car->getLicensePlate(), $registeredUserLicensePlates, true)) {
                $this->carManager->saveNewCar($car);
            } else {
                $this->carManager->updateCar($car);
            }
        }

        foreach ($registeredUserLicensePlates as $registeredUserLicensePlate) {
            if (!\in_array($registeredUserLicensePlate, $submittedLicensePlates, true)) {
                $this->carManager->deleteCarByLicensePlate($registeredUserLicensePlate);
            }
        }
    }

    private function updateUserRoles(FormInterface $form): void
    {
        if (!$this->roleManager->handleProfileFormToBeDriver($form)) {
            $this->addFlash('warning', 'Vous n\'êtes pas/plus considéré(e) comme chauffeur.');
        }
    }

    private function handlePreferenceInputsInDriverForm(User $user): void
    {
        $registeredUserPreferenceIds = $this->preferenceManager->findPreferenceIdsByUserId($user->getId());
        $submittedPreferencesIds = [];

        foreach ($user->getPreferences() as $preference) {
            $submittedPreferencesIds[] = $preference->getId();
            if (!\in_array($preference->getId(), $registeredUserPreferenceIds, true)) {
                $this->preferenceManager->saveNewPreference($preference);
            }
        }

        foreach ($registeredUserPreferenceIds as $registeredUserPreferenceId) {
            if (!\in_array($registeredUserPreferenceId, $submittedPreferencesIds, true)) {
                $this->preferenceManager->deletePreferenceById($registeredUserPreferenceId);
            }
        }
    }

    /**
     * Returns a user's trips separated into upcoming and past trips, grouped by year.
     *
     * @return array<string, array<int, Carpool>>
     */
    private function getUserCarpools(User $user): array
    {
        $userCarpools = $this->carpoolSearchService->findCarpoolsByUser($user);
        // Separate past and upcoming carpools
        $upcomingCarpools = [];
        $pastCarpools = [];
        $currentDate = new \DateTimeImmutable();
        foreach ($userCarpools as $carpool) {
            if ($carpool->getDepartureTime() >= $currentDate) {
                $upcomingCarpools[] = $carpool;
            } else {
                $pastCarpools[] = $carpool;
            }
        }
        // Sort past and upcoming carpools
        usort($upcomingCarpools, function ($a, $b) {
            return $a->getDepartureTime() <=> $b->getDepartureTime();
        });
        usort($pastCarpools, function ($a, $b) {
            return $a->getDepartureTime() <=> $b->getDepartureTime();
        });
        // Group by year
        $pastCarpoolsByYear = [];
        foreach ($pastCarpools as $carpool) {
            $year = $carpool->getDepartureTime()->format('Y');
            if (!isset($pastCarpoolsByYear[$year])) {
                $pastCarpoolsByYear[$year] = [];
            }
            $pastCarpoolsByYear[$year][] = $carpool;
        }
        // Sort years in descending order
        krsort($pastCarpoolsByYear);
        // Sort carpools in each year in descending order
        foreach ($pastCarpoolsByYear as $year => &$carpoolsInYear) {
            usort($carpoolsInYear, function ($a, $b) {
                return $b->getDepartureTime() <=> $a->getDepartureTime();
            });
        }

        return [
            'upcomingCarpools' => $upcomingCarpools,
            'pastCarpoolsByYear' => $pastCarpoolsByYear,
        ];
    }
}
