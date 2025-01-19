<?php

declare(strict_types=1);

namespace App\Form\Carpool;

use App\Document\Carpool;
use App\Entity\Car;
use App\Form\CarFormType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CarpoolAddFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('departureTime', DateTimeType::class, [
                'label' => 'Date et heure de départ',
                'required' => true,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => [
                    'data-flatpickr-target' => 'dateInput',
                    'aria-hidden' => 'true',
                ],
                'help' => 'Utilisez les flèches pour naviguer dans le sélecteur de date.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('departureCity', TextType::class, [
                'required' => true,
                'label' => 'Depuis',
                'attr' => ['placeholder' => 'Ville de départ'],
                'help' => 'Indiquez la ville où commence votre trajet.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('departurePlace', TextareaType::class, [
                'required' => false,
                'label' => 'Adresse de départ',
                'attr' => ['placeholder' => 'Adresse de départ'],
                'help' => 'Indiquez l\'emplacement où commence votre trajet.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('arrivalCity', TextType::class, [
                'required' => true,
                'label' => 'Vers',
                'attr' => ['placeholder' => 'Ville d\'arrivée'],
                'help' => 'Indiquez la ville où se termine votre trajet.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('arrivalPlace', TextareaType::class, [
                'required' => false,
                'label' => 'Adresse d\'arrivée',
                'attr' => ['placeholder' => 'Adresse d\'arrivée'],
                'help' => 'Indiquez l\'emplacement où se termine votre trajet.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('estimatedRideTime', IntegerType::class, [
                'required' => true,
                'label' => 'Durée estimée du trajet',
                'attr' => [
                    'class' => 'shadow',
                    'aria-label' => 'Temps estimé du voyage proposé.',
                    'min' => 5,
                ],
                'help' => 'Temps estimé du voyage proposé.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('car', EntityType::class, [
                'class' => Car::class,
                'choices' => $options['user_cars'],
                'choice_label' => function (Car $car) {
                    return \sprintf('%s %s (%s)',
                        $car->getBrand()->getLabel(),
                        $car->getModel(),
                        $car->getLicensePlate());
                },
                'multiple' => false,
                'expanded' => false,
                'mapped' => false,
                'required' => false,
                'label' => 'Quel véhicule ?',
                'attr' => ['placeholder' => 'Choisissez ...'],
                'help' => 'Sélectionnez l\'un de vos véhicules enregistrés ou créez-en un nouveau.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('newCar', CarFormType::class, [
                'mapped' => false,
                'required' => false,
                'label' => 'Nouveau véhicule',
                'attr' => ['placeholder' => 'Nouveau véhicule'],
                'help' => 'Créez un nouveau véhicule à associer à votre compte.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('pricePerPerson', IntegerType::class, [
                'required' => true,
                'label' => 'Prix demandé par passager',
                'attr' => [
                    'class' => 'shadow',
                    'aria-label' => 'Nombre de crédits demandés à chaque passager.',
                    'min' => 3,
                ],
                'help' => 'Prix demandé par passager.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Ajouter un covoiturage',
                'attr' => [
                    'class' => 'btn btn-primary btn-lg shadow',
                    'aria-label' => 'Ajouter un trajet de covoiturage.',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Carpool::class,
            'user_cars' => [],
            'csrf_token_id' => 'carpool_add',
        ]);
    }
}
