// BEGIN-READY
$(document).ready(function(){

// SLIDER-HEAD
$('.head-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// NOVELTIES-SLIDER
$('.novelties-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  dots: false,

  responsive: [
    {
      breakpoint: 1251,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

}); //END-READY