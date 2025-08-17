<?php
    header('Content-Type: application/json');
    $name = "PhP";
    $date = date("l, F j, Y H:i:s");
    $ip_address = $_SERVER['REMOTE_ADDR'];

    echo json_encode([
        'title' => 'Hello PhP world!',
        'header' => 'Hello HTML World with PhP',
        'message' => "Hello HTML World from $name",
        'name' => $name,
        'date' => $date,
        'ip_address' => $ip_address
    ]);
?>