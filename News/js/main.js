$(document).ready(function(){
// SLIDER
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 551,
      settings: {
      	dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// SLIDER2
$('.slider2').slick({
  arrows: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 551,
      settings: {
      	dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// KABINET-OPEN
$('.kabinet-icon').click(function(){
	var img = $(this).find('.kabinet-drop').attr('src');
  console.log(img);
	var kabinet = $('.kabinet-show');

	if (kabinet.is(':hidden')) {
		kabinet.fadeIn();
		img = $(this).find('.kabinet-drop').attr('src' , 'img/lk-arrow-up.png');
	}else {
		kabinet.fadeOut();
		img = $(this).find('.kabinet-drop').attr('src' , 'img/lk-arrow-down.png');
	}
});

// ONE-NEWS-COMMENTS
	$('.comments-js').click(function(){
		var comment = $(this).next('.comments-block');
		var commentImg = $(this).find('.comment-img').attr('src');
		if (comment.is(':hidden')) {
			comment.slideDown();
			commentImg = $(this).find('.comment-img').attr('src', 'img/comments-img-up.png');
		}else {
			comment.slideUp();
			commentImg = $(this).find('.comment-img').attr('src', 'img/comments-img-down.png');	
		}
	});

// ONE-NEWS-ANSWER
	$('.answer-counter').click(function(){
		var answer = $(this).next('.answer-text-block');
		var answerImg = $(this).find('.answer-img').attr('src');
		console.log(answerImg);
		if (answer.is(':hidden')) {
			answer.slideDown();
			answerImg = $(this).find('.answer-img').attr('src', 'img/answer-up.png');
		}else {
			answer.slideUp();
			answerImg = $(this).find('.answer-img').attr('src', 'img/answer-down.png');
		}
	});

// RUBRIKI-SHOW
	$('.rubriki .download-more a').click(function(){
		event.preventDefault();
		var rubriki = $('.rubriki-show');
		if (rubriki.is(':hidden')) {
			rubriki.slideDown();
			$(this).fadeOut();
		}
	});
});
// TABS
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

// MOBILE-HEADER
(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.mobile-header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

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

