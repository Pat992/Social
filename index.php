<?php
session_start();

require_once __DIR__ . "/router.php";

use Core\DatabaseConnect;
use Core\Post;
use Core\User;
use Core\Comment;
use Builder\PostBuilder;
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

if (isset($_POST['name']) && !isset($_SESSION['userName'])) {
    if (isset($_POST['login'])) {
        $user->loginUser($_POST['name'], $_POST['password']);
    } else if (isset($_POST['register'])) {
        $user->registerUser($_POST['name'], $_POST['email'], $_POST['password']);
    }
}

if (isset($_GET['nav'])) {
    $navOptions = htmlspecialchars($_GET['nav']);

    switch ($navOptions) {
        case 'logout': 
            $user->logoutUser();
            break;
    }
}


if (isset($_POST['post'])) {
    $post->newPost();
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
    require __DIR__ . "/views/navbar.html";
    require __DIR__ . "/views/newPost.html";
    $postBuilder = new PostBuilder($post->getAll('post'), $comment->getAll('comment'), $comment->getAll('image'));
} else {
    
    require __DIR__ . "/views/login.html";
}

require __DIR__ . "/views/footer.html";
