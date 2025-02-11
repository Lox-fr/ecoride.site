CREATE TABLE messenger_messages (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    body LONGTEXT NOT NULL,
    headers LONGTEXT NOT NULL,
    queue_name VARCHAR(190) NOT NULL,
    created_at DATETIME NOT NULL,
    available_at DATETIME NOT NULL,
    delivered_at DATETIME DEFAULT NULL,
    PRIMARY KEY(id),
    INDEX IDX_QUEUE_NAME (queue_name),
    INDEX IDX_AVAILABLE_AT (available_at),
    INDEX IDX_DELIVERED_AT (delivered_at)
);