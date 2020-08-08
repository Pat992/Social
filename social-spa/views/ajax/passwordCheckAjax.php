<?php

use Core\User;
use Core\DatabaseConnect;

require_once "../controller/userController.php";
require_once "../controller/databaseConnect.php";

$db = new DatabaseConnect();
$users = new User($db->getPdo());

$getUser = $users->getSingle('singleUser', $_POST['name']);

if($getUser) {
    if(password_verify(htmlspecialchars($_POST['password']), $getUser[0]['userPassword'])) {
        echo 0;
    }
    else {
        echo 1;
    }
}