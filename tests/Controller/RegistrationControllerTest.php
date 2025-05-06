<?php
namespace App\Tests\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegistrationControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private UserRepository $userRepository;

    protected function setUp(): void
    {
        $this->client = static::createClient();

        // Ensure we have a clean database
        $container = static::getContainer();

        /** @var EntityManager $em */
        $em = $container->get('doctrine')->getManager();
        $this->userRepository = $container->get(UserRepository::class);

        foreach ($this->userRepository->findAll() as $user) {
            $em->remove($user);
        }

        $em->flush();
    }

    public function testRegister(): void
    {
        // Register a new user
        $crawler = $this->client->request('GET', '/inscription');

        $form = $crawler->selectButton('Valider')->form();
        $csrfToken = $form->get('registration_form[_token]')->getValue();



        self::assertResponseIsSuccessful();
        self::assertPageTitleContains('Inscription');

        $this->client->submitForm('Valider', [
            'registration_form[email]' => 'me@example.com',
            'registration_form[pseudo]' => 'testUser',
            'registration_form[plainPassword]' => 'pAssw0rd9@!',
            'registration_form[confirmPassword]' => 'pAssw0rd9@!',
            'registration_form[agreeTerms]' => true,
            'registration_form[_token]' => $csrfToken,
        ]);

        // Ensure the response redirects after submitting the form, the user exists, and is not verified
        self::assertResponseRedirects('/');
        self::assertCount(1, $this->userRepository->findAll());
    }
}
