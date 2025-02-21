# **ecoride.site**

EcoRide is an **eco-friendly carpooling platform** that allows users to offer or book car rides, optimizing vehicle usage to reduce carbon emissions. The goal is to provide a smooth and secure experience while promoting sustainable mobility and encouraging the use of electric vehicles.
Built with **Symfony 6.4** - Docker used for development databases (MySQL + MongoDB)

## Description

The site is accessible at the address <https://ecoride.site>

### Main pages

* Home (/) : includes a carpool search form
* Login (/connexion)
* Registration (/inscription)
* Search a carpool (/rechercher-trajet)
* View a carpool details (/covoiturage/...)
* Publish a carpool (/publier-trajet)
* User profile (/profil) : includes several tabs (personal information, cars, add a carpool, carpool history)

### Features

#### **User management**

* with dedicated roles : **passenger, driver, employee, and admin**
* users can complete their profile to become a driver (by adding at least one car)
* secure registration, login and password reset functionalities

#### **Carpool and review management by role**

##### A visitor can

* Browse available carpools
* Filter search results based on criteria
* View carpool details
* Register to access more features

##### A passenger can also

* log in to their personal profile
* Search and join a carpool
* Cancel a participation
* Leave a review for a driver
* View past carpools
* Complete their profile to become a driver

##### A driver can also

* Act as a passenger
* Publish a carpool
* Start and finish a carpool
* Cancel a carpool
* View past carpools
* Update their profile

##### An employee can also

* Act as a passenger and/or a driver
* View disputed carpools
* Moderate reviews

##### An admin can also

* Act as a passenger, driver, and/or employee
* Suspend users
* View profitability indicators

## Development

### System requirements

* PHP >=8.3
* Composer >=2.8
* Symfony CLI >=5.10
* Node.js >= 23.1
* npm >= 10.9
* Docker >=27.4
* Docker Compose >=2.31

### Project dependencies

* Symfony 6.4
* MySQL & MongoDB
* PHPStan
* PHPUnit
* TypeScript
* ESLint & Prettier
* Bootstrap & Sass
* FlatPickr

### Local installation

```bash
# Check Symfony requirements
symfony check:requirements
# Get files locally
git clone https://github.com/Lox-fr/ecoride.site.git
cd ecoride.site
# Install PHP dependencies
composer install
# Install JS dependencies
npm install
# Deploy Containers
docker-compose up -d
# Load database and fixtures
composer dbPrepare
```

### Usage

```bash
# Launch local server in background
symfony serve -d
# See the result at https://127.0.0.1:8000/
symfony open:local
```

#### Testing

```bash
# Validate composer.json and composer.lock
composer validate --strict
# Check for known vulnerabilities in dependencies
symfony check:security
# Perform tests (requires x-debug enabled for generate a test coverage report in tests/CoverageReport)
composer phpUnit
# Do static analysis of php code
composer phpStan
# Fix php code to meet the PSR12 recommendations
composer phpFix
# Lint container, twig and yaml files
composer lint
# All-in : testing pretty much like the CI
composer test
```
