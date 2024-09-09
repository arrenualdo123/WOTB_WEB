<?php
require '../vendor/autoload.php';

// Carga las variables de entorno del archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Verifica si se puede acceder a las variables de entorno usando $_ENV
echo "<p>Probando PHP y acceso a variables de entorno</p>";
echo "<p>API_KEY (usando \$_ENV): " . $_ENV['API_KEY'] . "</p>";

// También puedes intentar acceder usando $_SERVER
echo "<p>API_KEY (usando \$_SERVER): " . $_SERVER['API_KEY'] . "</p>";

// Línea de depuración para mostrar todo el contenido cargado desde .env
echo "<p>Contenido del .env:</p>";
echo "<pre>";
print_r($_ENV);
echo "</pre>";
?>
