INSERT INTO user_role (user_id, role_id)
VALUES (
        :user_id,
        (
            SELECT id
            FROM role
            WHERE label = 'ROLE_EMPLOYEE'
        )
    );