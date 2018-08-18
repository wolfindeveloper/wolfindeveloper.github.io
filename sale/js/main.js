$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 3
// });

$('.reviews-slider').slick();
$(".flexnav").flexNav();

/*Select Box js*/
$('.drop-menu').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function () {
        $(this).parents('.drop-menu').find('span').addClass('span-active').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });
/*End Select Box js*/


$('.dropeddown li').click(function () {
  var input = '<strong>' + $(this).parents('.drop-menu').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value is ';
  $('.msg').html(msg + input + '</span>');
}); 

