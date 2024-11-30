<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response|RedirectResponse
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var string $plainPassword */
            $plainPassword = $form->get('plainPassword')->getData();

            // Encode the plain password
            $hashedPassword = $userPasswordHasher->hashPassword($user, $plainPassword);

            try {
                // Connecting to the database
                $connection = $entityManager->getConnection();

                // Load SQL from file
                $sql = file_get_contents(__DIR__.'/../sql/create/userRegistration.sql');

                // The data to inject into the SQL script
                $params = [
                    'email' => $form->get('email')->getData(),
                    'pseudo' => $form->get('pseudo')->getData(),
                    'password' => $hashedPassword,
                    'created_at' => $user->getCreatedAt()->format('Y-m-d H:i:s'),
                    'active' => (int) $user->isActive(),
                    'credits' => (int) $user->getCredits(),
                ];

                // Replace placeholders in SQL script
                foreach ($params as $key => $value) {
                    $sql = str_replace(":$key", $connection->quote($value), $sql);
                }

                // Execute the SQL script
                $connection->executeStatement($sql);

                $this->addFlash('success', '
                    Bienvenue dans la communauté EcoRide,<br/>
                    N\'hésitez pas à completer votre profil.<br/>
                    Connectez-vous pour profitez de vos 20 crédits offerts !'
                );

                return $this->redirectToRoute('app_login');
            } catch (\Exception $e) {
                // Handle any SQL or connection errors
                $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');

                return $this->redirectToRoute('app_register');
            }
        }

        return $this->render('registration/register.html.twig', [
            'controller_name' => 'RegistrationController',
            'registrationForm' => $form,
        ]);
    }
}
