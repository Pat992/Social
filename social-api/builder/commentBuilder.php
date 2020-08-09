<?php

namespace Builder;

class CommentBuilder
{
    public function getComments($post, $comments)
    {
        $commentJSON = [];

        if ($comments != NULL) {
            foreach ($comments as $comment) {
                if($comment['post_IDFK'] != $post) {
                    //var_dump($comment['commentID']);
                    continue;
                }
                $commentArr = [
                    "commentId" => $comment['commentID'],
                    "comment" => $comment['commentContent'],
                    "user" => $comment['user_name'],
                    "deletable" => $comment['user_IDFK'] == $_SESSION['userID'] ? true : false
                ];
                array_push($commentJSON, $commentArr);
            }
        } 
        return ($commentJSON);
    }
}
