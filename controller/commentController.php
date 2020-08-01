<?php 

namespace Core;

require_once __DIR__ . "/mainController.php";

class Comment extends MainController {

    public function newComment() {
        $comment = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');
        $post = htmlspecialchars($_POST['postToComment'], ENT_QUOTES, 'UTF-8');
        if(!empty($comment)) {
            $stmt = $this->pdo->prepare("INSERT INTO comments (commentContent, post_IDFK, user_IDFK, user_name, commentDate) VALUES (:comment, :post, :owner, :user, now())");
            $stmt->execute([
                'user' => $_SESSION['userName'],
                'comment' => $comment,
                'post' => $post,
                'owner' => $_SESSION['userID']
            ]);
        }
        header("Location: {$_SERVER['PHP_SELF']}");
    }

    public function deleteComment() {
        $delete = htmlspecialchars($_POST['to-delete']);
        $toDelete = $this->getSingle("singleComment", $delete);
        if(htmlspecialchars($toDelete[0]['user_IDFK']) === htmlspecialchars($_SESSION['userID'])){
            $this->deleteObject('deleteComment', $toDelete[0]['commentID']);
        }
        header("Location: {$_SERVER['PHP_SELF']}");
    }
}