<?php
//Cabeceras HTTP para autorizar el acceso desde el móvil.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

$output = file_get_contents('./data.json');
echo $output;
?>