DELETE FROM user_role
WHERE user_id = :user_id
    AND role_id = (
        SELECT id
        FROM role
        WHERE label = 'ROLE_DRIVER'
    );