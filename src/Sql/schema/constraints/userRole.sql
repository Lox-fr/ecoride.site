ALTER TABLE user_role
ADD CONSTRAINT FK_UR_USER FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
ADD CONSTRAINT FK_UR_ROLE FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE;