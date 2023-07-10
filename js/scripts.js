
//INIT OWL SLIDER 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    rtl:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//INIT SLICK SLIDER  
$('.slick-slider').slick({
    rtl:true,
    autoplay:false,
    nav:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//NAVBAR FUNCTIONS 
$('.bars').click( function(){
  $('.menu').fadeIn();
});

$('.close').click( function(){
  $('.menu').fadeOut();
});