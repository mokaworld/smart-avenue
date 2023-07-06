// INIT OWL CAROUSEL 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    rtl:true,
    autoplay: true,
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


// CALL BACK JSON FILE 
//particlesJS.load(@dom-id, @path-json, @callback (optional)); 
particlesJS.load('particles-js', 'assets/particles.json', function() {
    
});