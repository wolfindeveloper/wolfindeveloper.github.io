$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
         //        $('#overlay5').fadeIn('fast',function(){ 
         //        $('#nonebox5').animate({'top':'10%'},500); 
         // });
                $('.nonebox').animate({'top':'-1100px'},500,function(){
                $('#nonebox5').animate({'top':'10%'},500); // óáèðàåì íàø áëîê
             // $('.overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});