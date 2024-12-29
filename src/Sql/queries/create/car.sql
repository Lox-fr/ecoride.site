INSERT INTO car (
        license_plate,
        date_of_first_registration,
        model,
        user_id,
        brand_id,
        engine_type_id,
        color_id,
        number_of_seats,
        created_at,
        active
    )
VALUES (
        :license_plate,
        :date_of_first_registration,
        :model,
        :user_id,
        :brand_id,
        :engine_type_id,
        :color_id,
        :number_of_seats,
        :created_at,
        :active
    );