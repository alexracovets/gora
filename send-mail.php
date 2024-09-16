<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Зчитуємо JSON дані з тіла запиту
    $data = json_decode(file_get_contents('php://input'), true); 

    // Задаем переменные для данных из формы
    $name = !empty($data['name']) ? "<b>Ім'я: </b>". $data['name'] ."<br>" : ''; 
    $phone = !empty($data['phone']) ? "<b>Телефон: </b>". $data['phone'] ."<br>" : '';
    $telegram = !empty($data['telegram']) ? "<b>Telegram:</b> ". $data['telegram'] ."<br>" : '';
    $formData = !empty($data['formData']) ? "<b>Назва форми:</b> ". $data['formData'] ."<br>" : '';

    // Создаем новый объект PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // Настройки SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ukraineafon@gmail.com';
    $mail->Password = 'jhpj bluv byzr retp';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // От кого письмо 
    $mail->setFrom('ukraineafon@gmail.com', ' VV');

    // Кому письмо
    $mail->addAddress('ukraineafon@gmail.com', ' VV');

    // Тема письма
    $mail->Subject = 'Заявка з сайту AFON';

    // Тело письма
    $mail->Body = 
    '<strong><h1>'.$formData.'</h1></strong>'. 
    '<p><strong><h3>Чудово, хтось залишив заявку на вашому сайті</h3></strong></p>'. 
    '<p>'.$name.' </p>'. 
    '<p>'.$phone.'</p>'. 
    '<p>'.$telegram.'</p>'
    ;

    // Отправляем письмо
    if ($mail->send()) {
        echo 'Ваше повідомлення надіслане!';
    } else {
        echo 'Виникла помилка, сбробуй ще раз :) : ' . $mail->ErrorInfo;
    }
}
?>
