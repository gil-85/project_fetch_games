<?php
session_start();
require_once("../Model/users_model.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST["action"]) && $_POST["action"] === 'signing') {
    $email = $_POST['email'];

    //$userExists = getUserByEmail($email);


    
    $logname = $_POST['logname'];
    $password = $_POST['password'];
    $avatar = $_POST['avatar'];

    signUp($email, $logname, $password, $avatar);

    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    $_SESSION['password'] = $password;
    $_SESSION['avatar'] = $avatar;
  }
} else {
  die("Wrong path");
}
