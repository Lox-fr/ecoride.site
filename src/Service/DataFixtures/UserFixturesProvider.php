<?php

declare(strict_types=1);

namespace App\Service\DataFixtures;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Faker\Factory;

class UserFixturesProvider
{
    private const DRIVERS_PSEUDOS = [
        'Bruno', 'Emma', 'Louis', 'Sophie', 'Léo', 'Alice', 'Adam', 'Jade', 'Raphaël', 'Camille', 'Noah', 'Marie', 'Pierre', 'Juliette', 'Victor', 'Fabien', 'Clara', 'Nathan', 'Lina', 'Thomas', 'Sara', 'Alexandre', 'Florence', 'Lucas', 'Mélissa', 'Antoine', 'Louise', 'Marius', 'Nina', 'Gabriel', 'Chloé', 'Damien', 'Manon', 'Yanis', 'Élise', 'Julien', 'Isabelle', 'Mathieu', 'Claire', 'Sébastien', 'Zoé', 'Olivier', 'Amélie', 'Emmanuel', 'Anaïs', 'Guillaume', 'Jeanne', 'Arnaud', 'Elodie', 'Etienne', 'Laure', 'Pauline',
    ];

    private const DRIVERS_NAMES = [
        'Dupuis', 'Faure', 'Fournier', 'Moreau', 'Leclerc', 'Durand', 'Lemoine', 'Simon', 'Gauthier', 'Roux', 'Baron', 'Lebrun', 'Petit', 'Marques', 'Morel', 'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Leroy', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Girard', 'André', 'Mercier', 'Dupont', 'Lambert', 'Bonnet', 'François', 'Martinez', 'Legrand', 'Garnier', 'Rousseau', 'Blanc', 'Guérin', 'Müller', 'Henry', 'Roussel', 'Nicolas', 'Perrin', 'Morin', 'Cottin', 'Masson', 'Marchand', 'Dufour', 'Chevalier', 'Clément',
    ];

    private const DRIVERS_PHOTO_FILE_NAMES = [
        '01-678c13e0737ca', '02-678c14fc2449c', '03-678c1409796ff', '04-678c13dc03e8a', '05-678c14e51f53a', '06-678c139465a40', '07-678c1398466d3', '08-678c139c62927', '09-678c139fd7756', '10-678c13a4310ea', '11-678c13a81461b', '12-678c13ac403b4', '13-678c13b024d89', '14-678c13b4625bf', '15-678c13b8bb232', '16-678c13beb787c', '17-678c138452138', '18-678c13904c0bd', '19-678c138084a72', '20-678c13e481a7a', '21-678c13e80b604', '22-678c13eb7c059', '23-678c13ef667b6', '24-678c13f40e3e6', '25-678c13f84ae4c', '26-678c13fc011bc', '27-678c14050e827', '28-678c1387bd09d', '29-678c140e0847e', '30-678c1412aed0e', '31-678c14173e540', '32-678c1481c3340', '33-678c148789d63', '34-678c148d2fc5e', '35-678c14912fd3c', '36-678c14975f8a4', '37-678c149c0bcc5', '38-678c14a165a7d', '39-678c14a64e8fe', '40-678c14aacdfca', '41-678c14b105706', '42-678c14b547b96', '43-678c14ba1c3dd', '44-678c14bf73507', '45-678c14c5014e4', '46-678c14ca053c8', '47-678c14ce3ad60', '48-678c14d3d9016', '49-678c14de0fcf3', '50-678c138be3244', '51-678c14ec32ee7', '52-678c14ef89c51',
    ];

