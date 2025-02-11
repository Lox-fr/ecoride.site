UPDATE user
SET number_of_ratings = :number_of_ratings,
    sum_of_ratings = :sum_of_ratings
WHERE id = :user_id;