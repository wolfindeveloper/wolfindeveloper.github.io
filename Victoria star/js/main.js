$(document).ready(function(){
// LINKS-PREVENT-DEFAULT
  $('.no-link').click(function(){
    event.preventDefault();
  });

// BEST-SLIDER
$('.best-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// REVIEWS-SLIDER
$('.reviews-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// APARTMENT-SLIDER
$('.apartment-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
});

// OBJECT-SLIDER
$('.object-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// ROOMS-SELECT
$('.room-select').click(function(){
  var rooms = $(this).siblings('.rooms-show');
  if (rooms.is(':hidden')) {
    rooms.fadeIn();
  }else {
    rooms.fadeOut();
  }
});

// SORT-SELECT
$('.sort-click').click(function(){
  var sort = $(this).find('.sort-select');
  if (sort.is(':hidden')) {
    sort.fadeIn();
  }else {
    sort.fadeOut();
  }
});


// MOBILE-MENU
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.mobile-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

$('.dropmenu-mobile a').click(function(){
var submenu = $(this).next('.mobile-submenu');
if (submenu.is(':hidden')) {
  submenu.slideDown();
} else {
  submenu.slideUp();
}
});

$('.mobile-dropmenu-level2 a').click(function(){
var submenu2 = $('.mobile-submenu-level2');
if (submenu2.is(':hidden')) {
  submenu2.slideDown();
} else {
  submenu2.slideUp();
}
});

// POP-UP
      $('.button').click(function(e){ 
        e.preventDefault(); 
        var data = $(this).attr('data-id');
         $('.overlay').fadeIn('fast',function(){ 
          console.log(data);
             $('#' + data).animate({'top':'20%'},500); 
         });
     });

      $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
          e.preventDefault(); 
        $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

});//end