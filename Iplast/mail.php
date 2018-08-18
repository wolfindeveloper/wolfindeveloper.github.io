<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    // if (isset($_POST['litrs'])) {$litrs = $_POST['litrs'];}
    $ch = '';
if (!empty($_POST["ch"]) && is_array($_POST["ch"]))
{
    $ch = implode(" ", $_POST["ch"]);
}
    if (isset($_POST['range'])) {$range = $_POST['range'];}
    if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "info@iplast.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "mail@ledminox.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> 
    <b>ФИО:</b> $name <br>
    <b>Телефон:</b> $phone<br>
    <b>Размер:</b> $ch<br>
    <b>Количество:</b> $range<br>
    <b>E-mail:</b> $mail";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success animated fadeInUp"><span>Спасибо за заявку!</span><br>
    В ближайшее время наш<br> менеджер Вам перезвонит<br>
    <a href="index.html">Закрыть</a></p></center>';
    }
    else 
    {
    echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>