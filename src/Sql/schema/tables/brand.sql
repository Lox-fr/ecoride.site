CREATE TABLE brand (
    id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    label VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE INDEX UNIQ_BRAND_LABEL (label)
);