<?php

namespace Core;

require_once __DIR__ . "/imageController.php";

class Post extends Images
{
    public function newPost($content)
    {

        $post = htmlspecialchars($content, ENT_QUOTES, 'UTF-8');
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

    public function deletePost($postId) {
        $delete = htmlspecialchars($postId);
        try {
            $toDelete = $this->getSingle("singlePost", $delete);
            if($toDelete && (htmlspecialchars($toDelete[0]['postOwner']) === htmlspecialchars($_SESSION['userID']))){
                $this->deleteObject('deletePost', $toDelete[0]['postID']);
                http_response_code(200);
            }
            else {
                http_response_code(400);
            }
        } catch(Exception $e) {
            http_response_code(400);
        }
    }
}
