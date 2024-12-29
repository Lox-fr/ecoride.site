-- Admin - id 1
INSERT INTO car (
    license_plate, date_of_first_registration, model, user_id, brand_id, engine_type_id, color_id, number_of_seats, created_at, active) 
VALUES
    ('AB-123-CD', '2020-05-10', '3008', 1, 19, 3, 9, 3,'2024-07-01', 1),
    ('EF-456-GH', '2022-03-15', 'Q5', 1, 1, 4, 6, 3,'2024-07-01', 1);

-- Employees - id 2 and 3
INSERT INTO car (
    license_plate, date_of_first_registration, model, user_id, brand_id, engine_type_id, color_id, number_of_seats, created_at, active) 
VALUES
    ('IJ-789-KL', '2021-02-15', 'Polo', 2, 28, 2, 4, 3,'2024-07-01', 1),
    ('KL-012-MN', '2021-05-22', 'Clio', 2, 21, 1, 7, 3,'2024-07-01', 1),
    ('OP-345-QR', '2020-07-10', 'Captur', 3, 21, 4, 6, 3,'2024-07-01', 1);

-- Drivers - id 4 to 15
INSERT INTO car (
    license_plate, date_of_first_registration, model, user_id, brand_id, engine_type_id, color_id, number_of_seats, created_at, active) 
VALUES
    ('ST-678-UV', '2019-09-05', 'Civic', 4, 8, 1, 4, 3,'2024-12-01', 1),
    ('EF-234-GH', '2021-09-11', 'Focus', 4, 7, 1, 5, 3,'2024-12-01', 1),
    ('WX-901-YZ', '2020-01-11', 'CX-5', 5, 14, 2, 6, 3,'2024-12-01', 1),
    ('IJ-567-KL', '2021-12-05', 'Golf', 5, 7, 2, 9, 3,'2024-12-01', 1),
    ('AB-234-CD', '2021-03-18', 'Mini Countryman', 6, 16, 4, 3, 3,'2024-12-01', 1),
    ('CD-567-EF', '2022-07-23', 'Fiesta', 7, 7, 1, 5, 3,'2024-12-01', 1),
    ('GH-890-HI', '2023-04-10', 'Tucson', 8, 9, 2, 5, 3,'2024-12-01', 1),
    ('OP-234-QR', '2021-05-12', 'Mokka', 8, 18, 3, 5, 3,'2024-12-01', 1),
    ('JK-123-LM', '2021-11-20', '3008', 9, 19, 3, 4, 3,'2024-12-01', 1),
    ('NO-456-PQ', '2020-08-15', 'Citroën C3', 10, 21, 1, 9, 3,'2024-12-01', 1),
    ('RS-789-UV', '2022-03-05', 'Zoé', 11, 26, 4, 6, 3,'2024-12-01', 1),
    ('UV-678-WX', '2020-09-01', '2008', 11, 19, 3, 9, 3,'2024-12-01', 1),
    ('TU-012-VW', '2021-06-07', 'Astra', 12, 18, 3, 4, 3,'2024-12-01', 1),
    ('VW-345-XY', '2021-10-02', 'Duster', 13, 4, 2, 6, 3,'2024-12-01', 1),
    ('YZ-890-ZA', '2023-07-09', 'Kia Sportage', 13, 21, 4, 4, 3,'2024-12-01', 1),
    ('YZ-678-ZA', '2022-05-15', 'Corsa', 14, 18, 3, 5, 3,'2024-12-01', 1),
    ('AB-901-CD', '2023-02-22', 'Taycan', 15, 26, 4, 9, 3,'2024-12-01', 1),
    ('BC-789-DE', '2022-03-15', 'Zoé', 15, 26, 4, 5, 3,'2024-12-01', 1);