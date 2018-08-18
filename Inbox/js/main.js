  $(document).ready(function(){
    // $("#sticker").sticky({bottomSpacing:0});

    // wow
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

// icon-animate
$('.zigzag-icons .item').mouseover(function(){
	var img = $(this).find('img');
	img.addClass('animated bounce');
});

$('.zigzag-icons .item').mouseout(function(){
	var img = $(this).find('img');
	img.removeClass('animated bounce');
});

// icon-animate2
$('.who-icons .item').mouseover(function(){
	var img = $(this).find('img');
	img.addClass('animated pulse');
});

$('.who-icons .item').mouseout(function(){
	var img = $(this).find('img');
	img.removeClass('animated pulse');
});



// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('nav a, .mobile-menu li a ').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 700);
    return false;
  });
}
scrollNav();

// DATAPICKER
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
      buttonText: "Select date"
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


}); //end

// tabs
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

// input-number
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/numberup.png" alt="" /></div><div class="quantity-button quantity-down"><img src="img/numberdown.png" alt="" /></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

        // RANGE
var range = $('.input-range');
  value = $('.range-value');

value.html(range.attr('value') + ' $');

range.on('input', function() {
  value.html(this.value + ' $');
});

