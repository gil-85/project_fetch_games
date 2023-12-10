<?php
session_start();
require_once("../Model/users_model.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["action"])) {

  $action = $_POST["action"];

  
  if ($action === 'searchIfUserExist') {
  
    $email = $_POST['email'];
    $logname = $_POST['logname'];

    try{
      $data = array('response' => searchIfUserExist($email, $logname));
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }
    echo json_encode($data); 

  }

  if ($action === 'signIn') {

    $email = $_POST['email'];
    $logname = $_POST['logname'];
    $avatar = $_POST['avatar'];
    $password = $_POST['password'];

    //// INPUT SANITIZATION BEFORE WRITING IN THE DATABASE, THE $AVATAR VALUE DOES NOT COME FROM USERS INPUT ////
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $logname = htmlspecialchars($logname, ENT_QUOTES, 'UTF-8');
    $password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');

    try{
      $result = signIn($email, $logname, $password, $avatar);

      /////////////////////////////////////////
      $data = array('response' => $result);
      
      echo json_encode($data); 
      ///////////////////////////////////////////////
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
      echo json_encode($data); 
    }
 
    // $_SESSION['email'] = $email;
    // $_SESSION['logname'] = $logname;
    // $_SESSION['avatar'] = $avatar;
  }


////////////////////////////////////////////////////////////////

  // if ($action === 'searchUser') {
  //   $emailogname = $_POST['emailogname'];
  //   $password = $_POST['password'];

  //   try{

  //     $data = array('response' => searchUser($emailogname, $password));

  //   }catch(Exception $e){
  //     $data = array('response' => 'Error: ' . $e->getMessage());
  //   }
    
  //   echo json_encode($data); 

  // }



  if ($action === 'logIn') {
    if(isset($_POST['email'])){
      $logId = $_POST['email'];
    }else{
      $logId = $_POST['emailogname'];
    }
    
    $password = $_POST['password'];
   
    try{

      $user = logIn($logId, $password);

       if($user){
      
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['logname'] = $user['logname'];
        $_SESSION['avatar'] = $user['avatar'];

        $data = array('response' => true);
      }else{
        $data = array('response' => 'User not found');
      }
    
      
      echo json_encode($data); 

    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
      echo json_encode($data); 
    }
    
   
  }


  if($action === 'updateUser') {

    $logname = $_POST['logname'];
    $avatar = $_POST['avatar'];


    try{

      
      $result = updateUser($logname, $avatar);


      if ($result){

        $_SESSION['logname'] = $logname;
        $_SESSION['avatar'] = $avatar ;  
      }

      $data = array('response' =>  $result);
      
      echo json_encode($data); 
  
    
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
      echo json_encode($data); 
    }
  }



} else {
  die("Wrong path");
}
