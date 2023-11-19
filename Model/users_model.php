<?php

function checkEmail($email, $logname) {
   require_once("dbh.php");
  
   $query = "SELECT email, logname FROM users WHERE email = ? OR logname = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $logname]);
   
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
} 
   


function  signIn($email, $logname, $password, $avatar){
   require_once("dbh.php");
   $query = "INSERT INTO users (email, logname, password, avatar) VALUES (?,?,?,?);";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $logname, $password, $avatar]);
   $pdo = null;
   $stmt = null;
   return null;
}


function  logIn($email, $password){
   require_once("dbh.php");
   $query = "SELECT email, logname, password, avatar FROM users WHERE email = ? AND password = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $password]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}