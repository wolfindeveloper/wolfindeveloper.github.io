$(document).ready(function(){
    $(".tabs").lightTabs();
});
(function($){               
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").children("p").removeClass("active");
                $(tabs).children("ul").children("li").children("p").eq(i).addClass("active");
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

// = Load
// отслеживаем изменение инпута file
$('#file').change(function(){
    // Если файл прикрепили то заносим значение value в переменную
    var fileResult = $(this).val();
    // И дальше передаем значение в инпут который под загрузчиком
    $(this).parent().find('.fileLoad').find('input').val(fileResult);
});

/* Добавляем новый класс кнопке если инпут файл получил фокус */
$('#file').hover(function(){
    $(this).parent().find('button').addClass('button-hover');
}, function(){
    $(this).parent().find('button').removeClass('button-hover');
});
