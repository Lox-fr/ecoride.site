<?php

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:database:delete',
    description: 'Deletes the specified database if it exists.',
)]
class DeleteSqlDbCommand extends Command
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

        if (!$input->getOption('no-interaction')) {
            // Ask for confirmation before deleting
            if (!$io->confirm("Are you sure you want to delete the database '$dbName'?", false)) {
                $io->warning('Command aborted by user.');

                return Command::SUCCESS;
            }
        }

        try {
            $pdo = new \PDO($dsn, $user, $password); // Create the PDO connection
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            // Check if database already exists
            $query = $pdo->query("SHOW DATABASES LIKE '$dbName'");
            if (false === $query || !$query->fetch()) {
                $io->warning("The database '$dbName' does not exist or is not accessible.");

                return Command::SUCCESS;
            }

            // Delete the database
            $pdo->exec("DROP DATABASE `$dbName`");
            $io->success("The database '$dbName' has been deleted successfully.");

            return Command::SUCCESS;
        } catch (\PDOException $e) {
            $io->error('An error occurred while deleting the database : '.$e->getMessage());

            return Command::FAILURE;
        }
    }
}
