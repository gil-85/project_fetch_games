<?php

function searchIfUserExist($email, $logname) {
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
 

function searchUser($emailogname, $password){
   require_once("dbh.php");
   $query = "SELECT * FROM users WHERE (email = ? OR logname = ?) AND password = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$emailogname, $emailogname, $password]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}

function logIn($id){
   require_once("dbh.php");
   $query = "SELECT email, logname, avatar FROM users WHERE user_id = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$id]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}

/* 
function logIn($email, $password) {
   require_once("dbh.php");
   $query = "SELECT email, logname, password, avatar FROM users WHERE email = ? OR logname = ? AND password = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $logname, $password]); // Repeat $email for the second placeholder
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}
 */