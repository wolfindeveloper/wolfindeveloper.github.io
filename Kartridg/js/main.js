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

  if (menuToggle.is(':visible')) {
    $('.main-menu li a').on('click', function(e) {
      //так как menuToggle у нас ссылка, то нужно отменить дефолтное действие
      //при нажатии на нее(переход по ссылке). Метод применяется к событию event.
      nav.slideToggle();
    });
  }

  
  $(window).resize(function() {
    var width = $(window).width();
    if(width > 768 && nav.is(':hidden')) {
      nav.removeAttr('style');
    }
  });


  // menuscroll
  $(document).ready(function(){ 
     $("nav li a").click(function () {
        elementClick = $(this).attr("href");

        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1500); 
      });
     });

});

// sticky
$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});
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

let bg = document.querySelector('.mouse-parallax-bg');
let bg1 = document.querySelector('.mouse-parallax-bg1');
let bg2 = document.querySelector('.mouse-parallax-bg2');
let bg4 = document.querySelector('.mouse-parallax-bg4');
let bg5 = document.querySelector('.mouse-parallax-bg5');
let bg6 = document.querySelector('.mouse-parallax-bg6');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg5.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg6.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

});


