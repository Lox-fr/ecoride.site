INSERT INTO user (
        pseudo,
        email,
        password,
        created_at,
        active,
        photo_filename,
        credits
    )
VALUES (
        :pseudo,
        :email,
        :password,
        :created_at,
        :active,
        :photo_filename,
        :credits
    );