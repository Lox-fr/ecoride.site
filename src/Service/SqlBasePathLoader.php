<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;

class SqlBasePathLoader
{
    private Connection $connection;
    private string $sqlBasePath;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
        $this->sqlBasePath = __DIR__.'/../sql/'; // Directory for SQL files
    }

    /**
     * Loads the SQL file, replaces placeholders with parameters, and returns the modified SQL.
     *
     * @param string $fileName the name of the SQL file (without the extension)
     * @param array  $params   the parameters to inject into the SQL query
     *
     * @throws \Exception if the SQL file is not found
     *
     * @return string the modified SQL query
     */
    public function getSqlFromFile(string $fileName, array $params = []): string
    {
        // Build the full path to the SQL file
        $sqlFilePath = $this->sqlBasePath.$fileName.'.sql';

        // Check if the file exists
        if (!file_exists($sqlFilePath)) {
            throw new \Exception("Le fichier '$sqlFilePath' n\'a pas été trouvé.");
        }

        // Load the content of the SQL file
        $sql = file_get_contents($sqlFilePath);

        // Replace placeholders in the SQL query with the provided parameters
        foreach ($params as $key => $value) {
            if (is_int($value)) {
                // Directly replace integer values without quotes
                $sql = str_replace(":$key", (string) $value, $sql);
            } else {
                // Replace each placeholder with the corresponding quoted value
                $sql = str_replace(":$key", $this->connection->quote($value), $sql);
            }
        }

        return $sql;  // Return the modified SQL query without executing it
    }
}
