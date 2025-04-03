UPDATE user
SET active = :status
WHERE id = :user_id;