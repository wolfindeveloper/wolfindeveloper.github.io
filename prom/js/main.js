$(document).ready(function(){
$('.spoiler-body').hide();
$('.spoiler-title').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    if($(this).hasClass('opened')) {
        // $(this).html('Тип');
    }
    // else {
    //     $(this).html('Тип');
    // }
});
});



    $('.btnf').click(function(e){ 
    e.preventDefault(); 
         $('#overlay').fadeIn('fast',function(){ 
             $('#nonebox').animate({'top':'40%'},500); 
         });
     });

    $('.box-close.one, .overlay').click(function(e){ 
      e.preventDefault(); 
         $('.nonebox').animate({'top':'-1100px'},500,function(){ 
             $('.overlay').fadeOut('fast');

     });
});

    // MORE
$('.toggler').click(function(){
    	$(this).closest('.katalog-img-text').find('.box').toggle();
    });




