<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class FormErrorService
{
    public function __construct(
        private RequestStack $requestStack,
    ) {
    }

    /**
     * Adds form validation errors to the flash messages for display.
     *
     * @param FormInterface $form the form containing validation errors
     */
    public function addFormErrorsAsFlashMessages(FormInterface $form): void
    {
        /** @var SessionInterface $session */
        $session = $this->requestStack->getSession();

        if (!$session) {
            throw new \LogicException('No session is available. Make sure sessions are enabled.');
        }

        $flashBag = $session->getFlashBag();

        foreach ($form->getErrors(true, true) as $error) {
            $flashBag->add('error', $error->getMessage());
        }
    }
}
