<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Service\SqlBasePathLoader;
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
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
        Security $security,
        SqlBasePathLoader $sqlFileLoader,
    ): Response|RedirectResponse {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var string $plainPassword */
            $plainPassword = $form->get('plainPassword')->getData();
            // Hash the plain password
            $hashedPassword = $userPasswordHasher->hashPassword($user, $plainPassword);
            $userEmail = $form->get('email')->getData();

            try {
                /* Connecting to the database */
                $connection = $entityManager->getConnection();

                /* Insert into user table */
                $sql = $sqlFileLoader->getSqlFromFile('create/userRegistration', [
                    'email' => $userEmail,
                    'pseudo' => $form->get('pseudo')->getData(),
                    'password' => $hashedPassword,
                    'created_at' => $user->getCreatedAt()->format('Y-m-d H:i:s'),
                    'active' => (int) $user->isActive(),
                    'credits' => (int) $user->getCredits(),
                ]);
                $connection->executeStatement($sql); // Execute the SQL script

                $this->addFlash('success',
                    'Bienvenue dans la communauté EcoRide.<br/>
                    N\'hésitez pas à compléter votre profil.<br/>
                    Et profitez de vos 20 crédits offerts !');
            } catch (\Exception $e) {
                // $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription : '.$e->getMessage());
                $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');

                return $this->redirectToRoute('app_register');
            }

            try {
                /* Fetch user id from email */
                $sql = $sqlFileLoader->getSqlFromFile('read/userIdByEmail', [
                    'email' => $userEmail, ]);
                $userId = $connection->fetchOne($sql); // Execute the SQL script
                if (!$userId) {
                    throw new \Exception('Aucun utilisateur trouvé avec cette adresse e-mail.');
                }

                /* hydrate the user object */
                $user
                    ->setId((int) $userId)
                    ->setEmail((string) $userEmail)
                    ->setPassword((string) $hashedPassword);

                /* Log the user in using Symfony's authentication system */
                try {
                    $security->login($user);
                } catch (\Exception $e) {
                    throw new \Exception('Erreur lors de l\'authentification après inscription.');
                }
            } catch (\Exception $e) {
                // $this->addFlash('error', 'Impossible de vous connecter après l\'inscription: '.$e->getMessage());
                $this->addFlash('error',
                    'Une erreur est survenue lors de la connexion après inscription. Veuillez réessayer.');

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
