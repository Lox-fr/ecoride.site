CREATE TABLE user_role (
    user_id INT UNSIGNED NOT NULL,
    role_id TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY(user_id, role_id),
    INDEX IDX_UR_USER (user_id),
    INDEX IDX_UR_ROLE (role_id)
);