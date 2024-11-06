<?php

declare(strict_types=1);

namespace App\Command;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:exec-sql',
    description: 'Execute a SQL file (from "src/Sql") in the db. If the db does not exist, it will be created.'
)]
class ExecSqlCommand extends Command
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        parent::__construct();
        $this->connection = $connection;
    }

    protected function configure(): void
    {
        $this->addArgument('sqlFileName', InputArgument::REQUIRED, 'Name of the SQL file to execute (without ".sql")');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $sqlFileName = $input->getArgument('sqlFileName');

        // Build absolute path based on 'src/Sql/' folder
        $sqlFilePath = __DIR__.'/../Sql/'.$sqlFileName.'.sql';

        // Check if file exists
        if (!file_exists($sqlFilePath)) {
            $io->error('The specified SQL file does not exist.');

            return Command::FAILURE;
        }

        // Load the contents of the SQL file
        $sql = file_get_contents($sqlFilePath);

        if (false === $sql) {
            $io->error('The SQL file could not be loaded.');

            return Command::FAILURE;
        }

        // Get the db name from the database URL read in the .env
        $databaseUrl = $_ENV['DATABASE_URL'] ?? 'mysql://user:password@host:port/ecoride_db';
        $parsedUrl = parse_url($databaseUrl); // Parse the DATABASE_URL to extract the db name
        $dbName = mb_substr($parsedUrl['path'], 1); // Remove the leading slash

        // Create a new connection to MySQL without specifying a database
        $config = $this->connection->getParams();
        $config['dbname'] = null;  // Temporarily remove the database name to connect to the server itself
        $connectionWithoutDb = DriverManager::getConnection($config);

        // Check if the database exists
        try {
            $stmt = $connectionWithoutDb->executeQuery("SHOW DATABASES LIKE '$dbName'");
            $databaseExists = false !== $stmt->fetchAssociative();
        } catch (\Exception $e) {
            $io->error('An error occurred while checking the database existence: '.$e->getMessage());

            return Command::FAILURE;
        }

        // Create the database if it does not exist
        if (!$databaseExists) {
            try {
                $connectionWithoutDb->executeStatement(
                    "CREATE DATABASE `$dbName` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
                );
                $io->success("Database `$dbName` has been created.");
            } catch (\Exception $e) {
                $io->error('An error occurred while creating the database: '.$e->getMessage());

                return Command::FAILURE;
            }
        }

        // Now that the database exists, use the original connection with the database selected
        try {
            $this->connection->executeStatement("USE `$dbName`;");
        } catch (\Exception $e) {
            $io->error('Failed to select database: '.$e->getMessage());

            return Command::FAILURE;
        }

        // Execute the SQL file
        try {
            $this->connection->executeStatement($sql);
            $io->success('The SQL file has been executed successfully.');

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $io->error('An error occurred while executing the SQL file: '.$e->getMessage());

            return Command::FAILURE;
        }
    }
}
