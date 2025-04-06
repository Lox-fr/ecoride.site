<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/contact')]
final class ContactController extends AbstractController
{
    #[Route('', name: 'app_contact')]
    public function index(): Response
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }

    #[Route('/envoyer-message', name: 'app_contact_submit', methods: ['POST'])]
    public function submit(Request $request, MailerInterface $mailer): Response
    {
        $name = $request->request->get('name');
        $email = $request->request->get('email');
        $message = $request->request->get('message');
        $token = $request->request->get('_csrf_token');

        // Check if the CSRF token is valid
        if (!$this->isCsrfTokenValid('contact', $token)) {
            $this->addFlash('error', 'Le jeton CSRF est invalide.');

            return $this->redirectToRoute('app_contact');
        }

        // Check if all fields are filled and email is valid
        if (empty($name) || !filter_var($email, \FILTER_VALIDATE_EMAIL) || empty($message)) {
            $this->addFlash('danger', 'Tous les champs sont requis et l\'adresse email doit être valide.');

            return $this->redirectToRoute('app_contact');
        }

        // if all is valid, send an email
        $emailMessage = (new Email())
            ->from($email)
            ->to('contact@ecoride.com')
            ->subject('Nouveau message de contact - EcoRide')
            ->html(
                "
                    <p><strong>Bonjour</strong></p>
                    <p>
                        Un nouveau message de contact émis depuis ecoride.site vous est parvenu<br/>
                        En voici les détails :
                    </p>
                    <p>
                        <strong>De la part de</strong> : $name<br/>
                        <strong>Adresse email</strong> : $email
                    </p>
                    <p>
                        <strong>Contenu du message</strong> :<br/>
                        $message
                    </p>
                "
            );
        try {
            $mailer->send($emailMessage);
            $this->addFlash('success', 'Merci pour votre message ! Nous reviendrons vers vous rapidement.');
        } catch (\Exception $e) {
            $this->addFlash('error', 'Une erreur est survenue lors de l\'envoi de votre message.');
        }

        return $this->redirectToRoute('app_contact');
    }
}
