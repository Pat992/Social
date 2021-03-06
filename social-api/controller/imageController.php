<?php

namespace Core;

if(!isset($_SESSION)) {
    session_start();
}

require_once __DIR__ . "/mainController.php";

class Images extends MainController {

    public function saveImage($post) {
        if($_FILES) {
            foreach($_FILES as $file) {
                // if($file['size'] > 300000) {
                //     continue;
                // }
                $imgName = htmlspecialchars($file['name']);
                move_uploaded_file($file['tmp_name'], "./images/{$post}-{$imgName}");
                $stmt = $this->pdo->prepare("INSERT INTO images (imageName, user_IDFK, post_IDFK) VALUES (:name, :user, :post)");
                $stmt->execute([
                    'name' => "{$post}-{$imgName}",
                    'user' => $_SESSION['userID'],
                    'post' => $post
                ]);
            }
        }
    }
}