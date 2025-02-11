<?php

declare(strict_types=1);

namespace App\Form\User;

use App\Entity\User;
use App\Form\CarFormType;
use App\Form\PreferenceFormType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DriverProfileFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('cars', CollectionType::class, [
                'entry_type' => CarFormType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->add('petsAllowed', CheckboxType::class, [
                'label' => 'Animaux acceptés ?',
                'required' => false,
                'help' => 'En tant que chauffeur, acceptez-vous de voyager avec des animaux ?',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('smokersAllowed', CheckboxType::class, [
                'label' => 'Fumeurs acceptés ?',
                'required' => false,
                'help' => 'En tant que chauffeur, acceptez-vous de voyager avec des personnes fumeuses ?',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('preferences', CollectionType::class, [
                'entry_type' => PreferenceFormType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            ->add('driverRoleChosen', CheckboxType::class, [
                'label' => 'Accéder au statut "chauffeur" ?',
                'required' => false,
                'help' => 'Accéder au statut "chauffeur" ? Ce statut est public.
                    Seuls les utilisateurs ayant validé un statut "chauffeur"
                    peuvent proposer de nouveaux trajets sur la plateforme.
                    Pour y accéder, vous devez avoir complété votre profil passager
                    (onglet "Vos informations"), et enregistré au moins un véhicule.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Enregistrer',
                'attr' => [
                    'class' => 'btn btn-primary btn-lg shadow',
                    'aria-label' => 'Devenez chauffeur et rentabilisez vos trajets',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_token_id' => 'driver_profile',
        ]);
    }
}
