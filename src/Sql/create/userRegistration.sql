PREPARE insert_user
FROM 'INSERT INTO user (email, pseudo, password, created_at, active, credits) VALUES (?, ?, ?, ?, ?, ?)';
SET @email = :email;
SET @pseudo = :pseudo;
SET @password = :password;
SET @created_at = :created_at;
SET @active = :active;
SET @credits = :credits;
EXECUTE insert_user USING @email, @pseudo, @password, @created_at, @active, @credits;
DEALLOCATE PREPARE insert_user;