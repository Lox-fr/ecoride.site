<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Service\Admin\CarpoolChartService;
use App\Service\Admin\CarpoolStatsService;
use App\Service\Admin\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin')]
final class DashboardController extends AbstractController
{
    public function __construct(
        private CarpoolStatsService $carpoolStatsService,
        private CarpoolChartService $carpoolChartService,
        private UserRepository $userRepository,
        private UserManager $userManager,
    ) {
    }

    #[Route('/tableau-de-bord', name: 'app_admin_dashboard')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminDashboardController',
            'totalCreditsEarned' => $this->carpoolStatsService->getTotalCreditsEarned(),
            'ActivityChart' => $this->carpoolChartService->createCarpoolChart(),
            'listOfEmployees' => $this->userRepository->findAllActiveEmployees(),
            'listOfSuspendedUsers' => $this->userRepository->findAllSuspendedUsers(),
        ]);
    }

    #[Route('/ajouter-employe', name: 'admin_create_employee')]
    public function createEmployee(Request $request): RedirectResponse
    {
        $email = $request->request->get('email') ?? '';
        $firstName = $request->request->get('firstName') ?? '';
        $lastName = $request->request->get('lastName') ?? '';

        if (!$email) {
            $this->addFlash('error', 'Veuillez entrer l\'adresse email de votre nouveau/nouvelle collègue.');
        } elseif (!$firstName) {
            $this->addFlash('error', 'Veuillez entrer le prénom de votre nouveau/nouvelle collègue.');
        } else {
            $userId = $this->userRepository->findUserIdByEmail($email); // Check existence of the email in the database
            if (false !== $userId && null !== $userId) {
                $this->addFlash('error', 'Cette adresse email est déjà utilisée.');
            } else {
                $this->userManager->createNewEmployee($email, $firstName, $lastName);
                $this->addFlash('success', 'Employé(e) ajouté(e) avec succès.');
            }
        }

        return $this->redirectToRoute('app_admin_dashboard');
    }

    #[Route('/suspendre-utilisateur', name: 'admin_suspend_user')]
    public function suspendUser(Request $request): RedirectResponse
    {
        $email = $request->request->get('email');

        if (!$email) {
            $this->addFlash('error', 'Veuillez entrer l\'adresse email de l\'utilisateur à suspendre.');
        } else {
            $userId = $this->userRepository->findUserIdByEmail($email);

            if (!$userId) {
                $this->addFlash('error', 'Utilisateur non trouvé.');
            } else {
                $this->userManager->suspendUserByTheirId($userId);
                $this->addFlash('success', 'Utilisateur suspendu avec succès.');
            }
        }

        return $this->redirectToRoute('app_admin_dashboard');
    }

    #[Route('/activer-utilisateur/{userId}', name: 'admin_activate_user')]
    public function activateUser(string $userId): RedirectResponse
    {
        if (!$userId) {
            $this->addFlash('error', 'Veuillez sélectionner un utilisateur.');
        } else {
            $userId = (int) $userId;
            $result = $this->userRepository->findUserPseudoAndEmailByUserId($userId);

            if (!$result) {
                $this->addFlash('error', 'L\'utilisateur ciblé n\'existe pas dans la base de données.');
            } else {
                $this->userManager->activateUserByTheirId($userId);
                $this->addFlash('success', 'Compte réactivé avec succès.');
            }
        }

        return $this->redirectToRoute('app_admin_dashboard');
    }
}
