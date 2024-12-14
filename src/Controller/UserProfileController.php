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
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/profil')]
class UserProfileController extends AbstractController
{
    #[Route('/', name: 'app_user_profile')]
    public function show(
        Request $request,
        FileUploader $fileUploader,
        UserRepository $userRepository,
        RoleManager $roleManager,
    ): Response {
        /** @var User $user */
        $user = $this->getUser() ?? new User();
        $passengerProfileForm = $this->createForm(PassengerType::class, $user);
        $driverProfileForm = $this->createForm(DriverType::class, $user);

        $passengerProfileForm->handleRequest($request);

        if ($passengerProfileForm->isSubmitted() && $passengerProfileForm->isValid()) {
            /** @var UploadedFile $photoFile */
            $photoFile = $passengerProfileForm->get('photo')->getData();
            if ($photoFile) {
                $photoFileName = $fileUploader->upload($photoFile);
                $user->setPhotoFilename($photoFileName);
            }
            if ($userRepository->savePassengerProfile($user)) {
                $this->addFlash('success', 'Vos informations ont bien été enregistrées.');
            } else {
                $this->addFlash('error', 'Une erreur est survenue lors de la sauvegarde. Veuillez recommencer.');
            }

            return $this->redirectToRoute('app_user_profile');
        }

        return $this->render('userProfile/index.html.twig', [
            'controller_name' => 'UserProfileController',
            'passengerProfileForm' => $passengerProfileForm,
            'driverProfileForm' => $driverProfileForm->createView(),
            'activeTab' => $activeTab ?? 'passenger',
            'roleDescription' => $roleManager->getRoleDescription(),
        ]);
    }
}
