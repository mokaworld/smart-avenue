//LOADING 
$(window).load(function() {
  $('.loading').fadeOut(3000);
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
$('.header .bars-icon').click( function(){
  $('.menu').fadeIn();
});

$('.close').click( function(){
  $('.menu').fadeOut();
});




$('.fixed-menu .gear').click(function(){
  $(this).parent('.fixed-menu').toggleClass('visible');
  if($(this).parent('.fixed-menu').hasClass('visible') ){
    $(this).parent('.fixed-menu').animate({
      left : 0
    });
  }else{
    $(this).parent('.fixed-menu').animate({
      left : '-250px'
    });
  }
  
});



//SCROLL TO TOP
var scrollTop = $('.scroll-top');

$(document).on('scroll' , function(){
  if($(window).scrollTop()  >= 1000){
    if( scrollTop.is(':hidden')){
     scrollTop.fadeIn(400);
  
  }
}else{
  scrollTop.fadeOut(400);
 }
});


