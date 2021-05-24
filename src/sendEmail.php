<?php 

$name = strip_tags($_POST["name"]);
$phone = strip_tags($_POST["phone"]);

function validate($name, $phone){
    if(!(isset($name) && isset($phone)))
        return false;

    if(!preg_match("/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/", $phone) || strlen($name) < 1)
        return false;

    return true;
}

function sendMail($to, $subject, $message){
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: <expressTO@support.com>\r\n"; 

    return mail($to, $subject, $message, $headers);
}

$recipient = "<f1sst36@gmail.com>";

if(validate($name, $phone)){
    $result = sendMail($recipient, 
        "Заказ консультации", 
        "Имя: " . $name . "<br />" . "Номер телефона: " . $phone . "<br />"
    );

    if($result){
        header("HTTP/1.1 200 OK");
        echo("Письмо отправлено");
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo("Ошибка отправки письма");
    }
} else {
    header("HTTP/1.1 422 Unprocessable Entity");
    echo("Ошибка валидации");
}

?>