<?php 

use Core\User;
use Core\DatabaseConnect;

require_once "../controller/userController.php";
require_once "../controller/databaseConnect.php";

$db = new DatabaseConnect();
$users = new User($db->getPdo());

$userExisting = $users->getSingle('singleUser', $_POST['name']);

if($userExisting) {
    echo 1;
}
else {
    echo 0;
}