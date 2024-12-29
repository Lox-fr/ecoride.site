UPDATE car
SET license_plate = :license_plate,
    date_of_first_registration = :date_of_first_registration,
    model = :model,
    user_id = :user_id,
    brand_id = :brand_id,
    engine_type_id = :engine_type_id,
    color_id = :color_id,
    number_of_seats = :number_of_seats,
    created_at = :created_at,
    active = :active
WHERE id = :id;