		$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['../img/1section-bg.jpg', '#f2f2f2', '#7BAABE', '#ffffff', '#f0f0f0'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
				lockAnchors: false,
				anchors:['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				navigation: true,
				navigationPosition: 'right',
				// navigationTooltips: ['firstSlide', 'secondSlide'],
				showActiveTooltip: false,
				responsiveWidth:1280,
				responsiveHeight:650,

				afterLoad: function(anchorLink, index){
					var loadedSection = $(this);
					var menuColor = $('#menu li a');
					var mailColor = $('.communications .mail');
					var phoneColor = $('.communications .phone a');
					var burger = $('.burger p');
					var logo = $('.logo h1 i:first-child');
					var slider = ('.slider1');
				//использование индекса
				if(index == 2 || index == 4 || index == 5){
					menuColor.addClass('grey');
					mailColor.addClass('grey');
					phoneColor.addClass('grey');
					burger.addClass('grey');
					logo.addClass('grey');
					$('.slider1').slick('refresh');
				}else {
					menuColor.removeClass('grey');
					mailColor.removeClass('grey');
					phoneColor.removeClass('grey');
					burger.removeClass('grey');
					logo.removeClass('grey');
				}

			}
			});

// TABS
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp(0);
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown(0);
			
			g.preventDefault();																																																																																																																																																																																																																																																																																																																																																																																																																																													
		} );
	})(jQuery);
// TABS
// SLIDERS
	$('.slider').slick({
			infinite: true,																																																	
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		});

		

$(".tab-link1").click(function(){
$('.slider1').slick('refresh');
});

$(".tab-link2").click(function(){
$('.slider2').slick('setPosition');
});

$(".tab-link3").click(function(){
$('.slider3').slick('refresh');
});

$(".tab-link4").click(function(){
$('.slider4').slick('refresh');
});

$(".tab-link5").click(function(){
$('.slider5').slick('refresh');
});
// SLIDERS

// USLUGI
	$('.uslugi-info .close').click(function(){
	var close = $(this).parent('.uslugi-info');
		close.removeClass('active');
		$('.uslugi-block .item').removeClass('active');
		$('.uslugi-block .item img').removeClass('active');
		$('.uslugi-block .item i').removeClass('active');
});

$('.uslugi-block .item').click(function(){
	var uslugi = $('.uslugi-block .uslugi-info');
	var usluga = $(this).next('.uslugi-info');
	var itemActive = $(this);
	var imgActive = $(this).find('img');
	var textActive = $(this).find('i');
	uslugi.removeClass('active');

	if (usluga.is(':hidden')) {
		usluga.addClass('active');
		$('.uslugi-block .item').removeClass('active');
		itemActive.addClass('active');
		$('.uslugi-block .item img').removeClass('active');
		imgActive.addClass('active');
		$('.uslugi-block .item i').removeClass('active');
		textActive.addClass('active');
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

// POP-UP
	    $('.button').click(function(e){ 
    		e.preventDefault(); 
    		var data = $(this).attr('data-id');
         $('.overlay').fadeIn('fast',function(){ 
         	console.log(data);
             $('#' + data).animate({'top':'100px'},500); 
         });
     });

	    $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      		e.preventDefault(); 
        $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

});


