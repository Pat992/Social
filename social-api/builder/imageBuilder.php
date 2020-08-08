<?php 

namespace Builder;

class ImageBuilder 
{
    private $imageJSON = [];

    public function getImages($post, $images) {

        foreach($images as $image) {
            if($image['post_IDFK'] != $post) {
                continue;
            }
            $imageArr = [
                "imageId" => $image['imageID'],
                "imageName" => $image['imageName'],
                "user" => $image['user_IDFK'],
                "post" => $image['post_IDFK']
            ];

            array_push($this->imageJSON, $imageArr);
        }

        return ($this->imageJSON);
    }
}