<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Document\Carpool;
use MongoDB\BSON\ObjectId;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Functional test that implements a "smoke test" of all the public and secure
 * URLs of the application.
 */
final class DefaultControllerTest extends WebTestCase
{
    /**
     * @dataProvider getPublicUrls
     */
    public function testPublicUrls(string $url): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        $this->assertResponseIsSuccessful(\sprintf('The %s public URL loads correctly.', $url));
    }

    public function testPublicCarpoolView(): void
    {
        $client = static::createClient();

        /** @var \Doctrine\ODM\MongoDB\DocumentManager $documentManager */
        $documentManager = $client->getContainer()->get('doctrine_mongodb')->getManager();

        $carpool = new Carpool();
        $carpool->setId((string) (new ObjectId())); // L'ID du covoiturage
        $carpool->setDriverUserId(1);
        $carpool->setNumberOfAvailableSeats(3);
        $carpool->setPricePerPerson(10);
        $documentManager->persist($carpool);
        $documentManager->flush();

        $client->request('GET', \sprintf('/covoiturage/%s', $carpool->getId()));

        $this->assertResponseIsSuccessful();
    }

    /**
     * The application contains a lot of secure URLs which shouldn't be
     * publicly accessible. This tests ensures that whenever a user tries to
     * access one of those pages, a redirection to the login form is performed.
     *
     * @dataProvider getSecureUrls
     */
    public function testSecureUrls(string $url): void
    {
        $client = static::createClient();
        $client->request('GET', $url);

        $this->assertResponseRedirects(
            'http://localhost/connexion',
            Response::HTTP_FOUND,
            \sprintf('The %s secure URL redirects to the login form.', $url)
        );
    }

    public function getPublicUrls(): \Generator
    {
        yield 'Accueil' => ['/'];
        yield 'Connexion' => ['/connexion'];
        yield 'Inscription' => ['/inscription'];
        yield 'Réinitialisation mot de passe' => ['/reinitialisation-mot-de-passe'];
        yield 'Vérification email avant réinitialisation' => ['/reinitialisation-mot-de-passe/verification-email'];
        yield 'Rechercher un trajet' => ['/rechercher-trajet'];
        // yield 'Voir un covoiturage' => ['/covoiturage/123'];
    }

    public function getSecureUrls(): \Generator
    {
        yield 'Publier un trajet' => ['/publier-trajet'];
        yield 'Profil utilisateur' => ['/profil'];
        yield 'Annuler un covoiturage' => ['/covoiturage/annuler/123'];
        yield 'Annuler une participation' => ['/covoiturage/annuler/participation/123'];
        yield 'Commencer un covoiturage' => ['/covoiturage/commencer/123'];
        yield 'Terminer un covoiturage' => ['/covoiturage/terminer/123'];
        yield 'Valider un covoiturage' => ['/covoiturage/valider/123'];
        yield 'Rejoindre un covoiturage' => ['/covoiturage/rejoindre/123'];
    }
}
