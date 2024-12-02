<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\RoleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UserProfileController extends AbstractController
{
    #[Route('/profil', name: 'app_user_profile')]
    public function index(RoleManager $roleManager): Response
    {
        return $this->render('user_profile/index.html.twig', [
            'controller_name' => 'UserProfileController',
            'roleDescription' => $roleManager->getRoleDescription()
        ]);
    }
}
