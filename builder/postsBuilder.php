<?php

namespace Builder;

require_once __DIR__ . "/commentBuilder.php";
require_once __DIR__ . "/imageBuilder.php";

class PostBuilder{

    private $postHtml;
    private $directory = "views/posts.html";
    private $deleteDIR = "views/delete.html";

    public function __construct($posts, $comments, $images)
    {
        $commentsBuilder = new CommentBuilder();
        $commentsToPost = NULL;
        $imagesToPost = NULL;
        $imageBuilder = new ImageBuilder();

        foreach($posts as $post) {
            $commentsToPost = $commentsBuilder->getComments($post['postID'], $comments);
            $this->postHtml = file_get_contents($this->directory);
            $delete = file_get_contents($this->deleteDIR);
            $this->postHtml = str_replace('[USER]', $post['userName'], $this->postHtml);
            $this->postHtml = str_replace('[DATE]', $post['postDate'], $this->postHtml);
            $this->postHtml = str_replace('[POST_CONTENT]', $post['postContent'], $this->postHtml);
            $this->postHtml = str_replace('[POST_NUMBER]', $post['postID'], $this->postHtml);
            $this->postHtml = str_replace('[COMMENT_SECTION]', $commentsToPost, $this->postHtml);
            $this->postHtml = str_replace('[IMAGES]', $imageBuilder->getImages($post['postID'], $images), $this->postHtml);

            if($post['postOwner'] == $_SESSION['userID']) {
                $delete = str_replace('[TO_DELETE]', $post['postID'], $delete);
                $delete = str_replace('[WHAT]', 'Post', $delete);
                $this->postHtml = str_replace('[DELETE]', $delete, $this->postHtml);
            }
            else {
                $this->postHtml = str_replace('[DELETE]', '', $this->postHtml);
            }
            echo $this->postHtml;;
        }
    }
}