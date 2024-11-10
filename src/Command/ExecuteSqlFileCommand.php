<?php

declare(strict_types=1);

namespace App\Command;

use Doctrine\DBAL\Connection;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:database:execute',
    description: 'Execute a specified SQL file (from "src/Sql") in the database.'
)]
class ExecuteSqlFileCommand extends Command
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        parent::__construct();
        $this->connection = $connection;
    }

    protected function configure(): void
    {
        $this->addArgument('sqlFileName', InputArgument::REQUIRED,
            'Name of the SQL file to execute (from "src/Sql", without ".sql")');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Ensure $sqlFileName is a string
        if (!\is_string($sqlFileName = $input->getArgument('sqlFileName'))) {
            $io->error('The SQL file name should be a valid string.');

            return Command::FAILURE;
        }

        // Build absolute path based on 'src/Sql/' folder
        $sqlFilePath = __DIR__.'/../Sql/'.$sqlFileName.'.sql';

        // Check if file exists
        if (!file_exists($sqlFilePath) || false === ($sql = file_get_contents($sqlFilePath))) {
            $io->error('The specified SQL file does not exist or could not be loaded.');

            return Command::FAILURE;
        }

        // Execute the SQL file
        try {
            $this->connection->executeStatement($sql);
            $io->success("The SQL file `$sqlFileName` has been executed successfully.");

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $io->error('An error occurred while executing the SQL file : '.$e->getMessage());

            return Command::FAILURE;
        }
    }
}
