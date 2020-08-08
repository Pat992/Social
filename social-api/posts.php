<?php
session_start();

require_once __DIR__ . "/router.php";

use Core\DatabaseConnect;
use Core\Post;

// Is user not logged-in?
if (!isset($_SESSION['userName'])) {
    http_response_code(401);
    return;
}
// else get classes
if (!isset($dba)) {
    $dba = new DatabaseConnect();
    $pdo = $dba->getPdo();
}
if (!isset($post)) {
    $post = new Post($pdo);
}

// get data
$data = json_decode(file_get_contents('php://input'), true);
// did user send data? 
if($data) {
    // Create a new post
    if(array_key_exists('post', $data)) {
        $post->newPost($data['post']);
    } 
    // delete a post
    else if(array_key_exists('delete', $data)) {
        $post->deletePost($data['delete']);
    }
}