<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Document\Carpool;
use App\Form\Carpool\CarpoolSearchFormType;
use App\Service\FormSessionHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SearchCarpoolController extends AbstractController
{
    public function __construct(
        private FormSessionHandler $formSessionHandler,
    ) {
    }

    #[Route('/rechercher-trajet', name: 'app_carpool_search')]
    public function index(Request $request): Response
    {
        $carpool = new Carpool();
        $carpoolSearchForm = $this->createForm(CarpoolSearchFormType::class, $carpool);

        $carpoolSearchForm->handleRequest($request);

        if ($carpoolSearchForm->isSubmitted() && $carpoolSearchForm->isValid()) {
            // Check the departure time
            $departureTime = $carpoolSearchForm->get('departureTime')->getData();
            if (!$departureTime instanceof \DateTimeImmutable || $departureTime <= new \DateTimeImmutable()) {
                $this->addFlash('warning', $departureTime instanceof \DateTimeImmutable
                    ? 'Vous ne pouvez pas chercher de trajets passés.'
                    : 'La date et/ou l\'heure du départ sont invalides.');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolSearchForm);

                return $this->redirectToRoute('app_carpool_search');
            }

            $this->addFlash('success', 'La recherche va pouvoir être lancée.');

            return $this->redirectToRoute('app_carpool_search');
        }

        return $this->render('carpool/index.html.twig', [
            'controller_name' => 'SearchCarpoolController',
            'carpoolSearchForm' => $carpoolSearchForm,
        ]);
    }
}
