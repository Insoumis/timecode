

# Setup

Setup for linux (tested on ubuntu 16.04)

requirements :

* git
* docker
* docker-compose

steps :

* clone this repository (git clone)

    $ cd timecode
    $ mkdir local

* run servers

    $ docker-compose up drupal

* download a timecode mysql backup to **local/backup.mysql**

* load database (this may take a while)

    $ cat local/backup.mysql | docker exec -i timecode_mysql_1 mysql -u timecode-user --password=timecode-pwd timecode-db

* open your browser at http://localhost:8080

* finally stop servers when you're done

    $ docker-compose stop


# Running Drush commands

    $ docker-compose run --rm drush --help
    $ docker-compose run --rm drush status
    $ docker-compose run --rm drush pm-list --type=Module --status=enabled
    $ docker-compose run --rm drush cache-clear

see https://drushcommands.com/drush-7x/ for more commands.

# export your mysql local database

    $ docker exec timecode_mysql_1 mysqldump -u timecode-user --password=timecode-pwd timecode-db > local/backup.mysql
