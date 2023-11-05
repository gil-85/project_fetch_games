<?php



function  signUp($email, $logname, $password, $avatar){

   require_once("dbh.php");
   try{
      $query = "INSERT INTO users (email, logname, password, avatar) VALUES (?,?,?,?);";
      $stmt = $pdo->prepare($query);
      $stmt->execute([$email, $logname, $password, $avatar]);

      $pdo = null;
      $stmt = null; 

      $data = array('response' => 'oki');
   }catch(PDOException $e){
      $data = array('response' => 'not oki');
   }
 
   echo json_encode($data); 
}


/* 

function getUserByEmail($email) {
   require_once("dbh.php");
   try{
      $query = "SELECT user_id FROM users WHERE email = ?;";
      $stmt = $pdo->prepare($query);
      $stmt->execute([$email]);
      
      $user = $stmt->fetch(PDO::FETCH_ASSOC);

      $pdo = null;
      $stmt = null;

      $data = array('response' => 'user');
      echo json_encode($data); 

      return $user;
   }catch(PDOException $e){
      $data = array('response' => 'no user');
      echo json_encode($data); 
   }
   return $data;

} 
   */