<?php

namespace Builder;

require_once __DIR__ . "/commentBuilder.php";
require_once __DIR__ . "/imageBuilder.php";

class PostBuilder{

    private $postJSON = [];

    public function __construct($posts, $comments, $images)
    {
        $commentsBuilder = new CommentBuilder();
        $commentsToPost = [];
        $imagesToPost = [];
        $imageBuilder = new ImageBuilder();

        foreach($posts as $post) {
            // Get comments
            $commentsToPost = $commentsBuilder->getComments($post['postID'], $comments);
            // Get images
            $imagesToPost = $imageBuilder->getImages($post['postID'], $images);

            // Post-Object
            $postArr = [
                "postId" => $post['postID'],
                "userName" => $post['userName'],
                "postOwner" => $post['postOwner'],
                "postContent" => $post['postContent'],
                "postDate" => $post['postDate'],
                "deletable" => $post['postOwner'] == $_SESSION['userID'] ? true : false,
                "commentsToPost" => $commentsToPost,
                "imagesToPost" => $imagesToPost
            ];
            // push into postJSON
            array_push($this->postJSON, $postArr);
        }
        echo json_encode($this->postJSON);
    }
}