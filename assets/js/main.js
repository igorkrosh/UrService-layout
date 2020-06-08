let practiceSliderImages = $('.practice-slider .practice-images .owl-carousel');
let practiceSliderDescription = $('.practice-slider .practice-description .owl-carousel');

$(document).ready(function(){
    
    SetOwlCarousel();
    SetNavbarMenu();
});


function SetOwlCarousel() 
{
    $(".carousel .owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        dotsContainer: '.carousel .carousel-nav-dots',
        navContainer: '.carousel .carousel-nav-arrows',
        navText:["<img src='assets/images/icons/slider-arrow.png'>","<img src='assets/images/icons/slider-arrow.png'>"],
    });
    $(".our-clients .owl-carousel").owlCarousel({
        items: 6,
        margin: 50,
        autoWidth: true
        
    });
    $('.practice-slider .practice-images .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        dotsContainer: '.practice-slider .carousel-nav-dots',
        navContainer: '.practice-slider .carousel-nav-arrows',
        navText:["<img src='assets/images/icons/slider-arrow-dark.png'>","<img src='assets/images/icons/slider-arrow-dark.png'>"],
    }).on('changed.owl.carousel', SyncPosition);

    $('.practice-slider .practice-description .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        loop: false,
        dotsData: false,
        mouseDrag: false
    });

    $('.reviews .owl-carousel').owlCarousel({
        items: 2,
        margin: 35,
        dots: true,
        nav: true,
        dotsContainer: '.reviews .carousel-nav-dots',
        navContainer: '.reviews .carousel-nav-arrows',
        navText:["<img src='assets/images/icons/slider-arrow.png'>","<img src='assets/images/icons/slider-arrow.png'>"],
        slideBy: 2,
    })
}

function SyncPosition(callback)
{
    practiceSliderDescription.trigger('to.owl.carousel', [callback.item.index, 500, true]);
}

function SetNavbarMenu() 
{
    $('.btn-menu').on('click', function() {
        $('.menu-wrapper').addClass('active')
    })
    $('.btn-close').on('click', function() {
        $('.menu-wrapper').removeClass('active')
    })
}