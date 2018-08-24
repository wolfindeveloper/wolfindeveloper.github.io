$(document).ready(function(){

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    onInit: function(e){
    $el.append('<div class="slick-counter">'+ parseInt(e.currentSlide + 1, 10) +' / '+ e.slideCount +'</div>');
  },
  onAfterChange: function(e){
    $el.find('.slick-counter').html(e.currentSlide + 1 +' / '+e.slideCount);
  },
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.burger').click(function(){
	var menu = $('.burger-menu-bg');
	var body = $('body');
	menu.toggleClass('active');
	body.toggleClass('active');
});

// TO-TOP
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});



// SCROLLBAR
$(function(){
var widthtBurger = $('.burger-menu').css('width');
$('.burger-menu').slimScroll({
    width: 'widthtBurger',
    height: '100%',
    size: '10px',
    position: 'right',
    color: '#9fc9e0',
    alwaysVisible: true,
    distance: '20px',
    // start: $('#child_image_element'),
    railVisible: true,
    railColor: '#222',
    railOpacity: 0.3,
    wheelStep: 50,
    allowPageScroll: false,
    disableFadeOut: false
});
});
});