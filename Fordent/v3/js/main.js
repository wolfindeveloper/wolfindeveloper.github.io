$(document).ready(function(){
// INPUT-FOCUS
$('.pw-form1 .pw-input').click(function(){
	var label = $(this).find('label');
	if ($(label.css('top', '25%'))){
		label.css('top', '-20px');
	} else {
		label.css('top', '25%');
	}
});

// SLIDER1
$('.pw-slider1').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
  responsive: [
    {
      breakpoint: 1621,
      settings: {
        arrows: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1361,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1025,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// SLIDER2
$('.pw-slider2').slick({
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 1,
  prevArrow :  '<div class="slickPrev"><img src="img/slider2-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider2-next.png" alt="Next" width="38" height="72"/></div> ' ,
  responsive: [
    {
      breakpoint: 1791,
      settings: {
        prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  		  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1501,
      settings: {
        prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  		  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1126,
      settings: {
        prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  		  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  		  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
  		  arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// DOUBLE-SLIDER
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow:9,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
  responsive: [
    {
      breakpoint: 1801,
      settings: {
        slidesToShow: 8
      }
    },
    {
      breakpoint: 1501,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1025,
      settings: {
      	arrows: false,
        slidesToShow: 5
      }
    },
    {
      breakpoint: 769,
      settings: {
      	arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 551,
      settings: {
      	arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 401,
      settings: {
      	arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// SLIDER4
$('.pw-slider4').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
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

// DOUBLE-SLIDER2
$('.slider-for2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
  slidesToShow:4,
  slidesToScroll: 1,
  asNavFor: '.slider-for2',
  dots: false,
  focusOnSelect: true,
  prevArrow :  '<div class="slickPrev"><img src="img/slider5-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider5-next.png" alt="Next" width="38" height="72"/></div> ',
  responsive: [
    {
      breakpoint: 1361,
      settings: {
      	arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1025,
      settings: {
      	arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 421,
      settings: {
      	arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// SLIDER-REVIEWS
$('.pw-slider-reviews').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow :  '<div class="slickPrev"><img src="img/slider1-prev.png" alt="Предыдущая" width="38" height="72"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/slider1-next.png" alt="Next" width="38" height="72"/></div> ' ,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
      	arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// TIMER
var clock = $('.pw-clock').FlipClock({
    clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
    autoStart: true, //Отключаем автозапуск
    countdown: true	, //Отсчет назад
    language:'ru-ru', //Локаль языка
    });
  
		var target = "2018-02-22T00:00:00"; //Дата до которой нужен таймер
		var targetDate = new Date(target); //Переводим в мил. секунды
		var nowDate = Date.now(); //Текущая дата и время в мил. секундах
		var time = (targetDate - nowDate) / 1000; //Получаем секунды
		
    clock.setTime(time); //Устанавливаем нужное время в секундах
    clock.setCountdown(true); //Устанавливаем отсчет назад
    clock.start(); //Запускаем отсчет

    // POP-UP
	    $('.pw-button').click(function(e){ 
    		e.preventDefault(); 
    		var data = $(this).attr('data-id');
         $('.pw-overlay').fadeIn('fast',function(){ 
             $('#' + data).animate({'top':'20%'},500); 
         });
     });

	    $('.pw-box-close.one, .pw-overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      		e.preventDefault(); 
        $('.pw-nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.pw-overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

 });//end