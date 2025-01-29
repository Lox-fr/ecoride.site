<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Service\Carpool\CarpoolSearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

final class ViewCarpoolController extends AbstractController
{
    // public function __construct(
    //     private CarpoolSearchService $carpoolSearchService,
    // ) {
    // }

    #[Route('/covoiturage/{carpoolId}', name: 'app_carpool_view')]
    public function index(
        string $carpoolId,
        UrlGeneratorInterface $urlGenerator,
        CarpoolSearchService $carpoolSearchService,
    ): Response|RedirectResponse {
        $carpool = $carpoolSearchService->findOneById($carpoolId);

        if (!$carpool) {
            $this->addFlash('warning', 'Le covoiturage que vous cherchez n\'existe pas.');

            $url = $urlGenerator->generate('app_home');

            return new RedirectResponse($url);
        }

        return $this->render('carpool/view/index.html.twig', [
            'controller_name' => 'ViewCarpoolController',
            'carpool' => $carpool,
        ]);
    }
}
