<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Incluye el autoload de Composer
require 'vendor/autoload.php';

// Carga las variables de entorno
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Validación y sanitización de datos
function validate_input($data, $type) {
    switch ($type) {
        case 'email':
            return filter_var($data, FILTER_SANITIZE_EMAIL);
        case 'string':
            return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
        default:
            return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = validate_input($_POST['name'], 'string');
    $email = validate_input($_POST['email'], 'email');
    $recipient_email = validate_input($_POST['recipient_email'], 'email');
    $message = validate_input($_POST['message'], 'string');

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USERNAME'); // Usar variables de entorno
        $mail->Password = getenv('SMTP_PASSWORD'); // Usar variables de entorno
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Habilitar depuración
        $mail->SMTPDebug = 2; // Muestra información detallada sobre la conexión

        // Configuración del correo
        $mail->setFrom($email, $name); // Enviado desde el correo del usuario
        $mail->addAddress($recipient_email); // Correo electrónico del destinatario ingresado por el usuario
        $mail->Subject = 'Nuevo Mensaje del Formulario de Contacto';
        $mail->Body    = "Nombre: $name\nEmail: $email\nMensaje: $message";

        $mail->send();
        echo 'El mensaje ha sido enviado';
    } catch (Exception $e) {
        // Registro de errores en un archivo de registro
        error_log("Error al enviar correo: {$mail->ErrorInfo}", 3, __DIR__ . '/phpmailer_errors.log');
        echo "El mensaje no pudo ser enviado. Por favor, intenta nuevamente más tarde.";
    }
}
?>

