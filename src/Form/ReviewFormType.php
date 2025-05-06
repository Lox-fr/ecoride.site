<?php

declare(strict_types=1);

namespace App\Form;

use App\Document\Review;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ReviewFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('rating', RangeType::class, [
                'label' => 'Note sur 5',
                'required' => true,
                'attr' => ['min' => 1, 'max' => 5, 'value' => 5],
                'help' => 'Quelle note attribuez-vous à ce trajet ?',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('comment', TextareaType::class, [
                'label' => 'Commentaire',
                'required' => false,
                'attr' => ['placeholder' => 'Ajoutez un commentaire'],
                'help' => 'Laissez un commentaire pour évaluer ce trajet',
                'help_attr' => ['class' => 'visually-hidden'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Confirmer',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Review::class,
            'csrf_token_id' => 'carpool_review',
        ]);
    }
}
