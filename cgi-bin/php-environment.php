<?php
    $server_vars = $_SERVER;
    $array = [];
    foreach ($server_vars as $key => $value) {
        $array[$key] = $value;
    }

    ksort($array); // Sort by key
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Environment Variables</title>
</head>
<body>
    <h1>Environment Variables</h1>
    <?php 
        foreach ($array as $key => $value){
            echo '<b>' . htmlspecialchars($key) . '</b>: ' . htmlspecialchars($value) . '<br>';
        }
    ?>
</body>
</html>
