<?php

namespace Core;

if(!isset($_SESSION)) {
    session_start();
}

require_once __DIR__ . "/mainController.php";

class Images extends MainController {

    public function saveTemp() {
        $tempDIR = "../tmpImg/{$_SESSION['userID']}/";
        $imgName = htmlspecialchars($_FILES['image']['name']);
        move_uploaded_file($_FILES['image']['tmp_name'], "{$tempDIR}{$imgName}");
    }

    public function saveImage($post) {
        $files = $this->tempData();

        if($files) {
            foreach($files as $file) {
                $stmt = $this->pdo->prepare("INSERT INTO images (imageName, user_IDFK, post_IDFK) VALUES (:name, :user, :post)");
                $stmt->execute([
                    'name' => $file,
                    'user' => $_SESSION['userID'],
                    'post' => $post
                ]);

                rename("tmpImg/{$_SESSION['userID']}/{$file}", "images/{$file}");
            }
            $this->deleteTemp();
        }
    }

    private function tempData() {
        $dir = "tmpImg/{$_SESSION['userID']}";
        $files = [];
        
        if(is_readable($dir)) {
            $allFiles = scandir($dir);

            foreach($allFiles as $newFile) {
                if($newFile == '.' || $newFile == '..') {
                    continue;
                }
                $files[] = $newFile;
            }

            return $files;
        }
        else {
            return 0;
        }
    }
}