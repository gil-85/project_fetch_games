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


function checkInputs($email, $password){
   require_once("dbh.php");
   $query = "SELECT user_id, email, logname, password, avatar FROM users WHERE email = ? AND password = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $password]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}

function loging($id){
   require_once("dbh.php");
   $query = "SELECT email, logname, avatar FROM users WHERE user_id = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$id]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}