<?php

declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;

/**
 * Custom exception for the SqlHandler service.
 */
class SqlHandlerException extends \RuntimeException
{
}

class SqlHandler
{
    // Constants for fetch modes
    public const FETCH_ONE = 'fetchOne';
    public const FETCH_ASSOCIATIVE = 'fetchAssociative';
    public const FETCH_ALL_ASSOCIATIVE = 'fetchAllAssociative';
    public const FETCH_ALL_ASSOCIATIVE_INDEXED = 'fetchAllAssociativeIndexed';
    public const FETCH_NUMERIC = 'fetchNumeric';
    public const FETCH_ALL_NUMERIC = 'fetchAllNumeric';
    public const FETCH_ALL_KEY_VALUE = 'fetchAllKeyValue';
    public const FETCH_FIRST_COLUMN = 'fetchFirstColumn';

    public function __construct(
        private Connection $connection,
        private string $sqlBasePath = __DIR__.'/../sql/',
    ) {
    }

    /**
     * Execute a SQL query from an SQL file.
     *
     * @param string      $fileName     The name of the SQL file (without the extension)
     * @param string|null $pathSegments (Optional) Subdirectory or path segments relative to the base path
     * @param string|null $fetchMode    (Optional) Fetch mode, one of the FETCH_* constants
     * @param array       $params       (Optional) Parameters to bind to the query (for prepared statements)
     *
     * @throws \InvalidArgumentException If the SQL file is not found or if the fetch mode is invalid
     * @throws SqlHandlerException       If an error occurs during query execution
     *
     * @return mixed The result of the query, or `true` if no result is expected
     */
    public function execute(
        string $fileName,
        ?string $pathSegments = null,
        ?string $fetchMode = null,
        array $params = [],
    ): mixed {
        // Get the SQL query from the file
        $sql = $this->getSqlQueryFromFilePath($fileName, $pathSegments);

        try {
            // Prepare and execute an SQL query and returns the value
            $result = $this->connection->executeQuery($sql, $params);

            if ($fetchMode) {
                // Return based on fetchMode
                return match ($fetchMode) {
                    // Returns the first column of the first row as a scalar value
                    self::FETCH_ONE => $result->fetchOne(),
                    // Returns a single row as an associative array (column names as keys)
                    self::FETCH_ASSOCIATIVE => $result->fetchAssociative(),
                    // Returns all rows as an associative array (each row is an array with column names as keys)
                    self::FETCH_ALL_ASSOCIATIVE => $result->fetchAllAssociative(),
                    // Returns all rows as an indexed associative array (keys are unique values from the first column)
                    self::FETCH_ALL_ASSOCIATIVE_INDEXED => $result->fetchAllAssociativeIndexed(),
                    // Returns the first row as a numeric array (column values indexed numerically)
                    self::FETCH_NUMERIC => $result->fetchNumeric(),
                    // Returns all rows as numeric arrays (each row is indexed numerically)
                    self::FETCH_ALL_NUMERIC => $result->fetchAllNumeric(),
                    // Returns a key-value pair array (first column as key, second column as value)
                    self::FETCH_ALL_KEY_VALUE => $result->fetchAllKeyValue(),
                    // Returns all values from the first column as a simple array
                    self::FETCH_FIRST_COLUMN => $result->fetchFirstColumn(),
                    // Throws an exception if an unsupported fetch mode is encountered
                    default => throw new \InvalidArgumentException("Unhandled fetch mode: $fetchMode"),
                };
            }

            // Query executed successfully without fetching
            return true;
        } catch (\Throwable $e) {
            throw new SqlHandlerException("Error executing SQL query from file '$fileName': ".$e->getMessage(), 0, $e);
        }
    }

    /**
     * Get SQL query as a string from an SQL file.
     *
     * @param string      $fileName     The name of the SQL file (without the extension)
     * @param string|null $pathSegments (Optional) Subdirectory or path segments where the file is located, relative to the base path
     *
     * @throws \InvalidArgumentException If the SQL file is not found
     * @throws \RuntimeException         If the SQL file cannot be read
     *
     * @return string The SQL query
     */
    private function getSqlQueryFromFilePath(string $fileName, ?string $pathSegments = null): string
    {
        // Get the file path
        $sqlFilePath = $this->sqlBasePath;
        if (null !== $pathSegments) {
            $sqlFilePath .= rtrim($pathSegments, \DIRECTORY_SEPARATOR).\DIRECTORY_SEPARATOR;
        }
        $sqlFilePath .= $fileName.'.sql';

        // Check if the file exists
        if (!file_exists($sqlFilePath)) {
            throw new \InvalidArgumentException("The SQL file '$sqlFilePath' was not found.");
        }

        // Get the file contents
        $sqlString = file_get_contents($sqlFilePath);
        if (false === $sqlString) {
            throw new \RuntimeException("Unable to read the SQL file '$sqlFilePath'.");
        }

        return $sqlString;
    }
}