    private const PASSENGERS_PSEUDOS = [
        'Adrien', 'Agnès', 'Alban', 'Alexia', 'Aline', 'Axel', 'Amandine', 'Ambre', 'Anatole', 'Andréa', 'Angèle', 'Anissa', 'Anouk', 'Armand', 'Aude', 'Augustin', 'Aurélie', 'Aurore', 'Axel', 'Baptiste', 'Basile', 'Béatrice', 'Benoît', 'Bérénice', 'Bertille', 'Blandine', 'Boris', 'Brigitte', 'Catherine', 'Cécile', 'Céline', 'Célia', 'Charlie', 'Christelle', 'Christian', 'Christine', 'Clairette', 'Clarisse', 'Clémence', 'Coline', 'Coralie', 'Corentin', 'Cyril', 'Cyrille', 'Delphine', 'Denis', 'Didier', 'Dominique', 'Edgar', 'Élodie', 'Émeric', 'Émile', 'Émilie', 'Éric', 'Estelle', 'Esther', 'Eugénie', 'Eulalie', 'Eve', 'Fanny', 'Félicien', 'Félicité', 'Félix', 'Fernand', 'Flavie', 'Frédéric', 'Gaël', 'Gaétan', 'Geneviève', 'Geoffrey', 'Georges', 'Gérard', 'Ghislaine', 'Gilles', 'Gisèle', 'Grégoire', 'Guénaël', 'Gustave', 'Gwenaëlle', 'Hélène', 'Henri', 'Hervé', 'Hugo', 'Igor', 'Inès', 'Irène', 'Jacques', 'Jacqueline', 'Jérémie', 'Jérôme', 'Jessica', 'Joachim', 'Joëlle', 'Johan', 'Joséphine', 'Josiane', 'Jules', 'Justine', 'Karim', 'Karine', 'Kevin', 'Laetitia', 'Laurence', 'Laurent', 'Léa', 'Léon', 'Léonie', 'Lionel', 'Lison', 'Loïc', 'Lorraine', 'Luc', 'Lucie', 'Madeleine', 'Magali', 'Maëlle', 'Marc', 'Marcel', 'Margaux', 'Margot', 'Marguerite', 'Marianne', 'Marielle', 'Marine', 'Martine', 'Matilde', 'Maurice', 'Maëva', 'Maxime', 'Mégane', 'Mélanie', 'Michel', 'Mireille', 'Monique', 'Morgan', 'Morgane', 'Muriel', 'Nadège', 'Nadine', 'Nathalie', 'Nicolas', 'Noémie', 'Norbert', 'Océane', 'Odile', 'Olivianne', 'Orianne', 'Oscar', 'Patrice', 'Patricia', 'Patrick', 'Paule', 'Paul-Henri', 'Pénélope', 'Philippe', 'Raymond', 'Régine', 'Régis', 'René', 'Robert', 'Roland', 'Romain', 'Sabine', 'Samuel', 'Sandrine', 'Serge', 'Séverine', 'Sidonie', 'Solène', 'Solange', 'Sonia', 'Stanislas', 'Stéphane', 'Sylvain', 'Sylvie', 'Thérèse', 'Thierry', 'Tristan', 'Valentin', 'Valérie', 'Vanessa', 'Véronique', 'Victoire', 'Vincent', 'Violette', 'Viviane', 'William', 'Yann', 'Yannick', 'Yaëlle', 'Yvonne', 'Zacharie', 'Zoéline', 'Églantine', 'Éloïse', 'Émilien', 'Énora', 'Évangéline'
    ];

