<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\Profile\DriverType;
use App\Form\Profile\PassengerType;
use App\Service\FileUploader;
use App\Service\RoleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UserProfileController extends AbstractController
{
    #[Route('/profil', name: 'app_user_profile')]
    public function index(
        Request $request,
        FileUploader $fileUploader,
        RoleManager $roleManager,
    ): Response {
        /** @var User $user */
        $user = $this->getUser() ?? new User();

        $passengerProfileForm = $this->createForm(PassengerType::class, $user);
        $passengerProfileForm->handleRequest($request);
        if ($passengerProfileForm->isSubmitted() && $passengerProfileForm->isValid()) {
            /** @var UploadedFile $photoFile */
            $photoFile = $passengerProfileForm->get('photo')->getData();
            if ($photoFile) {
                $photoFileName = $fileUploader->upload($photoFile);
                $user->setPhotoFilename($photoFileName);
            }
        }

        $driverProfileForm = $this->createForm(DriverType::class, $user);
        $driverProfileForm->handleRequest($request);
        if ($driverProfileForm->isSubmitted() && $driverProfileForm->isValid()) {
        }

        return $this->render('userProfile/index.html.twig', [
            'controller_name' => 'UserProfileController',
            'passengerProfileForm' => $passengerProfileForm->createView(),
            'driverProfileForm' => $driverProfileForm->createView(),
            'activeTab' => $activeTab ?? 'passenger',
            'roleDescription' => $roleManager->getRoleDescription(),
        ]);
    }
}
