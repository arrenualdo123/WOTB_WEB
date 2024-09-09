<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Capturar los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $recipientEmail = $_POST['recipient_email'];
    $message = $_POST['message'];

    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'arreenunaola24@gmail.com'; // Cambia por tu correo
    $mail->Password   = 'qhizrceoijxokfro'; // Cambia por tu contraseña de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipientes
    $mail->setFrom($email, $name);
    $mail->addAddress($recipientEmail);

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de ' . $name;
    $mail->Body    = '<p><strong>Nombre:</strong> ' . $name . '</p>'
                    . '<p><strong>Email:</strong> ' . $email . '</p>'
                    . '<p><strong>Mensaje:</strong><br>' . nl2br($message) . '</p>';

    $mail->send();
    echo 'El mensaje ha sido enviado';
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}
?>
