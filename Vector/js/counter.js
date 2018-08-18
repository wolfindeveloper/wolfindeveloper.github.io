// COUNTER
$(window).scroll(function() {
    var hT = $('.our-works-info').offset().top,
        hH = $('.our-works-info').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    // console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 900,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); {
            $('.count').removeClass('count').addClass('counted');
        };
    }
});
