<?php

namespace Builder;

class CommentBuilder
{

    private $commentJSON = [];

    public function getComments($post, $comments)
    {
        if ($comments != NULL) {
            foreach ($comments as $comment) {
                if($comment['post_IDFK'] != $post) {
                    continue;
                }
                $commentArr = [
                    "commentId" => $comment['commentID'],
                    "comment" => $comment['commentContent'],
                    "user" => $comment['user_name'],
                    "deletable" => $comment['user_IDFK'] == $_SESSION['userID'] ? true : false
                ];
                array_push($this->commentJSON, $commentArr);
            }
        } 
        return ($this->commentJSON);
    }
}
