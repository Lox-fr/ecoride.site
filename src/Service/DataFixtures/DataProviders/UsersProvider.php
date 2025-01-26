<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Faker\Factory;

class UsersProvider
{
    private \Faker\Generator $fakerFactory;

    private const DRIVERS_PSEUDOS = [
        'Bruno', 'Emma', 'Louis', 'Sophie', 'Léo', 'Alice', 'Adam', 'Jade', 'Raphaël', 'Camille', 'Noah', 'Marie', 'Pierre', 'Juliette', 'Victor', 'Fabien', 'Clara', 'Nathan', 'Lina', 'Thomas', 'Sara', 'Alexandre', 'Florence', 'Lucas', 'Mélissa', 'Antoine', 'Louise', 'Marius', 'Nina', 'Gabriel', 'Chloé', 'Damien', 'Manon', 'Yanis', 'Élise', 'Julien', 'Isabelle', 'Mathieu', 'Claire', 'Sébastien', 'Zoé', 'Olivier', 'Amélie', 'Emmanuel', 'Anaïs', 'Guillaume', 'Jeanne', 'Arnaud', 'Elodie', 'Etienne', 'Laure', 'Pauline',
    ];

    private const DRIVERS_NAMES = [
        'Dupuis', 'Faure', 'Fournier', 'Moreau', 'Leclerc', 'Durand', 'Lemoine', 'Simon', 'Gauthier', 'Roux', 'Baron', 'Lebrun', 'Petit', 'Marques', 'Morel', 'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Leroy', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Girard', 'André', 'Mercier', 'Dupont', 'Lambert', 'Bonnet', 'François', 'Martinez', 'Legrand', 'Garnier', 'Rousseau', 'Blanc', 'Guérin', 'Müller', 'Henry', 'Roussel', 'Nicolas', 'Perrin', 'Morin', 'Cottin', 'Masson', 'Marchand', 'Dufour', 'Chevalier', 'Clément',
    ];

    private const DRIVERS_PHOTO_FILE_NAMES = [
        '001-678c13e0737ca', '002-678c14fc2449c', '003-678c1409796ff', '004-678c13dc03e8a', '005-678c14e51f53a', '006-678c139465a40', '007-678c1398466d3', '008-678c139c62927', '009-678c139fd7756', '010-678c13a4310ea', '011-678c13a81461b', '012-678c13ac403b4', '013-678c13b024d89', '014-678c13b4625bf', '015-678c13b8bb232', '016-678c13beb787c', '017-678c138452138', '018-678c13904c0bd', '019-678c138084a72', '020-678c13e481a7a', '021-678c13e80b604', '022-678c13eb7c059', '023-678c13ef667b6', '024-678c13f40e3e6', '025-678c13f84ae4c', '026-678c13fc011bc', '027-678c14050e827', '028-678c1387bd09d', '029-678c140e0847e', '030-678c1412aed0e', '031-678c14173e540', '032-678c1481c3340', '033-678c148789d63', '034-678c148d2fc5e', '035-678c14912fd3c', '036-678c14975f8a4', '037-678c149c0bcc5', '038-678c14a165a7d', '039-678c14a64e8fe', '040-678c14aacdfca', '041-678c14b105706', '042-678c14b547b96', '043-678c14ba1c3dd', '044-678c14bf73507', '045-678c14c5014e4', '046-678c14ca053c8', '047-678c14ce3ad60', '048-678c14d3d9016', '049-678c14de0fcf3', '050-678c138be3244', '051-678c14ec32ee7', '052-678c14ef89c51',
    ];

