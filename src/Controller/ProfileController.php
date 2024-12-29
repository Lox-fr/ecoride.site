<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\User\DriverProfileType;
use App\Form\User\PassengerProfileType;
use App\Repository\CarRepository;
use App\Repository\PreferenceRepository;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use App\Service\RoleManager;
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
    #[Route('/{activeTab}',
        name: 'app_profile',
        requirements: ['activeTab' => 'informations|devenir-chauffeur|historique-trajets'],
        defaults: ['activeTab' => null]
    )]
    public function index(
        Request $request,
        FileUploader $fileUploader,
        UserRepository $userRepository,
        CarRepository $carRepository,
        PreferenceRepository $preferenceRepository,
        RoleManager $roleManager,
        ?string $activeTab,
    ): Response|RedirectResponse {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        /** @var User $user */
        $user = $this->getUser() ?? new User();

        $passengerProfileForm =
            $this->handlePassengerForm($request, $user, $userRepository, $fileUploader, $roleManager);
        if ($passengerProfileForm instanceof RedirectResponse) {
            return $passengerProfileForm;
        }

        $driverProfileForm = $this->handleDriverForm($request, $user, $userRepository, $carRepository, $preferenceRepository, $roleManager);
        if ($driverProfileForm instanceof RedirectResponse) {
            return $driverProfileForm;
        } elseif ($driverProfileForm->isSubmitted()) {
            $activeTab = 'devenir-chauffeur';
        }

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'UserProfileController',
            'activeTab' => $activeTab ?? 'informations',
            'roleDescription' => $roleManager->getRoleDescription(),
            'passengerProfileForm' => $passengerProfileForm,
            'driverProfileForm' => $driverProfileForm,
        ]);
    }

    private function handlePassengerForm(
        Request $request,
        User $user,
        UserRepository $userRepository,
        FileUploader $fileUploader,
        RoleManager $roleManager,
    ): FormInterface|RedirectResponse {
        $passengerForm = $this->createForm(PassengerProfileType::class, $user);
        $passengerForm->handleRequest($request);
        if ($passengerForm->isSubmitted() && $passengerForm->isValid()) {
            /** @var UploadedFile $photoFile */
            $photoFile = $passengerForm->get('photo')->getData();
            if ($photoFile) {
                $photoFileName = $fileUploader->upload($photoFile);
                $user->setPhotoFilename($photoFileName);
            }

            if ($userRepository->savePassengerProfile($user)) {
                $this->addFlash('success', 'Vos informations passager ont bien été enregistrées.');
                $this->updateUserRoles($passengerForm, $roleManager);
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
        CarRepository $carRepository,
        PreferenceRepository $preferenceRepository,
        RoleManager $roleManager,
    ): FormInterface|RedirectResponse {
        $driverProfileForm = $this->createForm(DriverProfileType::class, $user);
        $driverProfileForm->handleRequest($request);
        if ($driverProfileForm->isSubmitted() && $driverProfileForm->isValid()) {
            $this->handleCarInputsInDriverForm($user, $carRepository);
            $this->handlePreferenceInputsInDriverForm($user, $preferenceRepository);

            if ($userRepository->saveDriverProfile($user)) {
                $this->addFlash('success', 'Vos informations chauffeur ont bien été enregistrées.');
                $this->updateUserRoles($driverProfileForm, $roleManager);
            } else {
                $this->addFlash('error',
                    'Une erreur est survenue lors de la sauvegarde de votre profil chauffeur. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
        }

        return $driverProfileForm;
    }

    private function handleCarInputsInDriverForm(User $user, CarRepository $carRepository): void
    {
        $registeredUserLicensePlates = $carRepository->findLicencePlatesByUserId($user->getId());
        $submittedLicensePlates = [];

        foreach ($user->getCars() as $car) {
            $submittedLicensePlates[] = $car->getLicensePlate();
            if (!\in_array($car->getLicensePlate(), $registeredUserLicensePlates, true)) {
                $carRepository->createCar($car);
            } else {
                $carRepository->updateCar($car);
            }
        }

        foreach ($registeredUserLicensePlates as $registeredUserLicensePlate) {
            if (!\in_array($registeredUserLicensePlate, $submittedLicensePlates, true)) {
                $carRepository->deleteCarByLicensePlate($registeredUserLicensePlate);
            }
        }
    }

    private function updateUserRoles(FormInterface $form, RoleManager $roleManager): void
    {
        if (!$roleManager->handleProfileFormToBeDriver($form)) {
            $this->addFlash('warning', 'Vous n\'êtes pas/plus considéré(e) comme chauffeur.');
        }
    }

    private function handlePreferenceInputsInDriverForm(User $user, PreferenceRepository $preferenceRepository): void
    {
        $registeredUserPreferenceLabels = $preferenceRepository->findPreferenceLabelsByUserId($user->getId());
        $submittedPreferencesLabels = [];

        foreach ($user->getPreferences() as $preference) {
            $submittedPreferencesLabels[] = $preference->getLabel();
            if (!\in_array($preference->getLabel(), $registeredUserPreferenceLabels, true)) {
                $preferenceRepository->createPreference($preference);
            }
        }

        foreach ($registeredUserPreferenceLabels as $registeredUserPreferenceLabel) {
            if (!\in_array($registeredUserPreferenceLabel, $submittedPreferencesLabels, true)) {
                $preferenceRepository->deletePreferenceById($registeredUserPreferenceLabel);
            }
        }
    }
}
