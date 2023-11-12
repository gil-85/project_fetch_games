<?php



function  signUp($email, $logname, $password, $avatar){
   require_once("dbh.php");
   $query = "INSERT INTO users (email, logname, password, avatar) VALUES (?,?,?,?);";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email, $logname, $password, $avatar]);
   $pdo = null;
   $stmt = null;
   return null;
}



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
   