    private const PASSENGERS_PHOTO_FILE_NAMES = [
        '53-678c13e0737ca', '54-678c14fc2449c', '55-678c1409796ff', '56-678c13dc03e8a', '57-678c14e51f53a', '58-678c139465a40', '59-678c1398466d3', '60-678c139c62927', '61-678c139fd7756', '62-678c13a4310ea', '63-678c13a81461b', '64-678c13ac403b4', '65-678c13b024d89', '66-678c13b4625bf', '67-678c13b8bb232', '68-678c13beb787c', '69-678c138452138', '70-678c13904c0bd', '71-678c138084a72', '72-678c13e481a7a', '73-678c13e80b604', '74-678c13eb7c059', '75-678c13ef667b6', '76-678c13f40e3e6', '77-678c13f84ae4c', '78-678c13fc011bc', '79-678c14050e827', '80-678c1387bd09d', '81-678c140e0847e', '82-678c1412aed0e', '83-678c14173e540', '84-678c1481c3340', '85-678c148789d63', '86-678c148d2fc5e', '87-678c14912fd3c', '88-678c14975f8a4', '89-678c149c0bcc5', '90-678c14a165a7d', '91-678c14a64e8fe', '92-678c14aacdfca', '93-678c14b105706', '94-678c14b547b96', '95-678c14ba1c3dd', '96-678c14bf73507', '97-678c14c5014e4', '98-678c14ca053c8', '99-678c14ce3ad60', '100-678c14d3d9016', '101-678c14de0fcf3', '102-678c138be3244', '103-678c14ec32ee7', '104-678c14ef89c51', '105-678c13e0737ca', '106-678c14fc2449c', '107-678c1409796ff', '108-678c13dc03e8a', '109-678c14e51f53a', '110-678c139465a40', '111-678c1398466d3', '112-678c139c62927', '113-678c139fd7756', '114-678c13a4310ea', '115-678c13a81461b', '116-678c13ac403b4', '117-678c13b024d89', '118-678c13b4625bf', '119-678c13b8bb232', '120-678c13beb787c', '121-678c138452138', '122-678c13904c0bd', '123-678c138084a72', '124-678c13e481a7a', '125-678c13e80b604', '126-678c13eb7c059', '127-678c13ef667b6', '128-678c13f40e3e6', '129-678c13f84ae4c', '130-678c13fc011bc', '131-678c14050e827', '132-678c1387bd09d', '133-678c140e0847e', '134-678c1412aed0e', '135-678c14173e540', '136-678c1481c3340', '137-678c148789d63', '138-678c148d2fc5e', '139-678c14912fd3c', '140-678c14975f8a4', '141-678c149c0bcc5', '142-678c14a165a7d', '143-678c14a64e8fe', '144-678c14aacdfca', '145-678c14b105706', '146-678c14b547b96', '147-678c14ba1c3dd', '148-678c14bf73507', '149-678c14c5014e4', '150-678c14ca053c8', '151-678c14ce3ad60', '152-678c14d3d9016', '153-678c14de0fcf3', '154-678c138be3244', '155-678c14ec32ee7', '156-678c14ef89c51', '157-678c13e0737ca', '158-678c14fc2449c', '159-678c1409796ff', '160-678c13dc03e8a', '161-678c14e51f53a', '162-678c139465a40', '163-678c1398466d3', '164-678c139c62927', '165-678c139fd7756', '166-678c13a4310ea', '167-678c13a81461b', '168-678c13ac403b4', '169-678c13b024d89', '170-678c13b4625bf', '171-678c13b8bb232', '172-678c13beb787c', '173-678c138452138', '174-678c13904c0bd', '175-678c138084a72', '176-678c13e481a7a', '177-678c13e80b604', '178-678c13eb7c059', '179-678c13ef667b6', '180-678c13f40e3e6', '181-678c13f84ae4c', '182-678c13fc011bc', '183-678c14050e827', '184-678c1387bd09d', '185-678c140e0847e', '186-678c1412aed0e', '187-678c14173e540', '188-678c1481c3340', '189-678c148789d63', '190-678c148d2fc5e', '191-678c14912fd3c', '192-678c14975f8a4', '193-678c149c0bcc5', '194-678c14a165a7d', '195-678c14a64e8fe', '196-678c14aacdfca', '197-678c14b105706', '198-678c14b547b96', '199-678c14ba1c3dd', '200-678c14bf73507', '201-678c14c5014e4', '202-678c14ca053c8', '203-678c14ce3ad60', '204-678c14d3d9016', '205-678c14de0fcf3', '206-678c138be3244', '207-678c14ec32ee7', '208-678c14ef89c51', '209-678c14e51f53a', '210-678c139465a40', '211-678c1398466d3', '212-678c139c62927', '213-678c139fd7756', '214-678c13a4310ea', '215-678c13a81461b', '216-678c13ac403b4', '217-678c13b024d89', '218-678c13b4625bf', '219-678c13b8bb232', '220-678c13beb787c', '221-678c138452138', '222-678c13904c0bd', '223-678c138084a72', '224-678c13e481a7a', '225-678c13e80b604', '226-678c13eb7c059', '227-678c13ef667b6', '228-678c13f40e3e6', '229-678c13f84ae4c', '230-678c13fc011bc', '231-678c14050e827', '232-678c1387bd09d', '233-678c140e0847e', '234-678c1412aed0e', '235-678c14173e540', '236-678c1481c3340', '237-678c148789d63', '238-678c148d2fc5e', '239-678c14912fd3c', '240-678c14975f8a4', '241-678c149c0bcc5', '242-678c14a165a7d', '243-678c14a64e8fe', '244-678c14aacdfca', '245-678c14b105706', '246-678c14b547b96', '247-678c14ba1c3dd', '248-678c14bf73507', '249-678c14c5014e4', '250-678c14ca053c8', '251-678c14ce3ad60', '252-678c14d3d9016',
    ];

