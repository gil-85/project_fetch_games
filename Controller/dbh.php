<?php 

$dsn = "mysql:host=localhost:3307;dbname=players_core";
$dbusername ="root";
$dbpassword ="";

try{
   $pdo = new PDO($dsn, $dbusername, $dbpassword);
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   echo('Connected');
}catch (PDOException $e) {
   echo "Connexion failed : " . $e->getMessage();
}

