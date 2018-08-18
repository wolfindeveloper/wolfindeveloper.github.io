$(document).ready(function(){
// LION-ALL
// $(".lion-all .lion-head .img").hover(
//     function () { $(this).addClass("active") },   //при наведении курсора на элемент
//     function () { $(this).removeClass("active") } //при уводе курсора с элемента
// );

	$('.lion-all .lion-head .img').mouseenter(function(){
		$(this).addClass('active');
			var textBlock = $('.lion-all .lion-head .img');
	var text = $(this).next('.text-block');
	var img = $(this).parent().parent().find('.head-lion');
	var img1 = $('.lion-head1 .img');
	var img2 = $('.lion-head2 .img');
	var img3 = $('.lion-head3 .img');
	var img4 = $('.lion-head4 .img');
	var img5 = $('.lion-head5 .img');
	var img6 = $('.lion-head6 .img');
	var img7 = $('.lion-head7 .img');
	if (img1.hasClass('active')) {
		img.attr('src', 'img/lion-head1.png')
    // img.css({'top':'-105px', 'left':'0'})
    // img.css({'top':'-41%', 'left':'0'})
		img.css({'top':'-35%', 'left':'0'})
		$(this).next('.text-block').addClass('active')
	}else if (img2.hasClass('active')) {
		img.attr('src', 'img/lion-head2.png')
    img.css({'top':'-22%', 'left':'-3%'})
		$(this).next('.text-block').addClass('active')
	}else if (img3.hasClass('active')) {
		img.attr('src', 'img/lion-head3.png');
		img.css({'top': '-26%', 'left': '0'})
		$(this).next('.text-block').addClass('active')
	}else if (img4.hasClass('active')) {
		img.attr('src', 'img/lion-head4.png')
    // img.css({'top':'-80px', 'left': '0'})
		img.css({'top':'-27%', 'left': '0'})
		$(this).next('.text-block').addClass('active')
	}else if (img5.hasClass('active')) {
		img.attr('src', 'img/lion-head5.png')
    // img.css({'top':'-70px', 'left':'-25px'})
		img.css({'top':'-22%', 'left':'-5%'})
		$(this).next('.text-block').addClass('active')
	}else if (img6.hasClass('active')) {
		img.attr('src', 'img/lion-head6.png')
    // img.css({'top':'-87px', 'left':'5px'})
		img.css({'top':'-30%', 'left':'5px'})
		$(this).next('.text-block').addClass('active')
	}else if (img7.hasClass('active')) {
		img.attr('src', 'img/lion-head7.png')
    // img.css({'top':'-80px', 'left':'5px'})
		img.css({'top':'-28%', 'left':'5px'})
		$(this).next('.text-block').addClass('active')
	}

    $(this).mouseout(function () {
    	$(this).next('.text-block').removeClass('active');
    	});
    $(this).mouseleave(function(){
    	$(this).removeClass('active');
    	$(this).next('.text-block').removeClass('active');
    });
	});

// $('.lion-all .lion-head .img').hover(function(){
// 	var textBlock = $('.lion-all .lion-head .img');
// 	var text = $(this).next('.text-block');
// 	var img = $(this).parent().parent().find('.head-lion');
// 	var img1 = $('.lion-head1 .img');
// 	var img2 = $('.lion-head2 .img');
// 	var img3 = $('.lion-head3 .img');
// 	var img4 = $('.lion-head4 .img');
// 	var img5 = $('.lion-head5 .img');
// 	var img6 = $('.lion-head6 .img');
// 	var img7 = $('.lion-head7 .img');
// 	if (img1.hasClass('active')) {
// 		img.attr('src', 'img/lion-head1.png')
// 		img.css('top', '-105px')
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img2.hasClass('active')) {
// 		img.attr('src', 'img/lion-head2.png')
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img3.hasClass('active')) {
// 		img.attr('src', 'img/lion-head3.png');
// 		img.css('top', '-80px')
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img4.hasClass('active')) {
// 		img.attr('src', 'img/lion-head4.png')
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img5.hasClass('active')) {
// 		img.attr('src', 'img/lion-head5.png')
// 		img.css({'top':'-70px', 'left':'-25px'})
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img6.hasClass('active')) {
// 		img.attr('src', 'img/lion-head6.png')
// 		img.css({'top':'-87px', 'left':'5px'})
// 		$(this).next('.text-block').addClass('active')
// 	}else if (img7.hasClass('active')) {
// 		img.attr('src', 'img/lion-head7.png')
// 		img.css({'top':'-80px', 'left':'5px'})
// 		$(this).next('.text-block').addClass('active')
// 	}else {
// 		img.attr('src', 'img/lion-head1.png')
// 		img.css({'top':'-105px', 'left':'0'})
// 		$(this).next('.text-block').removeClass('active')
// 	}

// });


// SLIDER1
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  fade: true,
  // adaptiveHeight: true,
});

// SLIDER2
$('.slider2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
});

// SELECT
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

// RANGE
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value + 'Р');
    });

    range.on('input', function(){
      $(this).next(value).html(this.value + 'Р');
    });
  });
};

rangeSlider();


// SLIDER2-IMG-ALL
$('.slider .slide .mini-img').click(function(){
	var atribute = $(this).find('img').attr('src');
	var imgBig = $(this).parents('.slick-active').find('.slide-img-big');
	$(imgBig).attr('src', atribute);
});

$('.tel-phone').mask('+7 (999) 999-99-99');
});

// SCROLTO
// function scrollNav() {
//   $('nav a').click(function(){  
//     //Toggle Class
//     $(".active").removeClass("active");      
//     $(this).closest('li').addClass("active");
//     var theClass = $(this).attr("class");
//     $('.'+theClass).parent('li').addClass('active');
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().top - 160
//     }, 400);
//     return false;
//   });
// }
// scrollNav();
// 
$(document).ready(function () {
    $(document).on("scroll", onScroll);
 
    $('nav a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('nav a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
 
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });
 
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if($(window).width() > 767) {
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('nav ul li a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
}
      // if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition && ($(window).width() > 767)) {
      //   $('nav ul li a').removeClass("active");
      //   currentLink.addClass("active");
      // }
      // else{
      //   currentLink.removeClass("active");
      // }
    });
  }

