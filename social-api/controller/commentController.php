<?php 

namespace Core;

require_once __DIR__ . "/mainController.php";

class Comment extends MainController {

    public function newComment($commentFromSPA, $postToComment) {
        $comment = htmlspecialchars($commentFromSPA, ENT_QUOTES, 'UTF-8');
        $post = htmlspecialchars($postToComment, ENT_QUOTES, 'UTF-8');
        if(!empty($comment)) {
            $stmt = $this->pdo->prepare("INSERT INTO comments (commentContent, post_IDFK, user_IDFK, user_name, commentDate) VALUES (:comment, :post, :owner, :user, now())");
            $res = $stmt->execute([
                'user' => $_SESSION['userName'],
                'comment' => $comment,
                'post' => $post,
                'owner' => $_SESSION['userID']
            ]);
        }
        if($res) {
            http_response_code(201);
        }
        else {
            http_response_code(400);
        }
    }

    public function deleteComment($commentId) {
        $delete = htmlspecialchars($commentId);
        try {
            $toDelete = $this->getSingle("singleComment", $delete);

            if($toDelete && (htmlspecialchars($toDelete[0]['user_IDFK']) === htmlspecialchars($_SESSION['userID']))){
                $this->deleteObject('deleteComment', $toDelete[0]['commentID']);
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