    private const PASSENGERS_PSEUDOS = [
        'Adrien', 'Agnès', 'Alban', 'Alexia', 'Aline', 'Axel', 'Amandine', 'Ambre', 'Anatole', 'Andréa', 'Angèle', 'Anissa', 'Anouk', 'Armand', 'Aude', 'Augustin', 'Aurélie', 'Aurore', 'Axel', 'Baptiste', 'Basile', 'Béatrice', 'Benoît', 'Bérénice', 'Bertille', 'Blandine', 'Boris', 'Brigitte', 'Catherine', 'Cécile', 'Céline', 'Célia', 'Charlie', 'Christelle', 'Christian', 'Christine', 'Clairette', 'Clarisse', 'Clémence', 'Coline', 'Coralie', 'Corentin', 'Cyril', 'Cyrille', 'Delphine', 'Denis', 'Didier', 'Dominique', 'Edgar', 'Élodie', 'Émeric', 'Émile', 'Émilie', 'Éric', 'Estelle', 'Esther', 'Eugénie', 'Eulalie', 'Eve', 'Fanny', 'Félicien', 'Félicité', 'Félix', 'Fernand', 'Flavie', 'Frédéric', 'Gaël', 'Gaétan', 'Geneviève', 'Geoffrey', 'Georges', 'Gérard', 'Ghislaine', 'Gilles', 'Gisèle', 'Grégoire', 'Guénaël', 'Gustave', 'Gwenaëlle', 'Hélène', 'Henri', 'Hervé', 'Hugo', 'Igor', 'Inès', 'Irène', 'Jacques', 'Jacqueline', 'Jérémie', 'Jérôme', 'Jessica', 'Joachim', 'Joëlle', 'Johan', 'Joséphine', 'Josiane', 'Jules', 'Justine', 'Karim', 'Karine', 'Kevin', 'Laetitia', 'Laurence', 'Laurent', 'Léa', 'Léon', 'Léonie', 'Lionel', 'Lison', 'Loïc', 'Lorraine', 'Luc', 'Lucie', 'Madeleine', 'Magali', 'Maëlle', 'Marc', 'Marcel', 'Margaux', 'Margot', 'Marguerite', 'Marianne', 'Marielle', 'Marine', 'Martine', 'Matilde', 'Maurice', 'Maëva', 'Maxime', 'Mégane', 'Mélanie', 'Michel', 'Mireille', 'Monique', 'Morgan', 'Morgane', 'Muriel', 'Nadège', 'Nadine', 'Nathalie', 'Nicolas', 'Noémie', 'Norbert', 'Océane', 'Odile', 'Olivianne', 'Orianne', 'Oscar', 'Patrice', 'Patricia', 'Patrick', 'Paule', 'Paul-Henri', 'Pénélope', 'Philippe', 'Raymond', 'Régine', 'Régis', 'René', 'Robert', 'Roland', 'Romain', 'Sabine', 'Samuel', 'Sandrine', 'Serge', 'Séverine', 'Sidonie', 'Solène', 'Solange', 'Sonia', 'Stanislas', 'Stéphane', 'Sylvain', 'Sylvie', 'Thérèse', 'Thierry', 'Tristan', 'Valentin', 'Valérie', 'Vanessa', 'Véronique', 'Victoire', 'Vincent', 'Violette', 'Viviane', 'William', 'Yann', 'Yannick', 'Yaëlle', 'Yvonne', 'Zacharie', 'Zoéline', 'Églantine', 'Éloïse', 'Émilien', 'Énora', 'Évangéline',
    ];

