<?php

namespace Core;

require_once __DIR__ . "/imageController.php";

class Post extends Images
{
    public function newPost()
    {

        $post = htmlspecialchars($_POST['post'], ENT_QUOTES, 'UTF-8');
        $stmt = $this->pdo->prepare("INSERT INTO posts (userName, postContent, postDate, postOwner) VALUES (:user, :content, now(), :owner)");
        $stmt->execute([
            'user' => $_SESSION['userName'],
            'content' => $post,
            'owner' => $_SESSION['userID']
        ]);
        
        $result = $this->pdo->lastInsertId();

        $this->saveImage($result);

        header("Location: {$_SERVER['PHP_SELF']}");
    }

    public function deletePost() {
        $delete = htmlspecialchars($_POST['to-delete']);
        $toDelete = $this->getSingle("singlePost", $delete);
        if(htmlspecialchars($toDelete[0]['postOwner']) === htmlspecialchars($_SESSION['userID'])){
            $this->deleteObject('deletePost', $toDelete[0]['postID']);
        }
        header("Location: {$_SERVER['PHP_SELF']}");
    }
}
