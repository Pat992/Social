<?php
// Headers to get back JSON-Data
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();

require_once __DIR__ . "/router.php";

use Core\DatabaseConnect;
use Core\Post;
use Core\User;
use Core\Comment;
use Builder\PostBuilder;
use Builder\LoginBuilder;
use Core\Images;

if (!isset($dba)) {
    $dba = new DatabaseConnect();
    $pdo = $dba->getPdo();
}
if (!isset($user)) {
    $user = new User($pdo);
}
if (!isset($post)) {
    $post = new Post($pdo);
}
if (!isset($comment)) {
    $comment = new Comment($pdo);
}

if (!isset($images)) {
    $images = new Images($pdo);
}

// check if user wants to logout
if (isset($_GET['nav'])) {
    $navOptions = htmlspecialchars($_GET['nav']);

    switch ($navOptions) {
        case 'logout': 
            $user->logoutUser();
            break;
    }
}

// Add a new post
if (isset($_POST['post'])) {
    $post->newPost($_POST['content']);
}

if (isset($_POST['comment'])) {
    $comment->newComment();
}

if(isset($_POST['deletePost'])) {
    $post->deletePost();
}

if(isset($_POST['deleteComment'])) {
    $comment->deleteComment();
}

if (isset($_SESSION['userName'])) {
    $postBuilder = new PostBuilder($post->getAll('post'), $comment->getAll('comment'), $comment->getAll('image'));
} else {
    // get data
    $data = json_decode(file_get_contents('php://input'), true);
    //if no data, then return unauthorized
    if(!$data) {
        http_response_code(401);
        echo json_encode("unauthorized");
    }
    // else try to login
    else {
        // is user loggin-in?
        if(array_key_exists('login', $data)) {
            $user->loginUser($data['login']['name'], $data['login']['password']);
        }
        // is user registering?
        else if(array_key_exists('register', $data)) {
            $user->registerUser($data['register']['name'], $data['register']['email'], $data['register']['password']);
        }
    }
}