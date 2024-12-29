<?php

declare(strict_types=1);

namespace App\Form\User;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class PassengerProfileFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudo',
                'attr' => ['placeholder' => 'nom d\'utilisateur'],
                'help' => 'C\'est votre nom d\'utilisateur, visible par les autres utilisateurs de la plateforme.
                    Il doit contenir entre 3 et 30 caractères -
                    seulement des lettres, des chiffres et des underscores.',
            ])
            ->add('photo', FileType::class, [
                'label' => 'Photo',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypesMessage' => 'Veuillez charger un fichier image valide (jpg, jpeg, png ou webp)',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                            'image/webp', ]])],
            ])
            ->add('firstName', TextType::class, [
                'label' => 'Prénom',
                'required' => false,
                'attr' => ['placeholder' => 'votre prénom'],
                'help' => 'Votre prénom, il doit contenir entre 3 et 50 caractères -
                    seulement des lettres, des espaces, des tirets ou des apostrophes.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('lastName', TextType::class, [
                'label' => 'Nom de famille',
                'required' => false,
                'attr' => ['placeholder' => 'votre nom de famille'],
                'help' => 'Votre nom de famille, il doit contenir entre 3 et 50 caractères -
                    seulement des lettres, des espaces, des tirets ou des apostrophes.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('address', TextareaType::class, [
                'label' => 'Adresse postale',
                'required' => false,
                'attr' => ['placeholder' => 'votre adresse postale'],
                'help' => 'Votre adresse postale complète, incluant code postal et ville.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('phoneNumber', TextType::class, [
                'label' => 'Numéro de téléphone',
                'required' => false,
                'attr' => ['placeholder' => 'Votre numéro de téléphone'],
                'help' => 'Votre numéro de téléphone - portable ou fixe.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('dateOfBirth', DateTimeType::class, [
                'label' => 'Date de naissance',
                'required' => false,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'label' => 'votre date de naissance',
                'html5' => false,
                'attr' => [
                    'data-flatpickr-target' => 'dateInput',
                    'aria-describedby' => 'user_dateOfBirth_help',
                    'aria-hidden' => 'true'],
                'help' => 'Quand êtes-vous né(e) ? Vous pouvez utiliser les flèches pour naviguer dans le sélecteur de date.',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Enregistrer',
                'attr' => [
                    'class' => 'btn btn-primary btn-lg shadow',
                    'aria-label' => 'Enregistrer vos informations personnelles'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
