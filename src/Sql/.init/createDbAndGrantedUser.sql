-- Create the ecoride_db database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS ecoride_db;

-- Create the ecoride_user user with a password and grant privileges on ecoride_db
-- The user can connect from any host ('%').
CREATE USER IF NOT EXISTS 'ecoride_user'@'%' IDENTIFIED BY 'ecoride_userpassword';
GRANT ALL PRIVILEGES ON ecoride_db.* TO 'ecoride_user'@'%';

-- Technically unnecessary here, as GRANT triggers a privilege reload
FLUSH PRIVILEGES;