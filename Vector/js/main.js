$(document).ready(function(){
// SKIDER-OUR-WORKS
  $('.slider-our-works').slick({
  centerMode: true,
  centerPadding: '0px',
  variableWidth: true,  
  slidesToShow: 3,
  speed: 600,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },

        {
      breakpoint: 768,
      settings: {
        variableWidth: true,
        arrows: false,
        slidesToShow: 1
      }
    },

    {
      breakpoint: 551,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        variableWidth: false, 
        slidesToShow: 1
      }
    }
  ]
});

  // SLIDER-PRICE
  $('.price-slider').slick({
  slidesToShow: 4,
  speed: 800,
  slidesToScroll: 1,
   responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
});

  // SLIDER-REVIEWS
    $('.rewievs-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
            ]
    });

// SPECIALISTS-SLIDER
  $('.specialists-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// CAR-SLIDER
  $('.car-slider').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// ANKETA-SLIDER
  $('.anketa-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
        {
      breakpoint: 551,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// POPUP
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

   $('input[type="submit"]').click(function(e){ 
    e.preventDefault(); 
             $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
         $('#overlay5').fadeIn('fast',function(){ 
             $('#nonebox5').animate({'top':'40%'},500); 
         });
     });


         $('.box-close.one').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
     });
});

// MENU-SCROLL
$("document").ready(function($){
    var nav = $('#nav');
    var navHeight = $('.head-bg').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            nav.addClass("f-nav");
            $('.nav-mobile-menu').addClass('f-nav-mobile')
        } else {
            nav.removeClass("f-nav");
            $('.nav-mobile-menu').removeClass('f-nav-mobile')
        }
    });
      $(document).on("scroll", onScroll);
    
    //smoothscroll  
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
}

// input-file
  $('.input-file').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });

  // MOBILE-MENU
    $('.button-menu').click(function(){
        var nav = $('.mobile-nav');
        var head = $('.head');
        var logo = $('.head .item1 img');
        var line1 = $(this).find('.line1');
        var line2 = $(this).find('.line2');
        var line3 = $(this).find('.line3');
        if (nav.is(':hidden')) {
            nav.slideDown();
            line1.addClass('line1-open');
            line2.addClass('line2-open');
            line3.addClass('line3-open');
        }else {
            nav.slideUp();
            line1.removeClass('line1-open');
            line2.removeClass('line2-open');
            line3.removeClass('line3-open');
        }
    });