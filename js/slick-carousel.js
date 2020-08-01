$(document).ready(function() {
    $(".slick-carousel").slick({
        centerMode: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //dots: true,
    });

    $(".post-image").on("click", function() {
        $(this).toggleClass("big-image");
    });
});