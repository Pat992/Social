<?php 

use Core\Images;

require_once "../controller/imageController.php";

if($_FILES['image']) {
    Images::saveTemp();
}
else {
    echo "Oha";
}
