<?php
namespace App\Tests\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ResetPasswordControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $em;
    private UserRepository $userRepository;

    protected function setUp(): void
    {
        $this->client = static::createClient();

        // Ensure we have a clean database
        $container = static::getContainer();

        /** @var EntityManagerInterface $em */
        $em = $container->get('doctrine')->getManager();
        $this->em = $em;

        $this->userRepository = $container->get(UserRepository::class);

        foreach ($this->userRepository->findAll() as $user) {
            $this->em->remove($user);
        }

        $this->em->flush();
    }

    public function testResetPasswordController(): void
    {
        // Create a test user
        $user = (new User())
            ->setEmail('me@example.com')
            ->setPassword('a-test-password-that-will-be-changed-later')
            ->setPseudo('testUser')
        ;
        $this->em->persist($user);
        $this->em->flush();

        // Test Request reset password page
        $this->client->request('GET', '/reinitialisation-mot-de-passe');

        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Réinitialiser votre mot de passe');

        // Submit the reset password form and test email message is queued / sent
        $this->client->submitForm('Envoyer un email de Réinitialisation', [
            'reset_password_request_form[email]' => 'me@example.com',
        ]);

        // Ensure the reset password email was sent
        // Use either assertQueuedEmailCount() || assertEmailCount() depending on your mailer setup
        self::assertQueuedEmailCount(1);
        // self::assertEmailCount(1);

        self::assertCount(1, $messages = $this->getMailerMessages());

        self::assertEmailAddressContains($messages[0], 'from', 'mailer@ecoride.site');
        self::assertEmailAddressContains($messages[0], 'to', 'me@example.com');
        self::assertEmailTextBodyContains($messages[0], 'Ce lien expire dans');

        self::assertResponseRedirects('/reinitialisation-mot-de-passe/verification-email');

        // Test check email landing page shows correct "expires at" time
        $crawler = $this->client->followRedirect();

        self::assertPageTitleContains('Email de réinitialisation envoyé');
        self::assertStringContainsString('Ce lien expire dans', $crawler->html());

        // Test the link sent in the email is valid
        $email = $messages[0]->toString();
        preg_match('#(/reinitialisation-mot-de-passe/validation/[a-zA-Z0-9]+)#', $email, $resetLink);

        $this->client->request('GET', $resetLink[1]);

        self::assertResponseRedirects('/reinitialisation-mot-de-passe/validation');

        $this->client->followRedirect();

        // Test we can set a new password
        // $this->client->submitForm('Suivez ce lien', [
        //     'change_password_form[plainPassword][first]' => 'newStrongPassword@123!',
        //     'change_password_form[plainPassword][second]' => 'newStrongPassword@123!',
        // ]);

        // self::assertResponseRedirects('/');

        $user = $this->userRepository->findOneBy(['email' => 'me@example.com']);

        self::assertInstanceOf(User::class, $user);

        /** @var UserPasswordHasherInterface $passwordHasher */
        // $passwordHasher = static::getContainer()->get(UserPasswordHasherInterface::class);
        // self::assertTrue($passwordHasher->isPasswordValid($user, 'newStrongPassword@123!'));
    }
}
