

# Setup

Setup for linux (tested on ubuntu 16.04)

## requirements

* git (2.7.4 or higher)
* docker (17.05.0-ce or higher)
* docker-compose (1.19.0 or higher)

## steps

clone this repository and initialize some local folders

    $ git clone git@github.com:Insoumis/timecode.git
    $ cd timecode
    $ mkdir local
    $ mkdir www/sites/default/files
    $ sudo chown -R www-data:www-data www/sites/default/files
    $ cp docker-compose.dev.yml docker-compose.override.yml

run servers

    $ docker-compose up drupal

download a timecode mysql backup to **local/backup.mysql**

load database (this may take a while)

    $ cat local/backup.mysql | docker exec -i timecode_mysql_1 mysql -u timecode-user --password='timecode-pwd' timecode-db

open your browser at http://localhost:8080

finally stop servers when you're done

    $ docker-compose stop


# Running Drush commands

    $ docker-compose run --rm drush --help
    $ docker-compose run --rm drush status
    $ docker-compose run --rm drush pm-list --type=Module --status=enabled
    $ docker-compose run --rm drush cache-clear

see https://drushcommands.com/drush-7x/ for more commands.

# export your mysql local database

    $ docker exec timecode_mysql_1 mysqldump -u timecode-user --password='timecode-pwd' timecode-db > local/backup.mysql

# Configuration for a production environement

create a copy of **dev.env** to **prod.env** and set safe passwords for environement variables (using tools like http://www.sethcardoza.com/tools/random-password-generator/) : 

* DRUPAL_SALT
* MYSQL_PASSWORD
* MYSQL_ROOT_PASSWORD

create the docker compose file for production

    $ cp docker-compose.prod.yml docker-compose.override.yml

and replace some values with production settings (exposed port and resources limits)
