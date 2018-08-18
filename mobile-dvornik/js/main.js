$(document).ready(function(){
// REVIEWS-SLIDER
	$('.reviews').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});	

// PARTNERS-SLIDER
	$('.partners-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});	

	$('.header-slider').slick({
		slidesToScroll: 1,
    arrows: false,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	});

// POP-UP
	    $('.button').click(function(e){ 
    		e.preventDefault(); 
    		var data = $(this).attr('data-id');
         $('.overlay').fadeIn('fast',function(){ 
         	console.log(data);
             $('#' + data).animate({'top':'70px'},500); 
         });
     });

	    $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      		e.preventDefault(); 
        $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             // è òåïåðü óáèðàåì îâåðëýé
         });
        $('.overlay').fadeOut('fast'); 

     });

if($(window).width() < 767) {
  $('.services-list-slider').removeClass('flex');
  $('.services-list-slider').slick({
      slidesToShow: 1,
    slidesToScroll: 1,
        arrows: true,
  });
} else {
  // change functionality for larger screens
}

// mobile-header
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.mobile-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }

  $('.mobile-header li a').click(function(){
    var list = $('.mobile-header');
      list.removeClass('menu-opened');
    });

}());

}); //end

$(document).ready(function() {
  
  var descMinHeight = 120;
  var desc = $('.desc');
  var descWrapper = $('.desc-wrapper');

  
  if (desc.height() > descWrapper.height()) {
    $('.more-info').show();
  }
  
  $('.more-info').click(function() {
    
    var fullHeight = $(this).parent('.item').find('.desc').height();
    var descHeaight = $(this).parent('.item').find('.desc-wrapper');

    if ($(this).hasClass('expand')) {

      $(descHeaight).animate({'height': descMinHeight}, 'slow');
    }
    else {

      $(descHeaight).css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight+descHeaight.height()-10}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});



