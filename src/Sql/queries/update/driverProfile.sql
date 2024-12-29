-- Updates driver informations in the 'user' table
UPDATE user
SET
    pets_allowed = :pets_allowed,
    smokers_allowed = :smokers_allowed,
    driver_role_chosen = :driver_role_chosen,
    updated_at = :updated_at
WHERE id = :id;