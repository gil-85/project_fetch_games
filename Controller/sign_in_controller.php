<?php
session_start();
require_once("../Controller/dbh.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $logname = $_POST['logname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $avatar = $_POST['avatar'];
    
  
    $_SESSION['logname'] = $logname;
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    $_SESSION['avatar'] = $avatar;
    
} else {
  header('Location: ../index.php');
}
?>

//header('Location: ../index.php');
//exit;
