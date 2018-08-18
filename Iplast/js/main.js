$(document).ready(function(){
// USE-SLIDER
	$('.slider-use').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false, 
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
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
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

// VIDEO
	$('video').click(function() {
   this.paused ? this.play() : this.pause();
});

// MAP
	$('.item-city').click(function(){
  var city = $(this).find('.city');
  var hide = $('.city');
  hide.css('display', 'none');
  if (city.is(':hidden')) {
  	city.fadeIn(300);
  }else{
  	city.fadeOut(300);
  }
});

// CERTIFICATE-SLIDER
	$('.certificate-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false, 
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
      breakpoint: 480,
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

// QUESTIONS
	$('.question').click(function(){
		var img = $(this).find('p img');
		console.log(img);
		var show = $(this).next('.show');
		if (show.is(':hidden')) {
			show.slideDown();
			$(this).addClass('active-question');
			img.addClass('rotate');
		}else{
			show.slideUp();
			$(this).removeClass('active-question');
			img.removeClass('rotate');
		}
	});

// POP-UP
	    $('.button').click(function(e){ 
    		e.preventDefault(); 
    		var data = $(this).attr('data-id');
         $('.overlay').fadeIn('fast',function(){ 
         	console.log(data);
             $('#' + data).animate({'top':'50px'},500); 
         });
     });

	    $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      		e.preventDefault(); 
        $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

// RANGE
	$(function() {
    var $document   = $(document),
        $inputRange = $('input[type="range"]');
    
    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    };
    $document.on('input', 'input[type="range"]', function(e) {
        valueOutput(e.target);
    });
  
    $inputRange.rangeslider({
      polyfill: false 
    });
});

// PLACEHOLDER
 $('input[name="name"]').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','Иван');
 });

  $('input[name="mail"]').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','email@email.ru');
 });

  $('.tel-phone').mask('+7 (999) 999-99-99');

// ANIMATE
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

}); //end ready
