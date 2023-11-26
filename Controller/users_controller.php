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
    $password = $_POST['password'];
    $avatar = $_POST['avatar'];

    //// INPUT SANITIZATION BEFORE WRITING IN THE DATABASE, THE $AVATAR VALUE DOES NOT COME FROM USERS INPUT ////
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $logname = htmlspecialchars($logname, ENT_QUOTES, 'UTF-8');
    $password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');

    try{
      signIn($email, $logname, $password, $avatar);

      /////////////////////////////////////////
      $data = array('response' => 'oki');
      echo json_encode($data); 
      ///////////////////////////////////////////////
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
      echo json_encode($data); 
    }


    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    $_SESSION['avatar'] = $avatar;
  }




////////////////////////////////////////////////////////////////




  if ($action === 'searchUser') {
    $emailogname = $_POST['emailogname'];
    $password = $_POST['password'];

    try{

      $data = array('response' => searchUser($emailogname, $password));

    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }
    
    echo json_encode($data); 

  }



  if ($action === 'logIn') {
   
    $id = $_POST['id'];
    try{

      $user = logIn($id);
      $email = $user['email'];
      $logname = $user['logname'];
      $avatar = $user['avatar'];
      /////////////////////////////////////////
      $data = array('response' => 'log oki');
      echo json_encode($data); 
          /////////////////////////////////////////
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
      echo json_encode($data); 
    }
    
    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    $_SESSION['avatar'] = $avatar;
  }



} else {
  die("Wrong path");
}
