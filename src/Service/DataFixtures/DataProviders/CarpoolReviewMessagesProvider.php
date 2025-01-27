<?php

declare(strict_types=1);

namespace App\Service\DataFixtures\DataProviders;

class CarpoolReviewMessagesProvider
{
    private const APP_POSITIVE_REVIEW_MESSAGES = [
        'Expérience excellente, je recommande vivement !',
        'Super trajet, conducteur très sympathique !',
        'Le trajet était fluide et confortable, je réserverai à nouveau.',
        'Le conducteur était ponctuel et le trajet agréable.',
        'Conducteur aimable et sécurisé, je me suis senti très à l\'aise.',
        'Très bon trajet, tout était parfait.',
        'Conducteur courtois et agréable, je recommande.',
        'Trajet agréable, je n\'hésiterai pas à refaire appel à ce conducteur.',
        'Le conducteur était courtois et le trajet s\'est bien passé.',
        'Véhicule propre et conducteur sympathique, tout était au top.',
        'Un trajet très agréable, tout s\'est bien passé.',
        'Le conducteur était vraiment gentil et m\'a mis à l\'aise tout de suite.',
        'Très satisfait du trajet, conducteur fiable et sympathique.',
        'Je suis très content de ce trajet, très bonne expérience.',
        'Le trajet était calme et agréable, je me suis senti en sécurité.',
        'Très bonne expérience de covoiturage, conducteur au top.',
        'Ponctualité parfaite, trajet très agréable.',
        'Très bon conducteur, je me suis senti en sécurité pendant tout le trajet.',
        'Je recommande ce conducteur, il a été très courtois et sympathique.',
        'Super service, conducteur chaleureux et voiture propre.',
        'Un trajet agréable, je me suis senti bien pris en charge.',
        'Excellent service, je referai appel à ce conducteur sans hésiter.',
        'Conducteur très sympa, et le trajet était très confortable.',
        'Rien à redire, tout était parfait pendant ce trajet.',
        'Expérience de covoiturage idéale, conducteur impeccable.',
        'Très bon trajet, tout s\'est bien déroulé.',
        'Véhicule confortable et conducteur attentionné.',
        'Très satisfait du trajet, je recommande vivement.',
        'Conducteur ponctuel et courtois, très bonne expérience.',
        'Le trajet s\'est très bien passé, conducteur sympathique et sérieux.',
        'Un excellent covoiturage, je recommande vivement ce conducteur.',
        'Très bonne expérience, tout était parfait.',
        'Le conducteur était très courtois et sympathique.',
        'Confort et sécurité au rendez-vous, je recommande.',
        'Véhicule impeccable et conducteur très aimable.',
        'Le trajet était rapide et agréable, je reviendrai sans hésiter.',
        'Conducteur très agréable, le trajet a été très confortable.',
        'Le conducteur a été ponctuel et très courtois.',
        'Je me suis senti à l\'aise pendant tout le trajet.',
        'Une expérience de covoiturage très agréable, je recommande.',
        'Le trajet était tranquille et sans encombre, conducteur agréable.',
        'Conducteur très respectueux et ponctuel, très bonne expérience.',
        'Je suis ravi de ce trajet, tout s\'est passé à merveille.',
        'Véhicule propre et confortable, conducteur agréable.',
        'Excellente expérience, je n\'hésiterai pas à réserver à nouveau.',
        'Conducteur très courtois et agréable, tout s\'est bien passé.',
        'Je recommande vivement ce conducteur, expérience parfaite.',
        'Très agréable de voyager avec ce conducteur, je suis très satisfait.',
        'Trajet agréable et sans soucis, conducteur sympathique et courtois.',
        'Le trajet s\'est parfaitement bien déroulé, je suis satisfait.',
        'Je recommande à 100%, conducteur super et véhicule confortable.',
        'Service impeccable, conducteur très sympathique et courtois.',
    ];

