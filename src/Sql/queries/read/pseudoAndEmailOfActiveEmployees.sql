SELECT u.pseudo,
    u.email
FROM user u
    JOIN user_role ur ON u.id = ur.user_id
    JOIN role r ON ur.role_id = r.id
WHERE u.active = 1
AND r.label = 'ROLE_EMPLOYEE'
ORDER BY u.pseudo ASC;