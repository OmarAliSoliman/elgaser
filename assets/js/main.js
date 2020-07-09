$(document).ready(function(){

  if($('.header-slider').length){
    $('.header-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      loop: false,
    });
  }

  if($('.monitor-slider').length){
    $('.monitor-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      infinite: true,
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
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
    });
  }


  AOS.init(); 

});


