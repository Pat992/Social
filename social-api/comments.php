<?php

session_start();

require_once __DIR__ . "/router.php";

use Core\DatabaseConnect;
use Core\Comment;

// Is user not logged-in?
if (!isset($_SESSION['userName'])) {
    http_response_code(401);
}

// get the classes
if (!isset($dba)) {
    $dba = new DatabaseConnect();
    $pdo = $dba->getPdo();
}
if (!isset($comment)) {
    $comment = new Comment($pdo);
}

// else let user write and delete comments
// get data
$data = json_decode(file_get_contents('php://input'), true);
// did user send data? 
if($data) {
    // Create a new comment
    if(array_key_exists('comment', $data) && array_key_exists('postToComment', $data)) {
        $comment->newComment($data['comment'], $data['postToComment']);
    } 
    // delete a comment
    else if(array_key_exists('delete', $data)) {
        $comment->deleteComment($data['delete']);
    }
}