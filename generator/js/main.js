$(function(){
            new MUTimer({
                month:'0',
                day:'+3',
                hour:23,
                min: 10,
                tz: 3,
                lab: 'mutimer',
            });
      });

$(document).ready(function(){
$('.reviews-slider').slick({
   slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1300,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

$(document).ready(function(){
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
     });