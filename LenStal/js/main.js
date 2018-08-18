$(document).ready(function(){
// NAV-MENU
// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

// INPUT-FILE
(function() {
  $('.input-file').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });

})();

// INPUT-FOCUS
$('.form-input').click(function(){
  var label = $(this).find('label');
  var labelI = $(this).find('label i');
  if ($(label.css('color', 'initial'))){
    label.css('color', 'transparent');
    labelI.css('color', 'transparent');
  } else {
    label.css('top', '25%');
  }
});

// CATEGORIES
$('.catalog-list .caption').click(function(){
  var listToggle = $(this).next('.list-toggle');
  var listIcon = $(this).find('i');
  listToggle.toggleClass('active');
  listIcon.toggleClass('rotate');
});

$('.list-active').click(function(){
  var listActive = $(this).next('ul');
  var listStyle = $(this).find('span');
  $(this).toggleClass('active');
  listActive.toggleClass('active');
  listStyle.toggleClass('list-rotate');
});

// SERVICE-SLIDER
$('.slider-service').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow :  '<div class="slickPrev"><img src="img/service-slider-prev.png" alt="Предыдущая" width="24" height="24"/></div> ' ,
  nextArrow :  '<div class="slickNext"><img src="img/service-slider-next.png" alt="Next" width="24" height="24"/></div> ' ,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 551,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// acordion


  

}); //end
