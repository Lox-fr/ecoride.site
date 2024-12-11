CREATE TABLE car (
    id INT AUTO_INCREMENT NOT NULL,
    license_plate VARCHAR(10) NOT NULL,
    date_of_first_registration DATE NOT NULL,
    model VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    brand_id INT NOT NULL,
    engine_type_id INT NOT NULL,
    color_id INT NOT NULL,
    PRIMARY KEY(id),
    UNIQUE INDEX UNIQ_CAR_LICENSE_PLATE (license_plate),
    INDEX IDX_CAR_USER (user_id),
    INDEX IDX_CAR_BRAND (brand_id),
    INDEX IDX_CAR_ENGINE_TYPE (engine_type_id),
    INDEX IDX_CAR_COLOR (color_id)
);