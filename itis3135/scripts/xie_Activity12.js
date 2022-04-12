$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true, //first image that’s displayed is selected randomly
        auto: true, 
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector:'#id_pager'
    });
});