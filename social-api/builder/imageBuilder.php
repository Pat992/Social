<?php 

namespace Builder;

class ImageBuilder 
{
    public function getImages($post, $images) {
        $imageJSON = [];

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

            array_push($imageJSON, $imageArr);
        }

        return ($imageJSON);
    }
}