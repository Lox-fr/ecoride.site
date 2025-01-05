<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Entity\Car;
use App\Entity\User;
use App\Form\CarFormType;
use App\Form\Carpool\CarpoolAddFormType;
use App\Form\User\DriverProfileFormType;
use App\Form\User\PassengerProfileFormType;
use App\Repository\CarRepository;
use App\Service\CarpoolManager;
use App\Service\FormSessionHandler;
use App\Service\RoleManager;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AddCarpoolController extends AbstractController
{
    public function __construct(
        private Security $security,
        private CarRepository $carRepository,
        private DocumentManager $documentManager,
        private RoleManager $roleManager,
        private CarpoolManager $carpoolManager,
        private FormSessionHandler $formSessionHandler,
    ) {
    }

    #[Route('/publier-trajet', name: 'app_carpool_add')]
    public function add(Request $request): Response|RedirectResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        if (!$user) {
            $this->addFlash('info', 'Veuillez vous connecter pour proposer un covoiturage.');

            return $this->redirectToRoute('app_login', [
                '_target_path' => $this->generateUrl('app_carpool_add'),
            ]);
        }

        $carAddFormInCarpoolForm = $this->handlecarAddFormInCarpoolForm($request, $user, $this->carRepository);
        if ($carAddFormInCarpoolForm instanceof RedirectResponse) {
            return $carAddFormInCarpoolForm;
        }

        $carpoolForm = $this->handleCarpoolForm($request, $user);
        if ($carpoolForm instanceof RedirectResponse) {
            return $carpoolForm;
        }

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'AddCarpoolController',
            'activeTab' => 'publier-trajet',
            'roleDescription' => $this->roleManager->getRoleDescription(),
            'passengerProfileForm' => $this->createForm(PassengerProfileFormType::class, $user),
            'driverProfileForm' => $this->createForm(DriverProfileFormType::class, $user),
            'carpoolForm' => $carpoolForm,
            'carAddFormInCarpoolForm' => $carAddFormInCarpoolForm,
        ]);
    }

    private function handlecarAddFormInCarpoolForm(Request $request, User $user, CarRepository $carRepository,
    ): FormInterface|RedirectResponse {
        $newCar = new Car();
        $carAddFormInCarpoolForm = $this->createForm(CarFormType::class, $newCar);

        $carAddFormInCarpoolForm->handleRequest($request);

        if ($carAddFormInCarpoolForm->isSubmitted()) {
            if ($carAddFormInCarpoolForm->isValid()) {
                $newCar->setUser($user);
                $carRepository->createCar($newCar);
                $this->addFlash('success', 'Votre nouveau véhicule a été enregistré avec succès.');

                return $this->redirectToRoute('app_carpool_add');
            }
            $this->addFlash('error',
                'Les informations fournies pour l\'ajout de votre nouveau véhicule sont invalides.<br/>
                Veuillez recommencer.');
        }

        return $carAddFormInCarpoolForm;
    }

    private function handleCarpoolForm(Request $request, User $user): FormInterface|RedirectResponse
    {
        $carpool = $this->formSessionHandler->hydrateCarpoolFromSessionData('carpool');
        $carpoolForm = $this->createForm(CarpoolAddFormType::class, $carpool,
            ['user_cars' => \is_array($user->getCars()) ? $user->getCars() : iterator_to_array($user->getCars())]);

        $carpoolForm->handleRequest($request);

        if ($carpoolForm->isSubmitted() && $carpoolForm->isValid()) {
            // Check if the user has the 'ROLE_DRIVER'
            if (!$this->security->isGranted('ROLE_DRIVER')) {
                $this->addFlash('warning', 'Il vous faut changer de statut pour proposer des covoiturages.<br/>
                    Devenez chauffeur EcoRide et rentabilisez vos trajets !');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolForm);

                return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
            }
            // Check if an estimated ride time is provided
            if (!$carpoolForm->get('estimatedRideTime')->getData()) {
                $this->addFlash('error', 'Veuillez fournir un temps de trajet estimatif.');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolForm);

                return $this->redirectToRoute('app_carpool_add');
            }
            // Check if a car was selected
            if (!$carpoolForm->get('car')->getData()) {
                $this->addFlash('error', 'Veuillez sélectionner un véhicule.');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolForm);

                return $this->redirectToRoute('app_carpool_add');
            }
            // Check if a price per person is provided
            if (!$carpoolForm->get('pricePerPerson')->getData()) {
                $this->addFlash('error', 'Veuillez fournir le prix demandé à chaque passager.');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolForm);

                return $this->redirectToRoute('app_carpool_add');
            }
            // Check the departure time
            $departureTime = $carpoolForm->get('departureTime')->getData();
            if (!$departureTime instanceof \DateTimeImmutable || $departureTime <= new \DateTimeImmutable()) {
                $this->addFlash('error', $departureTime instanceof \DateTimeImmutable
                    ? 'Vous ne pouvez pas publier de trajet passé.'
                    : 'L\'heure de départ est invalide.');
                $this->formSessionHandler->storeCarpoolFormDataInSession($carpoolForm);

                return $this->redirectToRoute('app_carpool_add');
            }
            // Populate and save the carpool
            $hydratedCarpool = $this->carpoolManager->populateCarpoolWithDriverAndFormDetails(
                $carpool, $carpoolForm, $user);
            $this->documentManager->persist($hydratedCarpool);
            $this->documentManager->flush();

            $this->addFlash('success', 'Votre covoiturage a été publié avec succès !');
            $this->formSessionHandler->removeFormDataFromSession('carpool');

            return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
        }

        return $carpoolForm;
    }
}
