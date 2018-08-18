$(document).ready(function() {
  
  var descMinHeight = 535;
  var desc = $('.desc');
  var descWrapper = $('.desc-wrapper');

  // show more button if desc too long
  if (desc.height() > descWrapper.height()) {
    $('.more-info').show();
  }
  
  // When clicking more/less button
  $('.more-info').click(function() {
    
    var fullHeight = $('.desc').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc-wrapper').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc-wrapper').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

// SLIDER
$('.reviews-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
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
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// SLIDER

// POP-UP
      $('.button').click(function(e){ 
        e.preventDefault(); 
        var data = $(this).attr('data-id');
         $('.overlay').fadeIn('fast',function(){ 
          console.log(data);
             $('#' + data).animate({'top':'25%'},500); 
         });
     });

      $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
          e.preventDefault(); 
        $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });

// FORM
$('.form .input').focusin(function(){
  var label = $(this).find('label');
  label.addClass('active');
});

$('.form .input').focusout(function(){
  var label = $(this).find('label');
  var input = $(this).find('input').val();
  // label.removeClass('active');
  if (input.length > 0 ) {
    label.addClass('active');
  } else {label.removeClass('active');}
});


// SCROLLTO
function scrollNav() {
  $('.menu a').click(function(){  
    var head = $('#sticker-sticky-wrapper').height();
    console.log(head);
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - head
    }, 400);
    return false;
  });
  // $('.scrollTop a').scrollTop();
}
scrollNav();


}); //end