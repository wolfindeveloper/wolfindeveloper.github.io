$(document).ready(function(){
// SLIDER
$('.slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});
});//end

// FORM
var delay_popup = 5000;
	setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
