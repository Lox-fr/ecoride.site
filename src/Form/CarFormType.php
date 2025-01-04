<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Car;
use App\Entity\Brand;
use App\Entity\Color;
use App\Entity\EngineType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class CarFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('brand', EntityType::class, [
                'class' => Brand::class,
                'label' => 'Marque*',
                'choice_label' => 'label',
                'placeholder' => 'Veuillez sélectionner',
                'required' => true,
                'help' => 'Quelle est la marque du vehicule ? liste déroulante de choix.',
                'help_attr' => ['class' => 'visually-hidden']
            ])
            ->add('model', TextType::class, [
                'label' => 'Modèle*',
                'required' => true,
                'attr' => ['placeholder' => 'Saisie requise'],
                'help_html' => true,
                'help' => 'Rubrique D2 de votre carte grise, appelée Variante Version du Véhicule (VVV).',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('color', EntityType::class, [
                'class' => Color::class,
                'label' => 'Couleur*',
                'choice_label' => 'label',
                'placeholder' => 'Veuillez sélectionner',
                'required' => true,
                'help' => 'Quelle est la couleur du vehicule ? liste déroulante de choix.',
                'help_attr' => ['class' => 'visually-hidden']
            ])
            ->add('engineType', EntityType::class, [
                'class' => EngineType::class,
                'label' => 'Motorisation*',
                'choice_label' => 'label',
                'placeholder' => 'Veuillez sélectionner',
                'required' => true,
                'help' => 'Quelle est la motorisation du vehicule ? liste déroulante de choix.',
                'help_attr' => ['class' => 'visually-hidden']
            ])
            ->add('licensePlate', TextType::class, [
                'label' => 'Plaque d\'immatriculation*',
                'required' => true,
                'attr' => ['placeholder' => 'AA-999-AA'],
                'help_html' => true,
                'help' => 'La plaque d\'immatriculation de votre véhicule, elle doit contenir entre 7 et 10 caractères -
                    seulement des majuscules, des chiffres, des espaces ou des tirets.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('dateOfFirstRegistration', DateTimeType::class, [
                'label' => 'Date de première immatriculation*',
                'required' => true,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => [
                    'data-flatpickr-target' => 'dateInput',
                    'aria-hidden' => 'true'],
                'help' => 'Rubrique B de la carte grise. Vous pouvez Utiliser les flèches pour naviguer dans le sélecteur de date.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('numberOfSeats', ChoiceType::class, [
                'label' => 'Nombre de passagers*',
                'required' => true,
                'choices' => array_combine(range(1, 9), range(1, 9)),
                'placeholder' => 'Veuillez sélectionner',
                'help_html' => true,
                'help' => 'Le nombre de places disponibles dans le vehicule.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Car::class,
        ]);
    }
}