    private const APP_NEUTRAL_REVIEW_MESSAGES = [
        'Le trajet était correct, mais sans plus.',
        'La voiture était bien, mais mériterait un peu plus de propreté.',
        'Le conducteur était correct, mais n\'a pas beaucoup échangé.',
        'Le trajet était neutre, rien de particulier à signaler.',
        'Un trajet standard, tout s\'est bien passé dans l\'ensemble.',
        'Le véhicule était ok, mais il y avait quelques détails à améliorer.',
        'Le conducteur a fait son travail, mais sans plus.',
        'Le trajet était agréable, mais pas exceptionnel.',
        'Le conducteur était ponctuel, mais un peu distant.',
        'Le trajet était acceptable, mais il manquait un peu de convivialité.',
        'La voiture était propre, mais l\'intérieur pourrait être plus soigné.',
        'Le trajet a été correct, mais pas mémorable.',
        'Le conducteur n\'a pas échangé beaucoup, mais il a assuré la conduite.',
        'Rien à redire sur le trajet, mais ce n\'était pas exceptionnel.',
        'Le trajet était dans les standards, rien de particulier.',
        'Le conducteur était ponctuel, mais l\'ambiance était assez froide.',
        'La voiture était correcte, mais un peu étroite.',
        'Un trajet sans surprise, tout a été en ordre.',
        'Le conducteur n\'a pas montré beaucoup d\'enthousiasme, mais il a été courtois.',
        'Le trajet a été simple, sans problème particulier.',
        'Le véhicule était correct, mais un peu bruyant.',
        'Le trajet était dans la moyenne, mais rien de spécial.',
        'Le conducteur a bien fait son travail, mais sans trop d\'engagement.',
        'Le trajet s\'est bien passé, mais l\'ambiance manquait un peu.',
        'Le conducteur était poli, mais il n\'a pas vraiment pris d\'initiative.',
        'Tout s\'est bien passé, mais c\'était un trajet assez banal.',
    ];
    
    private const APP_NEGATIVE_REVIEW_MESSAGES = [
        'Le trajet était inconfortable et le conducteur était en retard.',
        'Mauvaise expérience, la voiture était sale.',
        'Le conducteur était impoli et le trajet était stressant.',
        'La voiture est tombée en panne en cours de route, vraiment déçu.',
        'Pas la meilleure expérience, je ne recommande pas.',
        'Le conducteur était désagréable et le trajet a été long et pénible.',
        'Le véhicule était sale et inconfortable.',
        'Le trajet était très inconfortable, je ne ferai plus appel à ce conducteur.',
        'Le conducteur ne respectait pas les règles de sécurité et le trajet était mauvais.',
        'Le véhicule était en mauvais état et le trajet a été désagréable.',
        'Le trajet a été très ennuyeux, le conducteur ne parlait pas et ne semblait pas intéressé.',
        'Le conducteur était en retard et la voiture était mal entretenue.',
        'La conduite était dangereuse et le véhicule en mauvais état.',
        'Le trajet a été très long, je ne recommande vraiment pas ce conducteur.',
        'Très mauvaise expérience, le conducteur était impoli et le trajet chaotique.',
        'Le trajet a été stressant, je ne me suis pas du tout senti en sécurité.',
        'Le véhicule était sale, ce qui a rendu le trajet encore moins agréable.',
        'Le conducteur n\'a pas respecté les horaires et le trajet a été désagréable.',
        'Le trajet était bruyant et inconfortable, et le conducteur peu agréable.',
        'Je n\'ai pas apprécié ce trajet, voiture sale et conducteur peu sympathique.',
        'Le conducteur roulait trop vite et le trajet était très inconfortable.',
        'Le véhicule était malodorant et le conducteur était désagréable.',
        'Le trajet a été un vrai cauchemar, je déconseille fortement.',
        'Le conducteur était impoli et la voiture en mauvais état.',
        'Le trajet a été en retard et pas du tout agréable.',
        'Mauvaise expérience, je ne ferai plus appel à ce conducteur.',
    ];

    /**
     * Returns a positive review picked from a predefined list of reviews.
     */
    public function getRandomPositiveReviewMessage(): string
    {
        return self::APP_POSITIVE_REVIEW_MESSAGES[random_int(0, \count(self::APP_POSITIVE_REVIEW_MESSAGES) - 1)];
    }

    /**
     * Returns a neutral review picked from a predefined list of reviews.
     */
    public function getRandomNeutralReviewMessage(): string
    {
        return self::APP_NEUTRAL_REVIEW_MESSAGES[random_int(0, \count(self::APP_NEUTRAL_REVIEW_MESSAGES) - 1)];
    }

    /**
     * Returns a negative review picked from a predefined list of reviews.
     */
    public function getRandomNegativeReviewMessage(): string
    {
        return self::APP_NEGATIVE_REVIEW_MESSAGES[random_int(0, \count(self::APP_NEGATIVE_REVIEW_MESSAGES) - 1)];
    }
}
