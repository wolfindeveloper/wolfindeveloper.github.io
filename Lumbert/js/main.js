
$(document).ready(function(){



// NEWS-SLIDER
$('.news-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 800,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
      	arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 451,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

// WATCHED-SLIDER
$('.watched-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 800,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
 	slidesToShow: 2,
 	slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});


// WATCHED-BLOCK
// $('.expand').click(function(){
// 	var watched = $('.watched-block');
// 	if (watched.is(':hidden')) {
// 		watched.slideDown(500);
// 		$('.expand-text').addClass('expand-active');
// 		$('.rotate').addClass('expand-rotate');
// 		$('body .slider').addClass('watched-slider');
// 	} else {
// 		watched.slideUp(500);
// 		$('.expand-text').removeClass('expand-active');
// 		$('.rotate').removeClass('expand-rotate');
// 	}
// });


$('.expand').click(function(){
	var watched = $('.recently-watched-bg');
	if (watched.hasClass('watched2')) {
		watched.removeClass('watched2');
		watched.addClass('watched1');
		$('.expand-text').addClass('expand-active');
		$('.rotate-text').text('Скрыть');
		$('.rotate').addClass('expand-rotate');
		$('body .slider').addClass('watched-slider');
	} else if (watched.hasClass('watched1')) {
		watched.removeClass('watched1');
		watched.addClass('watched2');
		$('.expand-text').removeClass('expand-active');
		$('.rotate').removeClass('expand-rotate');
		$('.rotate-text').text('Развернуть');
	}
});

// DROP-CATALOG
	$('.catalog-drop-text').click(function(){
		var dropdown = $('.catalog-dropdown');
		if (dropdown.is(':hidden')) {
			dropdown.slideDown(500);
			$('.catalog-drop').addClass('catalog-drop-active');
			$('.catalog-drop-text').addClass('catalog-drop-text-active');
			$('.catalog-drop-icon').addClass('catalog-drop-icon-rotate');
		} else {
			dropdown.slideUp(500);
			$('.catalog-drop').removeClass('catalog-drop-active');
			$('.catalog-drop-text').removeClass('catalog-drop-text-active');
			$('.catalog-drop-icon').removeClass('catalog-drop-icon-rotate');
		}
	});

	// SUB-MENU
	$('.catalog-dropdown-item-hover').hover(function(){
		var sub = $(this).find('.sub-menu');
		if (sub.is(':hidden')) {
			sub.fadeIn(0);
		} else {
			sub.fadeOut(0);
		}
	});
	

// MOBILE-MENU
	$('.mobile-catalog-drop-text').click(function(){
		var mobileDropdown = $('.mobile-catalog-dropdown');
		if (mobileDropdown.is(':hidden')) {
			mobileDropdown.slideDown();
			$('.mobile-catalog-drop-icon').addClass('mobile-catalog-drop-icon-active');
			$('.mobile-catalog-drop').addClass('catalog-drop-active');
			$('.mobile-catalog-drop-text').addClass('catalog-drop-text-active');
			$('.mobile-catalog-drop-icon').addClass('catalog-drop-icon-rotate');
		} else {
			mobileDropdown.slideUp();
			$('.mobile-catalog-drop-icon').removeClass('mobile-catalog-drop-icon-active');
			$('.mobile-catalog-drop').removeClass('catalog-drop-active');
			$('.mobile-catalog-drop-text').removeClass('catalog-drop-text-active');
			$('.mobile-catalog-drop-icon').removeClass('catalog-drop-icon-rotate');
		}
		
	});

		$('.mobile-catalog-dropdown-item-click').click(function(){
			var mobileSub = $(this).next('.mobile-sub-menu');
		if (mobileSub.is(':hidden')) {
			mobileSub.slideDown();
		} else {
			mobileSub.slideUp();
		}
	});

	// MOBILE-BURGER
		$('.mobile-img').click(function(){
		var mobileDropdown = $('.mobile-catalog-dropdown');
		if (mobileDropdown.is(':hidden')) {
			mobileDropdown.slideDown();
			$('.mobile-catalog-drop-icon').addClass('mobile-catalog-drop-icon-active')
		} else {
			mobileDropdown.slideUp();
			$('.mobile-catalog-drop-icon').removeClass('mobile-catalog-drop-icon-active')
		}
		
	});

// MOBILE-MENU-BACK
		$('.mobile-sub-menu-back').click(function(){
			var mobileBack = $(this).closest('.mobile-sub-menu');
			if (mobileBack.is(':visible')) {
				mobileBack.css('display', 'none');
			}
		});

		$('.mobile-sub-menu-close').click(function(){
			var mobileClose = $(this).closest('.mobile-catalog-dropdown');
			if (mobileClose.is(':visible')) {
				mobileClose.css('display', 'none');
			}
		});

		$('.mobile-catalog-close').click(function(){
			var mobileCloseDrop = $(this).closest('.mobile-catalog-dropdown');
			if (mobileCloseDrop.is(':visible')) {
				mobileCloseDrop.css('display', 'none');
			}
		});

// FILTERS-DROP
		$('.catalog-filters-hide').css('display', 'none');

		$('.catalog-filters-drop-click').click(function(){
			var filterDrop = $(this).next('.catalog-filters-hide');
			var filterRotate = $(this).find('.filter-img');
			if (filterDrop.is(':hidden')) {
				filterDrop.slideDown();
				filterRotate.addClass('filter-rotate');
			} else {
				filterDrop.slideUp();
				filterRotate.removeClass('filter-rotate');
			}
		});

// VIEW-PAGE
		$('.catalog-page-view-list').click(function(){
			var viewList =  $('.catalog-product-items-list');
			if (viewList.is(':hidden')) {
				viewList.fadeIn(400);
				$(this).addClass('view-active');
				$('.catalog-product-items-block').fadeOut();
				$('.catalog-page-view-block').removeClass('view-active')

			}
		});

		$('.catalog-page-view-block').click(function(){
			var viewBlock = $('.catalog-product-items-block');
			if (viewBlock.is(':hidden')) {
				viewBlock.fadeIn(400);
				$(this).addClass('view-active');
				$('.catalog-product-items-list').fadeOut();
				$('.catalog-page-view-list').removeClass('view-active')
			}
		});

		// CARD-SLIDER
	$('.card-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.card-slider-nav'
});
$('.card-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.card-slider-for',
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
 	// slidesToShow: 2,
 	slidesToScroll: 1,
      }
    },
    {
      breakpoint: 651,
      settings: {
        // arrows: false,
        slidesToShow: 2
      }
    }
  ]
});