    private const PASSENGERS_PHOTO_FILE_NAMES = [
        '053-678c13e0737ca', '054-678c14fc2449c', '055-678c1409796ff', '056-678c13dc03e8a', '057-678c14e51f53a', '058-678c139465a40', '059-678c1398466d3', '060-678c139c62927', '061-678c139fd7756', '062-678c13a4310ea', '063-678c13a81461b', '064-678c13ac403b4', '065-678c13b024d89', '066-678c13b4625bf', '067-678c13b8bb232', '068-678c13beb787c', '069-678c138452138', '070-678c13904c0bd', '071-678c138084a72', '072-678c13e481a7a', '073-678c13e80b604', '074-678c13eb7c059', '075-678c13ef667b6', '076-678c13f40e3e6', '077-678c13f84ae4c', '078-678c13fc011bc', '079-678c14050e827', '080-678c1387bd09d', '081-678c140e0847e', '082-678c1412aed0e', '083-678c14173e540', '084-678c1481c3340', '085-678c148789d63', '086-678c148d2fc5e', '087-678c14912fd3c', '088-678c14975f8a4', '089-678c149c0bcc5', '090-678c14a165a7d', '091-678c14a64e8fe', '092-678c14aacdfca', '093-678c14b105706', '094-678c14b547b96', '095-678c14ba1c3dd', '096-678c14bf73507', '097-678c14c5014e4', '098-678c14ca053c8', '099-678c14ce3ad60', '100-678c14d3d9016', '101-678c14de0fcf3', '102-678c138be3244', '103-678c14ec32ee7', '104-678c14ef89c51', '105-678c13e0737ca', '106-678c14fc2449c', '107-678c1409796ff', '108-678c13dc03e8a', '109-678c14e51f53a', '110-678c139465a40', '111-678c1398466d3', '112-678c139c62927', '113-678c139fd7756', '114-678c13a4310ea', '115-678c13a81461b', '116-678c13ac403b4', '117-678c13b024d89', '118-678c13b4625bf', '119-678c13b8bb232', '120-678c13beb787c', '121-678c138452138', '122-678c13904c0bd', '123-678c138084a72', '124-678c13e481a7a', '125-678c13e80b604', '126-678c13eb7c059', '127-678c13ef667b6', '128-678c13f40e3e6', '129-678c13f84ae4c', '130-678c13fc011bc', '131-678c14050e827', '132-678c1387bd09d', '133-678c140e0847e', '134-678c1412aed0e', '135-678c14173e540', '136-678c1481c3340', '137-678c148789d63', '138-678c148d2fc5e', '139-678c14912fd3c', '140-678c14975f8a4', '141-678c149c0bcc5', '142-678c14a165a7d', '143-678c14a64e8fe', '144-678c14aacdfca', '145-678c14b105706', '146-678c14b547b96', '147-678c14ba1c3dd', '148-678c14bf73507', '149-678c14c5014e4', '150-678c14ca053c8', '151-678c14ce3ad60', '152-678c14d3d9016', '153-678c14de0fcf3', '154-678c138be3244', '155-678c14ec32ee7', '156-678c14ef89c51', '157-678c13e0737ca', '158-678c14fc2449c', '159-678c1409796ff', '160-678c13dc03e8a', '161-678c14e51f53a', '162-678c139465a40', '163-678c1398466d3', '164-678c139c62927', '165-678c139fd7756', '166-678c13a4310ea', '167-678c13a81461b', '168-678c13ac403b4', '169-678c13b024d89', '170-678c13b4625bf', '171-678c13b8bb232', '172-678c13beb787c', '173-678c138452138', '174-678c13904c0bd', '175-678c138084a72', '176-678c13e481a7a', '177-678c13e80b604', '178-678c13eb7c059', '179-678c13ef667b6', '180-678c13f40e3e6', '181-678c13f84ae4c', '182-678c13fc011bc', '183-678c14050e827', '184-678c1387bd09d', '185-678c140e0847e', '186-678c1412aed0e', '187-678c14173e540', '188-678c1481c3340', '189-678c148789d63', '190-678c148d2fc5e', '191-678c14912fd3c', '192-678c14975f8a4', '193-678c149c0bcc5', '194-678c14a165a7d', '195-678c14a64e8fe', '196-678c14aacdfca', '197-678c14b105706', '198-678c14b547b96', '199-678c14ba1c3dd', '200-678c14bf73507', '201-678c14c5014e4', '202-678c14ca053c8', '203-678c14ce3ad60', '204-678c14d3d9016', '205-678c14de0fcf3', '206-678c138be3244', '207-678c14ec32ee7', '208-678c14ef89c51', '209-678c14e51f53a', '210-678c139465a40', '211-678c1398466d3', '212-678c139c62927', '213-678c139fd7756', '214-678c13a4310ea', '215-678c13a81461b', '216-678c13ac403b4', '217-678c13b024d89', '218-678c13b4625bf', '219-678c13b8bb232', '220-678c13beb787c', '221-678c138452138', '222-678c13904c0bd', '223-678c138084a72', '224-678c13e481a7a', '225-678c13e80b604', '226-678c13eb7c059', '227-678c13ef667b6', '228-678c13f40e3e6', '229-678c13f84ae4c', '230-678c13fc011bc', '231-678c14050e827', '232-678c1387bd09d', '233-678c140e0847e', '234-678c1412aed0e', '235-678c14173e540', '236-678c1481c3340', '237-678c148789d63', '238-678c148d2fc5e', '239-678c14912fd3c', '240-678c14975f8a4', '241-678c149c0bcc5', '242-678c14a165a7d', '243-678c14a64e8fe', '244-678c14aacdfca', '245-678c14b105706', '246-678c14b547b96', '247-678c14ba1c3dd', '248-678c14bf73507', '249-678c14c5014e4', '250-678c14ca053c8', '251-678c14ce3ad60', '252-678c14d3d9016',
    ];

