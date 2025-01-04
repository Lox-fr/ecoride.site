<?php

declare(strict_types=1);

namespace App\Service;

use App\Document\Carpool;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class FormSessionHandler
{
    private const SESSION_KEY_PREFIX = 'form_data_';

    public function __construct(private RequestStack $requestStack)
    {
    }

    public function storeCarpoolFormDataInSession(FormInterface $form): void
    {
        $formData = $form->getData();
        if ($formData instanceof Carpool) {
            $formData = [
                'departureTime'     => $formData->getDepartureTime(),
                'departureCity'     => $formData->getDepartureCity(),
                'departurePlace'    => $formData->getDeparturePlace(),
                'arrivalCity'       => $formData->getArrivalCity(),
                'arrivalPlace'      => $formData->getArrivalPlace(),
                'estimatedRideTime' => $formData->getEstimatedRideTime(),
                'pricePerPerson'    => $formData->getPricePerPerson(),
            ];
        }
        $this->saveFormDataToSession('carpool', $formData);
    }

    public function hydrateCarpoolFromSessionData(string $formKey): Carpool
    {
        $formData = $this->getFormDataFromSession($formKey);
        $carpool = new Carpool();
        if ($formData) {
            $mapping = [
                'departureTime'     => 'setDepartureTime',
                'departureCity'     => 'setDepartureCity',
                'departurePlace'    => 'setDeparturePlace',
                'arrivalCity'       => 'setArrivalCity',
                'arrivalPlace'      => 'setArrivalPlace',
                'estimatedRideTime' => 'setEstimatedRideTime',
                'pricePerPerson'    => 'setPricePerPerson',
            ];

            foreach ($mapping as $key => $method) {
                if (!empty($formData[$key])) {
                    if ($key === 'departureTime' && isset($formData[$key])) {
                        if (!$formData[$key] instanceof \DateTimeImmutable) {
                            $formData[$key] = \DateTimeImmutable::createFromFormat(DATE_ATOM, $formData[$key]);
                        }
                    }
                    $carpool->$method($formData[$key]);
                }
            }
        }

        return $carpool;
    }

    public function removeFormDataFromSession(string $formKey): void
    {
        $this->requestStack->getSession()->remove(self::SESSION_KEY_PREFIX.$formKey);
    }

    private function saveFormDataToSession(string $formKey, array $formData): void
    {
        $this->requestStack->getSession()->set(self::SESSION_KEY_PREFIX.$formKey, $formData);
    }

    private function getFormDataFromSession(string $formKey): ?array
    {
        return $this->requestStack->getSession()->get(self::SESSION_KEY_PREFIX.$formKey, null);
    }
}
