-- Updates passenger informations in the 'user' table
UPDATE user
SET 
    pseudo = :pseudo,
    photo_filename = :photo_filename,
    first_name = :first_name,
    last_name = :last_name,
    address = :address,
    phone_number = :phone_number,
    date_of_birth = :date_of_birth,
    updated_at = :updated_at
WHERE id = :id;