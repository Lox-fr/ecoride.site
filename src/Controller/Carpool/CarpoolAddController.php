<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Entity\Car;
use App\Entity\User;
use App\Form\CarFormType;
use App\Form\Carpool\CarpoolAddFormType;
use App\Form\User\DriverProfileFormType;
use App\Form\User\PassengerProfileFormType;
use App\Service\Carpool\CarpoolAddService;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Carpool\CarpoolSessionDataManager;
use App\Service\User\CarManager;
use App\Service\User\RoleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class CarpoolAddController extends AbstractController
{
    public const CARPOOL_ADD_FORM_SESSION_KEY = 'formData_carpoolAdd';

    public function __construct(
        private Security $security,
        private RoleManager $roleManager,
        private CarManager $carManager,
        private CarpoolAddService $carpoolAddService,
        private CarpoolSearchService $carpoolSearchService,
        private CarpoolSessionDataManager $carpoolSessionDataManager,
    ) {
    }

    #[Route('/publier-trajet', name: 'app_carpool_add')]
    public function add(Request $request): Response|RedirectResponse
    {
        // Restrict access to logged in users and display a flash message to others
        /** @var User $user */
        $user = $this->getUser();
        if (!$user) {
            $this->addFlash('info', 'Veuillez vous connecter pour proposer un covoiturage.');
        }
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // Handle car add form submission
        $addCarFormInCarpoolForm = $this->handleAddCarFormInAddCarpoolForm($request, $user);
        if ($addCarFormInCarpoolForm instanceof RedirectResponse) {
            return $addCarFormInCarpoolForm;
        }
        // Handle carpool add form submission
        $carpoolForm = $this->handleAddCarpoolForm($request, $user);
        if ($carpoolForm instanceof RedirectResponse) {
            return $carpoolForm;
        }
        // Retrieve user carpool history
        $userCarpoolsData = $this->carpoolSearchService->getUserCarpools($user);

        return $this->render('profile/index.html.twig', [
            'controller_name' => 'AddCarpoolController',
            'activeTab' => 'publier-trajet',
            'roleDescription' => $this->roleManager->getRoleDescription(),
            'passengerProfileForm' => $this->createForm(PassengerProfileFormType::class, $user),
            'driverProfileForm' => $this->createForm(DriverProfileFormType::class, $user),
            'carpoolForm' => $carpoolForm,
            'addCarFormInCarpoolForm' => $addCarFormInCarpoolForm,
            'pastCarpoolsByYear' => $userCarpoolsData['pastCarpoolsByYear'],
            'currentCarpools' => $userCarpoolsData['currentCarpools'],
            'upcomingCarpools' => $userCarpoolsData['upcomingCarpools'],
        ]);
    }

    /**
     * Handles the "Add Car" form submission within the carpool publishing process.
     *
     * This function creates and manages the form for adding a new car.
     * It validates the form data, saves the new car to the database if the form is valid,
     * and provides appropriate feedback to the user via flash messages.
     *
     * @param Request $request the HTTP request object containing form data
     * @param User    $user    the currently authenticated user
     *
     * @return FormInterface|RedirectResponse the form object for rendering or a redirect response
     */
    private function handleAddCarFormInAddCarpoolForm(Request $request, User $user,
    ): FormInterface|RedirectResponse {
        $newCar = new Car();

        // Create the "Add Car" form and bind it to the new Car instance
        $addCarFormInCarpoolForm = $this->createForm(CarFormType::class, $newCar);

        // Handle the form submission
        $addCarFormInCarpoolForm->handleRequest($request);

        if ($addCarFormInCarpoolForm->isSubmitted()) {
            // If the form is valid, save the new car and notify the user
            if ($addCarFormInCarpoolForm->isValid()) {
                $newCar->setUser($user);
                $this->carManager->saveNewCar($newCar); // Save the car in the database
                $this->addFlash('success', 'Votre nouveau véhicule a été enregistré avec succès.');

                return $this->redirectToRoute('app_carpool_add');
            }
            $this->addFlash('error',
                'Les informations fournies pour l\'ajout de votre nouveau véhicule sont invalides.<br/>
                Veuillez recommencer.');
        }

        return $addCarFormInCarpoolForm;
    }

    /**
     * Handles the carpool publishing form submission process.
     *
     * This function manages the "Add Carpool" form, validates user input, and processes the carpool publication.
     * It also provides user feedback, handles invalid inputs, and stores form data in the session for future use.
     *
     * @param Request $request the HTTP request object containing form data
     * @param User    $user    the currently authenticated user
     *
     * @return FormInterface|RedirectResponse the form object for rendering or a redirect response
     */
    private function handleAddCarpoolForm(Request $request, User $user): FormInterface|RedirectResponse
    {
        // Create a new carpool instance with session data, if available
        $newCarpool = $this->carpoolSessionDataManager
            ->createNewCarpoolInstanceWithSessionData(self::CARPOOL_ADD_FORM_SESSION_KEY);

        // Initialize the "Add Carpool" form with the user's cars
        $carpoolForm = $this->createForm(CarpoolAddFormType::class, $newCarpool,
            ['user_cars' => \is_array($user->getCars()) ? $user->getCars() : iterator_to_array($user->getCars())]);

        // Handle the form submission
        $carpoolForm->handleRequest($request);

        if ($carpoolForm->isSubmitted() && $carpoolForm->isValid()) {
            // Store form data in session to retain it for later use if needed.
            $this->carpoolSessionDataManager
                ->storeCarpoolFormDataInSession(self::CARPOOL_ADD_FORM_SESSION_KEY, $carpoolForm);

            // Ensure the user has the 'ROLE_DRIVER'
            if (!$this->security->isGranted('ROLE_DRIVER')) {
                $this->addFlash('warning', 'Il vous faut changer de statut pour proposer des covoiturages.<br/>
                    Devenez chauffeur EcoRide et rentabilisez vos trajets !');

                return $this->redirectToRoute('app_profile', ['activeTab' => 'devenir-chauffeur']);
            }
            // Validate estimated ride time
            if (!$carpoolForm->get('estimatedRideTime')->getData()) {
                $this->addFlash('error', 'Veuillez fournir un temps de trajet estimatif.');

                return $this->redirectToRoute('app_carpool_add');
            }
            // Ensure a car is selected
            if (!$carpoolForm->get('car')->getData()) {
                $this->addFlash('error', 'Veuillez sélectionner un véhicule.');

                return $this->redirectToRoute('app_carpool_add');
            }
            // Ensure a price per person is provided
            if (!$carpoolForm->get('pricePerPerson')->getData()) {
                $this->addFlash('error', 'Veuillez fournir le prix demandé à chaque passager.');

                return $this->redirectToRoute('app_carpool_add');
            }
            // Validate the departure time
            $departureTime = $carpoolForm->get('departureTime')->getData();
            if (!$this->carpoolAddService->isValidDepartureTime($departureTime)) {
                $this->addFlash('error', $departureTime instanceof \DateTimeImmutable
                    ? 'Vous ne pouvez pas publier de trajet passé.'
                    : 'La date et/ou l\'heure du départ sont invalides.');

                return $this->redirectToRoute('app_carpool_add');
            }
            // Populate the Carpool instance with data from the driver and submitted form. Save it in database.
            $this->carpoolAddService->populateAndSaveCarpool($newCarpool, $user, $carpoolForm);
            $this->addFlash('success', 'Votre covoiturage a été publié avec succès !');

            // Clear form data from session to reset the form
            $this->carpoolSessionDataManager->removeCarpoolFormDataFromSession(self::CARPOOL_ADD_FORM_SESSION_KEY);

            return $this->redirectToRoute('app_profile', ['activeTab' => 'historique-trajets']);
        }

        return $carpoolForm;
    }
}
