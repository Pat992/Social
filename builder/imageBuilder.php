<?php 

namespace Builder;

class ImageBuilder 
{
    private $directory = "views/images.html";

    public function getImages($post, $images) {

        $imageHtml = '';

        foreach($images as $image) {
            if($image['post_IDFK'] != $post) {
                continue;
            }
            $imageHtml .= file_get_contents($this->directory);
            $imageHtml = str_replace('[IMAGE_NAME]', $image['imageName'], $imageHtml);
        }

        return $imageHtml;
    }
}