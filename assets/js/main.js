$(document).ready(function(){
    $(".carousel .owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        dotsContainer: '.carousel-nav-dots',
        navContainer: '.carousel-nav-arrows',
        navText:["<img src='assets/images/icons/slider-arrow.png'>","<img src='assets/images/icons/slider-arrow.png'>"],
    });
    $(".our-clients .owl-carousel").owlCarousel({
        items: 6,
        margin: 50,
        autoWidth: true
        
    });
  });