<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, Security $security): Response|RedirectResponse
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var string $plainPassword */
            $plainPassword = $form->get('plainPassword')->getData();
            // Hash the plain password
            $hashedPassword = $userPasswordHasher->hashPassword($user, $plainPassword);

            try {
                /* Connecting to the database */
                $connection = $entityManager->getConnection();

                /* Insert into user table */
                $sql = file_get_contents(__DIR__.'/../sql/create/userRegistration.sql'); // Load SQL from file
                $params = [ // The data to inject into the SQL script
                    'email' => $form->get('email')->getData(),
                    'pseudo' => $form->get('pseudo')->getData(),
                    'password' => $hashedPassword,
                    'created_at' => $user->getCreatedAt()->format('Y-m-d H:i:s'),
                    'active' => (int) $user->isActive(),
                    'credits' => (int) $user->getCredits(), ];
                foreach ($params as $key => $value) { // Replace placeholders in SQL script
                    $sql = str_replace(":$key", $connection->quote($value), $sql);
                }
                $connection->executeStatement($sql); // Execute the SQL script

                $this->addFlash('success',
                    'Bienvenue dans la communauté EcoRide.<br/>
                    N\'hésitez pas à compléter votre profil.<br/>
                    Et profitez de vos 20 crédits offerts !');
            } catch (\Exception $e) {
                $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
                // $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription : '.$e->getMessage());

                return $this->redirectToRoute('app_register');
            }

            try {
                /* Fetch user id from email */
                $sql = file_get_contents(__DIR__.'/../sql/read/userIdByEmail.sql'); // Load SQL from file
                $params = ['email' => $form->get('email')->getData()]; // The data to inject into the SQL script
                foreach ($params as $key => $value) { // Replace placeholders in SQL script
                    $sql = str_replace(":$key", $connection->quote($value), $sql);
                }
                $result = $connection->fetchOne($sql);
                if (!$result) {
                    throw new \Exception('Aucun utilisateur trouvé avec cet e-mail.');
                }
                $user->setId((int) $result);

                /* Log the user in using Symfony Security service */
                $authenticatedUser = $entityManager->find(User::class, $user->getId());
                if ($authenticatedUser) {
                    $security->login($authenticatedUser); // Log in the user via Symfony's authentication system
                }
            } catch (\Exception $e) {
                $this->addFlash('error',
                    'Une erreur est survenue lors de la connexion après inscription. Veuillez réessayer.');
                // $this->addFlash('error', 'Impossible de vous connecter après l\'inscription: '.$e->getMessage());

                return $this->redirectToRoute('app_login');
            }

            return $this->redirectToRoute('app_home');
        }

        return $this->render('registration/register.html.twig', [
            'controller_name' => 'RegistrationController',
            'registrationForm' => $form,
        ]);
    }
}
