$(function () {



  $('.hamburger-menu').on('click', function (event) {
    event.preventDefault();
    // $(this).toggleClass('is-active');

    $(this).toggleClass('m_mnuscroll');
    $('.bar').toggleClass('animate');
    $('#mobile_mnu').toggleClass("active");
  });
  // _MMENU



});

    $('#toggle').click(function(){
        if ($(this).hasClass('active')) {
           $(this).removeClass('active');
           $('body').removeClass('move');
        }  
        else {
            $(this).addClass('active');
            $('body').addClass('move');
    //      $('html,body').animate({scrollTop: 0},300)
            ulHeight = $('#menu ul').height();

               $('#menu').css('paddingTop',$(window).height()/2-ulHeight/2);
               /*logoL = $('#head .logo').offset().left;
               logoT = $('#head .logo').offset().top;
               $('.submenu .logo').css({top:logoT,left:logoL-87})*/
        }
    });
    
    $('#menu .close').click(function(){
        $('#toggle').click();
    });
     $('#menu a').click(function(e) {
        e.preventDefault();
        $(this).hasClass('active')
        $('#toggle').removeClass('active');
        $('body').removeClass('move');
     });