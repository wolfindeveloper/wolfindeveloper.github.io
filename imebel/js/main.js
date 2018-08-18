$('.slider').slick({
  infinite: false,
  draggable: false,
  swipe: false
});
$('.slider2').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
  
});

$(document).ready(function(){
    $('.button').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'55%'},500); 
         });
     });
    
    $('.button2').click(function(e){ 
    e.preventDefault(); 
         $('#overlay2').fadeIn('fast',function(){ 
             $('#nonebox2').animate({'top':'55%'},500); 
         });
     });
        
    $('.button3').click(function(e){ 
    e.preventDefault(); 
         $('#overlay3').fadeIn('fast',function(){ 
             $('#nonebox3').animate({'top':'55%'},500); 
         });
     });
    
    $('.box-close.one, .overlay').click(function(e){ // êëèêàåì ïî ýëåìåíòó êîòîðûé âñ¸ ýòî áóäåò çàêðûâàòü
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });

     });
     });

 $('.answer p').click(function(){
               if($(this).hasClass('check_active')){
                  $(this).removeClass('check_active');
                  
              }
              else{
                 $(this).addClass('check_active');
                 
              }
                });

 $('.slider2 div').click(function(){
               if($(this).hasClass('check_active_img')){
                  $(this).removeClass('check_active_img');
                  
              }
              else{
                 $(this).addClass('check_active_img');
                 
              }
                });

// if you want to use the 'fire' or 'disable' fn,
// you need to save OuiBounce to an object
var _ouiBounce = ouibounce(document.getElementById('ouibounce-modal'), {
cookieExpire: 10,
timer: 0,
callback: function() { console.log('ouiBounce fired!'); }
});

$('.underlay').on('click', function() {
$('#ouibounce-modal').hide();
_ouiBounce.disable({ cookieExpire: 5, sitewide: true });

});

$('#ouibounce-modal .modal-footer').on('click', function() {
$('#ouibounce-modal').hide();
_ouiBounce.disable({ cookieExpire: 5, sitewide: true });
});

$('#ouibounce-modal .modal').on('click', function(e) {
e.stopPropagation();
});






