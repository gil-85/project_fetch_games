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
   $result = $stmt->execute([$email, $logname, $password, $avatar]);
   $pdo = null;
   $stmt = null;
   return $result;
}
 

function searchUser($emailogname, $password){
   require_once("dbh.php");
   $query = "SELECT email FROM users WHERE (email = ? OR logname = ?) AND password = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$emailogname, $emailogname, $password]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}

function logIn($email){
   require_once("dbh.php");
   $query = "SELECT user_id, email, logname, avatar FROM users WHERE email = ?;";
   $stmt = $pdo->prepare($query);
   $stmt->execute([$email]);
   $user = $stmt->fetch(PDO::FETCH_ASSOC);
   $pdo = null;
   $stmt = null;
   return $user;
}





// function updateUser($logname, $avatar){
//    require_once("dbh.php");
//    $id = $_SESSION['user_id'];

//    $query = "UPDATE users SET logname=?, avatar=? WHERE user_id=?";
//    $stmt = $pdo->prepare($query);
//    $stmt->execute([$logname, $avatar, $id]);
//    $pdo = null;
//    $stmt = null;
//    return null;
// }

function updateUser($logname, $avatar) {
   require_once("dbh.php");
   $id = $_SESSION['user_id'];

   $query = "UPDATE users SET logname=?, avatar=? WHERE user_id=?";
   $stmt = $pdo->prepare($query);

   // Check if the query was executed successfully
   $result = $stmt->execute([$logname, $avatar, $id]);

   // Close the connection and statement
   $pdo = null;
   $stmt = null;

   // Return success or failure
   return $result;
}
