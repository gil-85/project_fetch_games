<?php
  session_start();
  
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $email = $_POST['email'];
    $logname = $_POST['logname'];
    $password = $_POST['password'];
    $avatar = $_POST['avatar'];

    require_once("dbh.php");

    $query = "INSERT INTO users (email, logname, password, avatar) VALUES (?,?,?,?);";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email, $logname, $password, $avatar]);
    $pdo = null;
    $stmt = null; 

    $_SESSION['email'] = $email;
    $_SESSION['logname'] = $logname;
    $_SESSION['password'] = $password;
    $_SESSION['avatar'] = $avatar;

  }else{
    die("Wrong path");
  }
