<?php
session_start();
require_once("../Model/users_model.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["action"])) {

  $action = $_POST["action"];

  
  if ($action === 'checkEmail') {
  
    $email = $_POST['email'];
    $logname = $_POST['logname'];

    try{
      $data = array('response' => checkEmail($email, $logname));
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
      signIn($email, $logname, $password, $avatar);
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




////////////////////////////////////////////////////////////////




  if ($action === 'checklog') {
    $emailogname = $_POST['emailogname'];
    $password = $_POST['password'];

    try{

      $data = array('response' => checkInputs($emailogname, $password));

    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }
    
    echo json_encode($data); 

  }



  if ($action === 'loging') {
   
    $id = $_POST['id'];
    try{

      $user = logIng($id);
      $email = $user['email'];
     $logname = $user['logname'];
    // $password = $user['password'];  // <---- To remove !!!!!
      $avatar = $user['avatar'];
      $data = array('response' => 'log oki');

    }catch(Exception $e){
      $data = array('response' => 'Error: ' . $e->getMessage());
    }
    
    echo json_encode($data); 

 

    
    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    //$_SESSION['password'] = $password;  // <---- To remove !!!!!
    $_SESSION['avatar'] = $avatar;
  }



} else {
  die("Wrong path");
}

//$userExists = getUserByEmail($email);