ALTER TABLE preference
ADD CONSTRAINT FK_PREFERENCE_USER FOREIGN KEY (user_id) REFERENCES user (id);