// CARD-DROP
$('.card-drop').click(function(){
	var cardDropBlock = $(this).next('.card-block-hide');
	var carDropIcon = $(this).find('.card-drop-icon');
	if (cardDropBlock.is(':visible')) {
		cardDropBlock.slideUp();
		carDropIcon.addClass('card-drop-icon-rotate');
	} else {
			cardDropBlock.slideDown();
			carDropIcon.removeClass('card-drop-icon-rotate');
		}
});

// ORDERING
// 1
$('.ordering-form-contacts-drop').click(function(){
	var requisites = $(this).next('.ordering-form-contacts-hide');
	if (requisites.is(':hidden')) {
		requisites.slideDown();
		$('.ordering-form-contacts-drop-icon').addClass('ordering-rotate');
	} else {
		requisites.slideUp();
		$('.ordering-form-contacts-drop-icon').removeClass('ordering-rotate');
	}
});
// 2
$('.ordering-form-order-delivery-btn').click(function(){
	var delivery = $(this).next('.order-delivery-hide');
	if (delivery.is(':hidden')) {
		delivery.fadeIn();
	}
});
// 3
$('.add-review-order').click(function(){
	var review = $(this).next('.review-order');
	if (review.is(':hidden')) {
		review.fadeIn();
		$(this).remove();
	}
});

// BASCET-DROP
	$('.bascet-product-order-drop').click(function(){
		var bascetImg = $(this).find('img');
		var bascetDrop = $(this).next('.bascet-product-order-items');
		if (bascetDrop.is(':visible')) {
			bascetDrop.slideUp();
			bascetImg.addClass('rotate-bascet');
		}else{
			bascetDrop.slideDown();
			bascetImg.removeClass('rotate-bascet');
		}
	});

// FORM-SUBMIT
$('#confirm-check').click(function(){
	if ($(this).is(':checked')) {
		$('.confirm-order-btn').prop( "disabled", false);
		$('.confirm-order-btn').addClass('confirm-order-btn-hover');
	} else {
		$('.confirm-order-btn').prop( "disabled", true);
		$('.confirm-order-btn').removeClass('confirm-order-btn-hover');
	}
});


}); //END-READ

// CARD-FLOAT-MENU
$("document").ready(function($){
    var nav = $('#menu-center');
    var headerHeight = $('header').height();
    var crambsHeight = $('.crumbs').height();
    var cardHeight = $('.card-header').height();
    var navHeight = headerHeight + crambsHeight + cardHeight;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navHeight) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
      $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('nav-float a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('float-active');
        })
        $(this).addClass('float-active');
      
        var target = this.hash,
            menu = target;
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
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("float-active");
            currLink.addClass("float-active");
        }
        else{
            currLink.removeClass("float-active");
        }
    });
}

// TABS
$(document).ready(function(){
    $(".card-tabs").lightTabs();
});
(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").fadeOut();
                $(tabs).children("div").children("div").eq(i).fadeIn();
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

// ORDERING

// });
