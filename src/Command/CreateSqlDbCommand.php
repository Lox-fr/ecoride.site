<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:database:create',
    description: 'Creates the database if it does not exist.',
)]
class CreateSqlDbCommand extends Command
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Get the database URL from .env file
        $databaseUrl = $_ENV['DATABASE_URL'] ?? 'mysql://ecoride_user:ecoride_password@host:port/ecoride_db';
        $parsedUrl = parse_url($databaseUrl);

        // Extract login information
        $host = $parsedUrl['host'] ?? 'localhost';
        $port = $parsedUrl['port'] ?? '3306';
        $user = $parsedUrl['user'] ?? 'root';
        $password = $parsedUrl['pass'] ?? '';
        $dbName = isset($parsedUrl['path']) ? mb_substr($parsedUrl['path'], 1) : 'ecoride_db';

        // Check if --env=test was specified and adjust db name
        $environment = $input->getOption('env');
        if ('test' === $environment) {
            $dbName .= '_test';
        }

        // Create a new DSN (Data Source Name) without specifying a database
        $dsn = "mysql:host=$host;port=$port";

        try {
            $pdo = new \PDO($dsn, $user, $password); // Create the PDO connection
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            // Check if database already exists
            $query = $pdo->query("SHOW DATABASES LIKE '$dbName'");

            if (false === $query) {
                $io->error('The request to check the existence of the database failed.');

                return Command::FAILURE;
            }

            if ($query->fetch()) {
                $io->warning("Database '$dbName' already exists.");

                return Command::SUCCESS;
            }

            // Create the database
            $createDbQuery = "CREATE DATABASE `$dbName` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
            $pdo->exec($createDbQuery);
            $io->success("Database '$dbName' created successfully!");

            return Command::SUCCESS;
        } catch (\PDOException $e) {
            $io->error('An error occurred while creating the database : '.$e->getMessage());

            return Command::FAILURE;
        }
    }
}
