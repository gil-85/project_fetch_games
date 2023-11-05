<?php

function  dbSignUp($email, $logname, $password, $avatar){
   require_once("../Model/dbh.php");
   $query = "INSERT INTO users (email, logname, password, avatar) VALUES (?,?,?,?);";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $logname, $password, $avatar]);
   $pdo = null;
   $stmt = null; 
}