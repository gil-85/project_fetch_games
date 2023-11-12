<?php
session_start();
require_once("../Model/users_model.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["action"])) {
  $action = $_POST["action"];


  
  if ($action === 'checkEmail') {
  
    $email = $_POST['email'];

    try{
      $data = array('response' => checkEmail($email));
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }
    echo json_encode($data); 

  }

  if ($action === 'signing') {

    $email = $_POST['email'];

    $logname = $_POST['logname'];
    $password = $_POST['password'];
    $avatar = $_POST['avatar'];

    try{
      signUp($email, $logname, $password, $avatar);
      $data = array('response' => 'oki');
    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }

    echo json_encode($data); 

    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    $_SESSION['password'] = $password;
    $_SESSION['avatar'] = $avatar;
  }





} else {
  die("Wrong path");
}

//$userExists = getUserByEmail($email);