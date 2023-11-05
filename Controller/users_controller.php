<?php
  session_start();
  
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  
    require_once("../Model/users_model.php");

    if (isset($_POST["action"]) and $_POST["action"] === 'signing') {

      $email = $_POST['email'];
      $logname = $_POST['logname'];
      $password = $_POST['password'];
      $avatar = $_POST['avatar'];

      dbSignUp($email, $logname, $password, $avatar);
  
      $_SESSION['email'] = $email;
      $_SESSION['logname'] = $logname;
      $_SESSION['password'] = $password;
      $_SESSION['avatar'] = $avatar;

    }


  }else{
    die("Wrong path");
  }
