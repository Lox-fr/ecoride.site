<?php

declare(strict_types=1);

namespace App\Form\Carpool;

use App\Document\Carpool;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CarpoolSearchFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('departureCity', TextType::class, [
                'required' => true,
                'label' => 'Ville de départ',
                'attr' => [
                    'placeholder' => 'Ville de départ',
                    'aria-describedby' => 'carpool_search_departureCity_help',
                ],
                'help' => 'Indiquez la ville où commence votre trajet.',
                'help_attr' => [
                    'class' => 'visually-hidden',
                ],
            ])
            ->add('arrivalCity', TextType::class, [
                'required' => true,
                'label' => 'Ville d\'arrivée',
                'attr' => [
                    'placeholder' => 'Ville d\'arrivée',
                    'aria-describedby' => 'carpool_search_arrivalCity_help',
                ],
                'help' => 'Indiquez la ville où se termine votre trajet.',
                'help_attr' => [
                    'class' => 'visually-hidden',
                ],
            ])
            ->add('departureTime', DateTimeType::class, [
                'label' => 'Date et heure de départ',
                'required' => true,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => [
                    'data-flatpickr-target' => 'dateInput',
                    'aria-describedby' => 'carpool_search_departureTime_help',
                    'aria-hidden' => 'true',
                ],
                'help' => 'Utilisez les flèches pour naviguer dans le sélecteur de date.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Rechercher un trajet',
                'attr' => [
                    'class' => 'btn btn-primary btn-lg shadow',
                    'aria-label' => 'Rechercher un trajet de covoiturage',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Carpool::class,
            'csrf_token_id' => 'carpool_search',
        ]);
    }
}
