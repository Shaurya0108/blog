
$(document).ready(function(){

    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    //click to toggle menu
    $togglecollapse.click(function() {
        $nav.toggleClass('collapse');
    })


    //owl-carousel for blog
    $('.owl-carousel').owlCarousel();
}); 

    