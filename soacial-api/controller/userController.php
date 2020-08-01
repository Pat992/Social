<?php

namespace Core;

require_once __DIR__ . "/mainController.php";

use Exception;

class User extends MainController
{
    public function loginUser($name, $password)
    {
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM user WHERE userName=:username");
            $stmt->execute(['username' => $name]);
            $user = $stmt->fetch();
            
            if(!$user) {
                http_response_code(401);
                echo json_encode("User not Existing");
                die();    
            }
            if(password_verify($password, $user['userPassword'])) {
                $this->createSession($name);
            }
            else if($user){
                http_response_code(401);
                echo json_encode("Wrong credentials");
                die();
            }
         } catch (Exception $e) {
            http_response_code(401);
            echo json_encode("User not Existing");
            die();
        }
    }

    public function registerUser($name, $email, $password)
    {
        $user = $this->getUser($name);

        if (!$user) {
            $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
            $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
            $password = password_hash($password, PASSWORD_DEFAULT);

            try {
                $stmt = $this->pdo->prepare("INSERT INTO user (userName, userEmail, userPassword) VALUES(:name, :email, :password)");
                $user = $stmt->execute([
                    'name' => $name,
                    'email' => $email,
                    'password' => $password
                ]);
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode("Error creating user, please try again later.");
                die();
            }
            $this->createSession($name);
        } else {
            http_response_code(401);
            echo json_encode("User already existing");
            die();
        }
    }

    public function logoutUser() {
        //$this->deleteDir();
        session_destroy();

        header("Location: {$_SERVER['PHP_SELF']}");
    }

    private function getUser($name)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM user WHERE userName=:username LIMIT 1");
        $stmt->execute(['username' => $name]);
        $user = $stmt->fetch();

        return $user;
    }

    private function createSession ($name) {
        $id = $this->getUser($name);
        $id = $id['userID'];
        $_SESSION['userName'] = $name;
        $_SESSION['userID'] = $id;
        session_regenerate_id(true);
        
        //$this->createDir();
    }
/*
    private function createDir() {
        $this->deleteDir();
        mkdir("tmpImg/{$_SESSION['userID']}");
    }

    private function deleteDir() {
        if(file_exists("tmpImg/{$_SESSION['userID']}")) {
            $this->deleteTemp();
            rmdir("tmpImg/{$_SESSION['userID']}");
        }
    }
    */
}
