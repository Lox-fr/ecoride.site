<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Preference;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class PreferenceFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('label', TextType::class, [
                'label' => 'Préférence personnalisée',
                'required' => true,
                'attr' => ['placeholder' => 'Je dispose d\'un compte Deezer'],
                'help' => 'Indiquez vos préférences personnalisées. Exemples :
                    "Je ne souhaite pas voyager avec des enfants",
                    "Grand coffre à disposition", "Climatisation à 20°C", ...
                    L\'intitulé doit comporter au maximum 50 caractères.',
                'help_attr' => ['class' => 'visually-hidden'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Supprimer ce champs s\'il ne sert pas',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'L\'intitulé de votre préférence personnalisée doit comporter au minimum {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'L\'intitulé de votre préférence personnalisée doit comporter au minimum {{ limit }} caractères',
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Preference::class,
            'csrf_token_id' => 'user_preference',
        ]);
    }
}
