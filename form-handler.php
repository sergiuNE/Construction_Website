<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'info@neagugroup.be';
    $email_subject = 'Trimitere formular nou';
    $email_body = "Nume utilizator: $name.\n".
                  "Email utilizator: $visitor_email.\n".
                  "Subiect: $subject.\n".
                  "Mesajul utilizatorului: $message.\n";

    $to = 'neagugroup@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    $referer = $_SERVER["HTTP_REFERER"] ?? "contact.html";

    header("Location: $referer?success=1");
    exit(); 
} else {
    header("Location: contact.html");
    exit();
}