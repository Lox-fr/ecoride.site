<?php

declare(strict_types=1);

namespace App\Controller;

use App\Document\Carpool;
use App\Form\Carpool\CarpoolAddFormType;
use App\Form\User\DriverProfileFormType;
use App\Form\User\PassengerProfileFormType;
use App\Service\RoleManager;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CarpoolController extends AbstractController
{
    public function __construct(private Security $security)
    {
    }

    #[Route('/proposer-covoiturage', name: 'app_carpool_add')]
    public function add(
        Request $request,
        DocumentManager $documentManager,
        RoleManager $roleManager,
    ): Response|RedirectResponse {
        $user = $this->getUser();
        if (!$user) {
            $this->addFlash('info', 'Veuillez vous connecter pour proposer un covoiturage.');

            return $this->redirectToRoute('app_login', [
                '_target_path' => $this->generateUrl('app_carpool_add'),
            ]);
        }

        $carpool = new Carpool();
        $carpoolForm = $this->createForm(CarpoolAddFormType::class, $carpool);
        $carpoolForm->handleRequest($request);
        if ($carpoolForm->isSubmitted() && $carpoolForm->isValid()) {
            if ($this->security->isGranted('ROLE_DRIVER')) {
                $documentManager->persist($carpool);
                $documentManager->flush();
                $this->addFlash('success', 'Votre covoiturage a été ajouté avec succès !');

                return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
            }
            $this->addFlash('info', 'Il vous faut changer de statut pour proposer des covoiturages.<br/>
                Devenez chauffeur EcoRide et rentabilisez vos trajets !');

            return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
        }

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'AddCarpoolController',
            'activeTab' => 'proposer-trajet',
            'roleDescription' => $roleManager->getRoleDescription(),
            'passengerProfileForm' => $this->createForm(PassengerProfileFormType::class, $user),
            'driverProfileForm' => $this->createForm(DriverProfileFormType::class, $user),
        ]);
    }
}
