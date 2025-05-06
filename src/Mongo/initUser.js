db.createUser({
    user: "ecoride_user",
    pwd: "ecoride_userpassword",
    roles: [{ role: "readWrite", db: "ecoride_db" }],
});