    public function __construct(
    ) {
        $this->fakerFactory = Factory::create('fr_FR');
    }

    /**
     * Driver data used in SQL fixtures, returned as a collection of User instances.
     *
     * For each driver, the following data is provided: pseudo, email, password, createdAt, active status,
     * first name, last name, address, phone number, photo file name, date of birth, pets allowed, smokers allowed,
     * sum of ratings, number of ratings, and credits.
     *
     * Currently return 52 drivers.
     *
     * @return ArrayCollection<int, User>
     */
    public function getCollectionOfDrivers(): ArrayCollection
    {
        $driversCollection = new ArrayCollection();
        for ($i = 0; $i < \count(self::DRIVERS_PSEUDOS); ++$i) {
            $numberOfRatings = $this->fakerFactory->numberBetween(3, 300);
            $sumOfRatings = (int) ($numberOfRatings * $this->fakerFactory->randomFloat(1, 2, 5));

            $newDriver = new User();
            $newDriver->setPseudo(self::DRIVERS_PSEUDOS[$i])
                ->setEmail('driver'.$i.'@ecoride.site')
                ->setPassword($this->fakerFactory->password())
                ->setCreatedAt(new \DateTimeImmutable())
                ->setActive(true)
                ->setFirstName(self::DRIVERS_PSEUDOS[$i])
                ->setLastName(self::DRIVERS_NAMES[$i])
                ->setAddress($this->fakerFactory->address())
                ->setPhoneNumber($this->fakerFactory->regexify('0[67][0-9]{8}'))
                ->setPhotoFilename(self::DRIVERS_PHOTO_FILE_NAMES[$i].'.jpg')
                ->setDateOfBirth(\DateTimeImmutable::createFromFormat(
                    'Y-m-d', $this->fakerFactory->dateTimeBetween('-80 years', '-18 years')->format('Y-m-d')))
                ->setPetsAllowed($this->fakerFactory->boolean())
                ->setSmokersAllowed($this->fakerFactory->boolean())
                ->setDriverRoleChosen(true)
                ->setSumOfRatings($sumOfRatings)
                ->setNumberOfRatings($numberOfRatings)
                ->setCredits($this->fakerFactory->numberBetween(50, 190));

            $driversCollection->add($newDriver);
        }

        return $driversCollection;
    }

    /**
     * Passenger data used in SQL fixtures, returned as a collection of 200 User instances.
     *
     * For each passenger, the following data is provided:
     * pseudo, email, password, createdAt, active status, and photo file name.
     *
     * Currently return 198 passengers.
     *
     * @return ArrayCollection<int, User>
     */
    public function getCollectionOfPassengers(): ArrayCollection
    {
        $passengersCollection = new ArrayCollection();
        for ($i = 0; $i < 198; ++$i) {
            $newPassenger = new User();
            $newPassenger->setPseudo(self::PASSENGERS_PSEUDOS[$i])
                ->setEmail('passenger'.$i.'@ecoride.site')
                ->setPassword($this->fakerFactory->password())
                ->setCreatedAt(new \DateTimeImmutable())
                ->setActive(true)
                ->setPhotoFilename(self::PASSENGERS_PHOTO_FILE_NAMES[$i].'.jpg')
                ->setCredits($this->fakerFactory->numberBetween(0, 50));

            $passengersCollection->add($newPassenger);
        }

        return $passengersCollection;
    }
}
