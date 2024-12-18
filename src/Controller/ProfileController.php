<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\Profile\DriverType;
use App\Form\Profile\PassengerType;
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
        RoleManager $roleManager,
        ?string $activeTab,
    ): Response|RedirectResponse {
        /** @var User $user */
        $user = $this->getUser() ?? new User();

        $passengerProfileForm = $this->handlePassengerForm($request, $user, $userRepository, $fileUploader);
        if ($passengerProfileForm instanceof RedirectResponse) {
            return $passengerProfileForm;
        }
        $driverProfileForm = $this->handleDriverForm($request, $user, $userRepository);
        if ($driverProfileForm instanceof RedirectResponse) {
            return $driverProfileForm;
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
        Request $request, User $user, UserRepository $userRepository, FileUploader $fileUploader,
    ): FormInterface|RedirectResponse {
        $passengerForm = $this->createForm(PassengerType::class, $user);
        $passengerForm->handleRequest($request);
        if ($passengerForm->isSubmitted() && $passengerForm->isValid()) {
            /** @var UploadedFile $photoFile */
            $photoFile = $passengerForm->get('photo')->getData();
            if ($photoFile) {
                $photoFileName = $fileUploader->upload($photoFile);
                $user->setPhotoFilename($photoFileName);
            }

            if ($userRepository->savePassengerProfile($user)) {
                $this->addFlash('success', 'Vos informations ont bien été enregistrées.');
            } else {
                $this->addFlash('error', 'Une erreur est survenue lors de la sauvegarde. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_profile');
        }

        return $passengerForm;
    }

    private function handleDriverForm(
        Request $request, User $user, UserRepository $userRepository,
    ): FormInterface|RedirectResponse {
        $driverProfileForm = $this->createForm(DriverType::class, $user);
        $driverProfileForm->handleRequest($request);
        if ($driverProfileForm->isSubmitted() && $driverProfileForm->isValid()) {
            if ($userRepository->saveDriverProfile($user)) {
                $this->addFlash('success', 'Vos informations ont bien été enregistrées.');
            } else {
                $this->addFlash('error', 'Une erreur est survenue lors de la sauvegarde. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
        }

        return $driverProfileForm;
    }
}
