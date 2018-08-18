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


$(document).ready(function(){
// SLIDER
    $('.slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

// NAV-MENU
    $('.dropmenu').click(function(){
        var menu = $(this).children('.sub-menu');
        var img = $(this).find('.img');
        if(menu.is(':hidden')){
            menu.slideDown();
            img.addClass('rotate');
        }else {
            menu.slideUp();
            img.removeClass('rotate');
        }
    });

// SELECT
    $('.select-drop').click(function(){
        var city = $(this).parent('.zg').next('.select-open');
        var img = $(this).find('img');
        if (city.is(':hidden')) {
            city.slideDown();
            img.addClass('rotate');
        }else {
            city.slideUp();
            img.removeClass('rotate');
        }
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
            head.addClass('head-color');
            line1.addClass('line1-open');
            line2.addClass('line2-open');
            line3.addClass('line3-open');
            $(this).addClass('height');
            logo.attr('src', 'img/second-logo.png');
        }else {
            nav.slideUp();
            head.removeClass('head-color');
            line1.removeClass('line1-open');
            line2.removeClass('line2-open');
            line3.removeClass('line3-open');
            $(this).removeClass('height');
            logo.attr('src', 'img/logo.png');
        }
    });

// POP-UP
        $('.button').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

            $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
});//end-ready


// ABOUT-SLIDER
 function replaceClass(){
 var block = document.querySelector(".about-us");
    if (window.matchMedia('(max-width: 500px)').matches) {
     block.classList.add('about-us-slider');
 } else {
  block.classList.remove('about-us-slider');
 }
 };

replaceClass();
$(window).resize(replaceClass);

$('.about-us-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });


