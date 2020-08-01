<?php

namespace Core;

use Exception;
use PDO;

class MainController
{

    protected $pdo;
    private $type = [
        "post" => "SELECT * FROM posts ORDER BY postDate DESC, postID DESC",
        "comment" => "SELECT * FROM comments ORDER BY commentDate ASC, commentID ASC",
        "image" => "SELECT * FROM images",
        "singlePost" => "SELECT * FROM posts WHERE postID = :id LIMIT 1",
        "deletePost" => "DELETE FROM posts WHERE postID = :id LIMIT 1",
        "singleComment" => "SELECT * FROM comments WHERE commentID = :id LIMIT 1",
        "singleUser" => "SELECT * FROM user WHERE userName = :id LIMIT 1",
        "deleteComment" => "DELETE FROM comments WHERE commentID = :id LIMIT 1"
    ];

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    function getAll($index)
    {
        $stmt = $this->pdo->prepare($this->type[$index]);
        if ($stmt) {
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        } else {
            return NULL;
        }
    }

    function getSingle ($index, $id) {
        $stmt = $this->pdo->prepare($this->type[$index]);
        if ($stmt) {
            $stmt->execute(['id' => $id]);
            $result = $stmt->fetchAll();
            return $result;
        } else {
            return NULL;
        }
    }

    function deleteObject ($index, $id) {

        $stmt = $this->pdo->prepare($this->type[$index]);
        if ($stmt) {
            $stmt->execute(['id' => $id]);
        }
    }

    public function deleteTemp() {
        $files = glob("tmpImg/{$_SESSION['userID']}/*");

        foreach($files as $file) {
            unlink($file);
        }
    }
}
