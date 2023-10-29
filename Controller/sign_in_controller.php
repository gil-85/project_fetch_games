<?php
session_start();
require_once("../Controller/dbh.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $logname = $_POST['logname'];
    $email = $_POST['email'];
    $_SESSION['logname'] = $logname;
    $_SESSION['email'] = $email;
    
} else {
    $_SESSION['logname'] = 'FAIL';
}
?>

//header('Location: ../index.php');
//exit;
