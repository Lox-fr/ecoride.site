<?php

declare(strict_types=1);

namespace App\Service\Carpool;

use App\Entity\User;
use App\Document\Carpool;
use App\Service\SessionHandler;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Form\FormInterface;

class CarpoolSessionDataManager
{
    public function __construct(
        private DocumentManager $documentManager,
        private SessionHandler $sessionHandler,
        private CarpoolHandler $carpoolHandler,
    ) {
    }

    /**
     * Stores the carpool form data in the session.
     * If the form data is an object, it will be serialized before saving.
     *
     * @param string        $sessionKey The session key
     * @param FormInterface $form       The form containing the carpool data
     */
    public function storeCarpoolFormDataInSession(string $sessionKey, FormInterface $form): void
    {
        $formData = $form->getData();
        if ($formData instanceof Carpool) {
            $formData = [
                'departureTime' => $formData->getDepartureTime(),
                'departureCity' => $formData->getDepartureCity(),
                'departurePlace' => $formData->getDeparturePlace(),
                'arrivalCity' => $formData->getArrivalCity(),
                'arrivalPlace' => $formData->getArrivalPlace(),
                'estimatedRideTime' => $formData->getEstimatedRideTime(),
                'pricePerPerson' => $formData->getPricePerPerson(),
            ];
        }
        $this->sessionHandler->saveToSession($sessionKey, $formData);
    }

    /**
     * Retrieves the carpool form data from the session and hydrates a new Carpool object.
     * If the session data is serialized, it will be unserialized.
     *
     * @param string $sessionKey The session key
     *
     * @return Carpool A hydrated Carpool object
     */
    public function createNewCarpoolInstanceWithSessionData(string $sessionKey): Carpool
    {
        $formData = $this->sessionHandler->getFromSession($sessionKey);
        $carpool = new Carpool();
        if ($formData) {
            $settersMapping = [
                'departureTime' => 'setDepartureTime',
                'departureCity' => 'setDepartureCity',
                'departurePlace' => 'setDeparturePlace',
                'arrivalCity' => 'setArrivalCity',
                'arrivalPlace' => 'setArrivalPlace',
                'estimatedRideTime' => 'setEstimatedRideTime',
                'pricePerPerson' => 'setPricePerPerson',
            ];

            foreach ($settersMapping as $key => $method) {
                if (isset($formData[$key]) && !empty($formData[$key])) {
                    $carpool->$method($formData[$key]);
                }
            }
        }

        return $carpool;
    }

    /**
     * Undocumented function.
     *
     * @return void
     */
    public function removeCarpoolFormDataFromSession()
    {
        $this->sessionHandler->removeFromSession('formData_carpoolAdd');
    }

    /**
     * Undocumented function.
     */
    public function storeCarpoolSearchResultDataInSession(array $results): void
    {
        $this->sessionHandler->saveToSession('searchData_carpoolResults', $results);
    }

    /**
     * Undocumented function.
     *
     * @return array<Carpool>
     */
    public function getArrayOfLatestCarpoolSearchResults(): array
    {
        return $this->sessionHandler->getFromSession('searchData_carpoolResults') ?? [];
    }

    public function markCarpoolSearchExecutableAfterRedirection(): void
    {
        $this->sessionHandler->saveToSession('carpoolSearch_mustBeExecuted', true);
    }

    public function markCarpoolSearchExecuted()
    {
        $this->sessionHandler->saveToSession('carpoolSearch_mustBeExecuted', false);
    }

    public function isExecutableCarpoolSearch(): bool
    {
        return $this->sessionHandler->getFromSession('carpoolSearch_mustBeExecuted');
    }
}
