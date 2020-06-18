<?php
$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$address = trim($_POST['address']);
$typeRubbish = trim($_POST['typeRubbish']);
$message = trim($_POST['comment']);

// указываем адрес отправителя, можно указать адрес на домене Вашего сайта
$fromMail = 'admin@a0447858.xsph.ru';
$fromName = 'Вторсырьё';

// Сюда введите Ваш email
$emailTo = 'safronov.sanya37@gmail.com';
$subject = 'Заказ с сайта Вторсырье';
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// тело письма
$body = "Получено письмо с сайта Вторсырьё \n Имя---> $name \n Телефон---> $phone \n Адрес сбора мусора---> $address \n Тип мусора---> $typeRubbish \n Комментарий---> $message";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($phone) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}
?>