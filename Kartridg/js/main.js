$(document).ready(function(){

$('.slider-reviews').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    arrows: true,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.png"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          fade: true,
          dots: true
        }
      },
    ]
  });

  //эта функция выполняется, когда страница полностью загрузилась
$(document).ready(function() {
  var menuToggle = $('.menu-toggle');
  var nav = $('.main-menu');

  //при нажатии на кнопку "меню", меню выезжает сверху
  $(menuToggle).on('click', function(e) {
    //так как menuToggle у нас ссылка, то нужно отменить дефолтное действие
    //при нажатии на нее(переход по ссылке). Метод применяется к событию event.
    e.preventDefault();
    nav.slideToggle();
  });
  
  $(window).resize(function() {
    var width = $(window).width();
    if(width > 768 && nav.is(':hidden')) {
      nav.removeAttr('style');
    }
  });
});
// POPUP

// Hinge effect popup
$('a.hinge1').magnificPopup({
  removalDelay: 1000, //delay removal by X to allow out-animation
  callbacks: {
    beforeClose: function() {
        this.content.addClass('hinge');
    }, 
    close: function() {
        this.content.removeClass('hinge'); 
    }
  },
  midClick: true
});

});


