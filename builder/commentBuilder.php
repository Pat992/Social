<?php

namespace Builder;

class CommentBuilder
{

    private $commentHtml;
    private $directory = "views/comment.html";
    private $deleteDIR = "views/delete.html";

    public function getComments($post, $comments)
    {
        if ($comments != NULL) {
            $this->commentHtml = "";
            foreach ($comments as $comment) {
                if($comment['post_IDFK'] != $post) {
                    continue;
                }
                $delete = file_get_contents($this->deleteDIR);
                $this->commentHtml .= file_get_contents($this->directory);
                $this->commentHtml = str_replace('[COMMENT]', $comment['commentContent'], $this->commentHtml);
                $this->commentHtml = str_replace('[USERNAME]', $comment['user_name'], $this->commentHtml);
                if($comment['user_IDFK'] == $_SESSION['userID']) {
                    $delete = str_replace('[TO_DELETE]', $comment['commentID'], $delete);
                    $delete = str_replace('[WHAT]', 'Comment', $delete);
                    $this->commentHtml = str_replace('[DELETE]', $delete, $this->commentHtml);
                }
                else {
                    $this->commentHtml = str_replace('[DELETE]', '', $this->commentHtml);
                }
            }
            return $this->commentHtml;
        } else {
            return "";
        }
    }
}
