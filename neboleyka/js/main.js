$('.header-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        infinite: true,
        dots: true,
        arrows: true
      }
    },

    {
      breakpoint: 769,
      settings: {
        dots: true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.reviews-slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },

    {
      breakpoint: 769,
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

$(document).ready(function(){
    $(".tabs").lightTabs();
});
(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
                                
            showPage(0);                
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  
})(jQuery);

// POPUP-ORDER
    $('.button').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

        $('.button2').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'40%'},500); 
         });
     });

        $('.button3').click(function(e){ 
    e.preventDefault(); 
         $('#overlay3').fadeIn('fast',function(){ 
             $('#nonebox3').animate({'top':'40%'},500); 
         });
     });

        $('.button4').click(function(e){ 
    e.preventDefault(); 
         $('#overlay4').fadeIn('fast',function(){ 
             $('#nonebox4').animate({'top':'40%'},500); 
         });
     });


        $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

// SCROLL-POPUP
// 	$('.popup-order').bind('mousewheel DOMMouseScroll', function(e) {
//     var scrollTo = null;
//     if (e.type == 'mousewheel') {
//         scrollTo = (e.originalEvent.wheelDelta * -1);
//     }
//     else if (e.type == 'DOMMouseScroll') {
//         scrollTo = 40 * e.originalEvent.detail;
//     }
//     if (scrollTo) {
//         e.preventDefault();
//         $(this).scrollTop(scrollTo + $(this).scrollTop());
//     }
// });
// 
// 
// Mobile-menu
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.mobile-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());


// BASCET-NUMBER
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));

// SCROLL-MENU
$("document").ready(function($){
    var nav = $('nav');
    var navHeight = $('header').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
      $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a.link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        // $('a').each(function () {
        //     $(this).removeClass('float-active');
        // })
        // $(this).addClass('float-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });  
  
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        // if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        //     $('nav ul li a').removeClass("float-active");
        //     currLink.addClass("float-active");
        // }
        // else{
        //     currLink.removeClass("float-active");
        // }
    });
}


		