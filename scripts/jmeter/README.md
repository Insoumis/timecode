# Test de montée en charge Timecode (videosfranceinsoumise.fr)

## Setup

* télécharger JMeter 3.3.x : http://jmeter.apache.org/download_jmeter.cgi et extraire l'archive
* avoir java d'installé (java 8+)
* lancer jmeter : il y a un jmeter.bat (windows) et jmeter.sh (linux/mac) dans le répertoire bin
* ouvrir le scenario de test avec jmeter (fichier TIMECODE.jmx)

note : les détails du scenario sont dans l'arborescence dans le panel de gauche.

## Configuration

La configuration ne peut être modifiée pendant l'exécution des tests, pour celà il faut les stopper et les relancer.

* Test Plan / HTTP Request Production : activer cet élément pour jouer les tests sur le serveur de production (videosfranceinsoumise.fr), désactivé par défaut.
* Test Plan / HTTP Request Local : activer cet élément pour jouer les tests sur votre serveur local (localhost), activé par défaut.
* Test Plan / Configuration / wait_between_pages : règle le temps d'attente entre les pages (simule le temps de lecture de l'utilisateur) en secondes, 500ms par défaut.
* Test Plan / Users / Number of thread : règle le nombre d'utilisateurs en parralèle.
* Test Plan / Users / Ramp-up Period : règle le temps de montée en charge (en secondes), au bout de cette durée le nombre d'utilisateur est au max (tel que configuré plus haut).
* Test Plan / Users / Loop count : règle le nombre de fois qu'un utilisateur exécute le scenario complet.

## Execution

* effacer les résultat (Run / Clear All)
* puis lancer le test (Run / Start)
* enfin interrompre les tests (Run / Stop)

## Résultat

* Test Plan / Errors : permet de voir les pages en erreurs
* Test Plan / Summary Report : permet de voir les stats (temps de réponse, etc..) des pages.
* Test Plan / Graph Results : permet de voir les stats sous forme de graphique.
