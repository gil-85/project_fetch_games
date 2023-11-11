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



function checkEmail($email) {
   require_once("dbh.php");
  
      $query = "SELECT user_id FROM users WHERE email = ?;";
      $stmt = $pdo->prepare($query);
      $stmt->execute([$email]);
      
      $user = $stmt->fetch(PDO::FETCH_ASSOC);

      $pdo = null;
      $stmt = null;

      return $user;

} 
   