    /**
     * Driver data used in SQL fixtures, returned as a collection of User instances.
     *
     * For each user, the following data is provided: pseudo, email, password, createdAt, active status,
     * first name, last name, address, phone number, photo file name, date of birth, pets allowed, smokers allowed,
     * sum of ratings, number of ratings, and credits.
     *
     * Currently return 52 drivers.
     * 
     * @return ArrayCollection<int, User>
     */
    public function getCollectionOfDrivers(): ArrayCollection
    {
        $faker = Factory::create('fr_FR');

        $userData = new ArrayCollection();
        for ($i = 0; $i < \count(self::DRIVERS_PSEUDOS); ++$i) {
            $numberOfRatings = $faker->numberBetween(3, 300);
            $sumOfRatings = (int) ($numberOfRatings * $faker->randomFloat(1, 2, 5));

            $newUser = new User();
            $newUser->setPseudo(self::DRIVERS_PSEUDOS[$i])
                ->setEmail('driver'.$i.'@ecoride.site')
                ->setPassword($faker->password())
                ->setCreatedAt(new \DateTimeImmutable())
                ->setActive(true)
                ->setFirstName(self::DRIVERS_PSEUDOS[$i])
                ->setLastName(self::DRIVERS_NAMES[$i])
                ->setAddress($faker->address())
                ->setPhoneNumber($faker->regexify('0[67][0-9]{8}'))
                ->setPhotoFilename(self::DRIVERS_PHOTO_FILE_NAMES[$i].'.jpg')
                ->setDateOfBirth(\DateTimeImmutable::createFromFormat(
                    'Y-m-d', $faker->dateTimeBetween('-80 years', '-18 years')->format('Y-m-d')))
                ->setPetsAllowed($faker->boolean())
                ->setSmokersAllowed($faker->boolean())
                ->setDriverRoleChosen(true)
                ->setSumOfRatings($sumOfRatings)
                ->setNumberOfRatings($numberOfRatings)
                ->setCredits($faker->numberBetween(50, 190));

            $userData->add($newUser);
        }

        return $userData;
    }

    /**
     * Passenger data used in SQL fixtures, returned as a collection of 200 User instances.
     *
     * For each user, the following data is provided:
     * pseudo, email, password, createdAt, active status, and photo file name.
     *
     * Currently return 198 passengers.
     * 
     * @return ArrayCollection<int, User>
     */
    public function getCollectionOfPassengers(): ArrayCollection
    {
        $faker = Factory::create('fr_FR');

        $userData = new ArrayCollection();
        for ($i = 0; $i < 198; ++$i) {
            $newUser = new User();
            $newUser->setPseudo(self::PASSENGERS_PSEUDOS[$i])
                ->setEmail('passenger'.$i.'@ecoride.site')
                ->setPassword($faker->password())
                ->setCreatedAt(new \DateTimeImmutable())
                ->setActive(true)
                ->setPhotoFilename(self::PASSENGERS_PHOTO_FILE_NAMES[$i].'.jpg')
                ->setCredits($faker->numberBetween(0, 50));

            $userData->add($newUser);
        }

        return $userData;
    }
}
