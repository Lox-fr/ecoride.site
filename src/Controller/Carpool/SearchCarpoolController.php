<?php

declare(strict_types=1);

namespace App\Controller\Carpool;

use App\Form\Carpool\CarpoolSearchFormType;
use App\Service\Carpool\CarpoolSearchService;
use App\Service\Carpool\CarpoolSessionDataManager;
use App\Service\FormErrorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SearchCarpoolController extends AbstractController
{
    public function __construct(
        private CarpoolSessionDataManager $carpoolSessionDataManager,
        private CarpoolSearchService $carpoolSearchService,
        private FormErrorService $formErrorService,
    ) {
    }

    #[Route('/rechercher-trajet', name: 'app_carpool_search')]
    public function index(Request $request): Response
    {
        // Create a new carpool instance from session data if available and initialize the search form
        $newCarpool = $this->carpoolSessionDataManager
            ->createNewCarpoolInstanceWithSessionData('formData_carpoolSearch');
        $carpoolSearchForm = $this->createForm(CarpoolSearchFormType::class, $newCarpool);

        // Handle the form submission
        $carpoolSearchForm->handleRequest($request);

        // Redirect if the form is submitted
        if ($carpoolSearchForm->isSubmitted()) {
            return $this->handleCarpoolSearchFormSubmission($carpoolSearchForm);
        }

        // Execute the carpool search if applicable or retrieve previous results
        $carpoolSearchResults = $this->handleCarpoolSearchExecution($carpoolSearchForm);

        return $this->render('carpool/index.html.twig', [
            'controller_name' => 'SearchCarpoolController',
            'carpoolSearchForm' => $carpoolSearchForm->createView(),
            'carpoolSearchResults' => $carpoolSearchResults,
        ]);
    }

    /**
     * Handles the submission of the carpool search form :
     * save search form data in session, capture potential validation errors
     * and determine if the search is executable after redirection
     *
     * @param FormInterface $carpoolSearchForm The submitted carpool search form
     */
    private function handleCarpoolSearchFormSubmission(FormInterface $carpoolSearchForm): RedirectResponse
    {
        // Save search form data in session for display and potential execution after redirection.
        $this->carpoolSessionDataManager->storeCarpoolFormDataInSession('formData_carpoolSearch', $carpoolSearchForm);

        // Handle form validation errors
        if (!$carpoolSearchForm->isValid()) {
            $this->formErrorService->addFormErrorsAsFlashMessages($carpoolSearchForm);

            return $this->redirectToRoute('app_carpool_search');
        }

        // Validate the departure time
        $departureTime = $carpoolSearchForm->get('departureTime')->getData();
        if (!$this->carpoolSearchService->isValidDepartureTime($departureTime)) {
            $this->addFlash('warning', $departureTime instanceof \DateTimeImmutable
                ? 'Vous ne pouvez pas chercher de trajets passés.'
                : 'La date et/ou l\'heure du départ sont invalides.'
            );

            return $this->redirectToRoute('app_carpool_search');
        }

        // Mark the search as executable after redirection
        $this->carpoolSessionDataManager->markCarpoolSearchExecutableAfterRedirection();

        return $this->redirectToRoute('app_carpool_search');
    }

    /**
     * Executes the carpool search or retrieves previous search results from the session.
     *
     * If the search is marked as executable in the session, it performs the query,
     * stores the results, and updates the session state. Otherwise, it retrieves the
     * last search results stored in the session.
     *
     * @param FormInterface $carpoolSearchForm the carpool search form containing user inputs
     *
     * @return array The results of the carpool search. Returns an empty array if no results are found.
     */
    private function handleCarpoolSearchExecution(FormInterface $carpoolSearchForm): array
    {
        if ($this->carpoolSessionDataManager->isExecutableCarpoolSearch()) {

            // Execute the search query with data from the submitted form (store in session)
            $carpoolSearchResults = $this->carpoolSearchService->executeSearchQueryWithFormData($carpoolSearchForm);

            // Add a warning message if no results are found
            if (empty($carpoolSearchResults)) {
                $this->addFlash('warning', 'Aucun résultat n\'a été trouvé avec les paramètres souhaités.');
            }

            // Store the search results in the session
            $this->carpoolSessionDataManager->storeCarpoolSearchResultDataInSession($carpoolSearchResults);

            // Mark the search as executed to prevent re-execution
            $this->carpoolSessionDataManager->markCarpoolSearchExecuted();

            return $carpoolSearchResults;
        }

        return $this->carpoolSessionDataManager->getArrayOfLatestCarpoolSearchResults();
    }
}
