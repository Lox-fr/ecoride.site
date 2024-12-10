<?php

declare(strict_types=1);

namespace App\Form\Profile;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DriverType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('petsAllowed', CheckboxType::class, [
                'label' => 'Animaux acceptés ?',
                'required' => false,
                'help' => 'Acceptez-vous de voyager avec des animaux ?',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('smokersAllowed', CheckboxType::class, [
                'label' => 'Fumeurs acceptés ?',
                'required' => false,
                'help' => 'Acceptez-vous de voyager avec des personnes fumeuses ?',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Enregistrer',
                'attr' => [
                    'class' => 'btn btn-primary btn-lg shadow',
                    'aria-label' => 'Devenez chauffeure et rentabilisez vos trajets',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
