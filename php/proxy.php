<?php
//cargar variables de entorno desde el archivo .env
$envFile = __DIR__ . '/../.env';

if (!file_exists($envFile)) {
    echo json_encode(['error' => 'Archivo .env no encontrado']);
    exit;
}

$env = parse_ini_file($envFile);

if (!$env || !isset($env['API_KEY'])) {
    echo json_encode(['error' => 'Clave API no encontrada en el archivo .env']);
    exit;
}

$apikey = $env['API_KEY'];

// Leer la solicitud POST
$requestBody = file_get_contents('php://input');
$requestData = json_decode($requestBody, true);

// Depuración: Imprime los datos recibidos
error_log('Datos recibidos: ' . print_r($requestData, true));

if (!$requestData || !isset($requestData['text']) || !isset($requestData['targetLanguage'])) {
    echo json_encode(['error' => 'Datos incompletos o formato incorrecto']);
    exit;
}

$apiurl = 'https://api-free.deepl.com/v2/translate';

// Configura la solicitud a la API
$ch = curl_init($apiurl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/x-www-form-urlencoded'
]);

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'auth_key' => $apikey,
    'text' => $requestData['text'],
    'target_lang' => $requestData['targetLanguage']
]));

// Ejecuta la solicitud y obtiene la respuesta
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Devuelve la respuesta de la API o un error si no fue exitosa
if ($httpCode === 200) {
    header('Content-Type: application/json');
    echo $response;
} else {
    echo json_encode([
        'error' => 'Error en la solicitud a la API',
        'httpCode' => $httpCode,
        'response' => $response
    ]);
}
?>
