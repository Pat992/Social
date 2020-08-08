<?php



namespace Core;



use Exception;

use PDO;



class DatabaseConnect

{

    private $pdo;



    public function __construct()

    {

        try {
            $this->pdo = new PDO("mysql:host=localhost; dbname=social; charset=utf8", "root", "");
        } catch (Exception $e) {

	    echo "<h1>500</h1> <h2>Server-Error</h2>";

            die();

        }

        $this->pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    }



    public function getPdo() {

        return $this->pdo;

    }

}

