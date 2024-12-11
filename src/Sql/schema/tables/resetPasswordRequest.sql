CREATE TABLE reset_password_request (
    id BIGINT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    selector VARCHAR(20) NOT NULL,
    hashed_token VARCHAR(100) NOT NULL,
    requested_at DATETIME NOT NULL,
    expires_at DATETIME NOT NULL,
    PRIMARY KEY(id),
    INDEX IDX_QUEUE_NAME (hashed_token)
);