<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\Carpool\CarpoolSearchFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $carpoolSearchForm = $this->createForm(CarpoolSearchFormType::class);

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'carpoolSearchForm' => $carpoolSearchForm->createView(),
        ]);
    }
}
