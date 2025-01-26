<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

use App\Entity\Brand;
use Doctrine\Common\Collections\ArrayCollection;

class BrandsAndModelsProvider
{
    private const APP_CAR_BRANDS_MODELS = [
        'Audi' => ['A3', 'A4', 'Q5', 'e-tron'],
        'BMW' => ['Serie 3', 'X5', 'i4', 'Z4'],
        'Citroën' => ['C3', 'C4', 'C5 Aircross', 'Ami'],
        'Dacia' => ['Sandero', 'Duster', 'Jogger', 'Spring'],
        'DS Automobiles' => ['DS 3', 'DS 4', 'DS 7', 'DS 9'],
        'Fiat' => ['500', 'Panda', 'Tipo', '500X'],
        'Ford' => ['Focus', 'Fiesta', 'Kuga', 'Mustang'],
        'Honda' => ['Civic', 'CR-V', 'HR-V', 'Jazz'],
        'Hyundai' => ['i20', 'i30', 'Tucson', 'Kona'],
        'Jaguar' => ['XE', 'XF', 'F-PACE', 'I-PACE'],
        'Jeep' => ['Renegade', 'Compass', 'Wrangler', 'Grand Cherokee'],
        'Kia' => ['Rio', 'Ceed', 'Sportage', 'EV6'],
        'Lexus' => ['UX', 'NX', 'RX', 'LS'],
        'Mazda' => ['Mazda2', 'Mazda3', 'CX-5', 'MX-5'],
        'Mercedes-Benz' => ['Classe A', 'Classe C', 'GLC', 'EQC'],
        'MG' => ['ZS', 'HS', 'MG4', 'MG5'],
        'Mini' => ['Cooper', 'Countryman', 'Clubman', 'Paceman'],
        'Nissan' => ['Micra', 'Qashqai', 'Juke', 'Leaf'],
        'Opel' => ['Corsa', 'Astra', 'Mokka', 'Grandland'],
        'Peugeot' => ['208', '308', '3008', '5008'],
        'Porsche' => ['911', 'Cayenne', 'Panamera', 'Taycan'],
        'Renault' => ['Clio', 'Captur', 'Mégane', 'Austral'],
        'Seat' => ['Ibiza', 'Leon', 'Arona', 'Ateca'],
        'Skoda' => ['Fabia', 'Octavia', 'Superb', 'Kodiaq'],
        'Subaru' => ['Impreza', 'Forester', 'XV', 'Outback'],
        'Suzuki' => ['Swift', 'Vitara', 'Ignis', 'S-Cross'],
        'Tesla' => ['Model 3', 'Model S', 'Model X', 'Model Y'],
        'Toyota' => ['Yaris', 'Corolla', 'RAV4', 'C-HR'],
        'Volkswagen' => ['Polo', 'Golf', 'Tiguan', 'ID.4'],
        'Volvo' => ['XC40', 'XC60', 'XC90', 'S60'],
    ];

    /**
     * Returns a collection of all predefined brands.
     *
     * @return ArrayCollection<int, Brand>
     */
    public function getCollectionOfBrands(): ArrayCollection
    {
        $brandColl = new ArrayCollection();
        foreach (self::APP_CAR_BRANDS_MODELS as $brandName => $models) {
            $newBrand = new Brand();
            $newBrand->setLabel($brandName);

            $brandColl->add($newBrand);
        }

        return $brandColl;
    }

    /**
     * Get a list of all car model from a given brand.
     *
     * @param string $brandName the name of the car brand
     *
     * @return array<int, string> a list of model names from the given brand
     */
    public function getArrayOfModelNames(string $brandName): array
    {
        if (!isset(self::APP_CAR_BRANDS_MODELS[$brandName])) {
            return ['Non renseigné'];
        }
        $modelList = self::APP_CAR_BRANDS_MODELS[$brandName];

        return $modelList;
    }
}
