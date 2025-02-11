-- Remove all privileges from 'root' for connections coming from any address
REVOKE ALL PRIVILEGES,
GRANT OPTION
FROM 'root' @'%';
REVOKE ALL PRIVILEGES,
GRANT OPTION
FROM 'root' @'localhost';