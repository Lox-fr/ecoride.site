<?php

declare(strict_types=1);

namespace App\Controller\User;

use App\Entity\User;
use App\Form\User\RegistrationFormType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormError;
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
        Security $security,
        UserRepository $userRepository,
    ): Response|RedirectResponse {
        // If the user is already logged in, redirect them to the profile page
        if ($this->getUser()) {
            return $this->redirectToRoute('app_profile');
        }
        $user = new User();
        $registrationForm = $this->createForm(RegistrationFormType::class, $user);
        $registrationForm->handleRequest($request);

        if ($registrationForm->isSubmitted() && $registrationForm->isValid()) {
            $userEmail = (string) $registrationForm->get('email')->getData();
            $plainPassword = (string) $registrationForm->get('plainPassword')->getData();
            $confirmPassword = (string) $registrationForm->get('confirmPassword')->getData();
            $hashedPassword = $userPasswordHasher->hashPassword($user, $plainPassword);

            if ($plainPassword === $confirmPassword) {

                /* REGISTRATION */
                try {
                    $user
                        ->setEmail($userEmail)
                        ->setPseudo($registrationForm->get('pseudo')->getData())
                        ->setPassword($hashedPassword);
                    /* Insert user data into 'user' table using a prepared SQL query */
                    $userRepository->register($user);
                    /* Flash success message after successful registration */
                    $this->addFlash('success',
                        'Bienvenue dans la communauté EcoRide.<br/>
                        N\'hésitez pas à compléter votre profil.<br/>
                        Et profitez de vos 20 crédits offerts !');
                } catch (\Exception) {
                    $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');

                    return $this->redirectToRoute('app_register');
                }

                /* AUTOMATICALLY LOG IN */
                try {
                    /* Fetch user id from email */
                    $userId = $userRepository->findUserIdByEmail($userEmail);
                    if (false === $userId || null === $userId) {
                        throw new \Exception('No user found with this email address.');
                    }
                    /* Hydrate the user object */
                    $user
                        ->setId((int) $userId)
                        ->setEmail((string) $userEmail)
                        ->setPassword((string) $hashedPassword);
                    /* Log the user in using Symfony's authentication system */
                    try {
                        $security->login($user);
                    } catch (\Exception) {
                        throw new \Exception('Error during authentication after registration.');
                    }
                } catch (\Exception) {
                    $this->addFlash('error',
                        'Une erreur est survenue lors de la connexion après inscription. Veuillez réessayer.');

                    return $this->redirectToRoute('app_login');
                }

                return $this->redirectToRoute('app_home');
            }

            // Add error to plainPassword and confirmPassword fields when passwords typed are differents
            $registrationForm->get('plainPassword')->addError(new FormError('Les mots de passe doivent correspondre.'));
            $registrationForm->get('confirmPassword')->addError(new FormError('Les mots de passe doivent correspondre.'));
        }

        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
            'registrationForm' => $registrationForm,
        ]);
    }
}
