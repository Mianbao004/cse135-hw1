<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET Request Echo</title>
</head>
<body>
    <h1 style="text-align: center;">Get Request Echo</h1>
    <hr>
    <?php
        if ($_SERVER['REQUEST_METHOD'] === 'GET'){
            $q_str = $_SERVER['QUERY_STRING'];
            echo '<b style="margin-bottom: 0;">Raw Query String:</b> ' . htmlspecialchars($q_str) . '<br />';
            echo 'Formatted Query String: <br />';

            parse_str($q_str, $params); //Stores parsed query string into an associative array
    
            echo '<ul>';
            foreach ($params as $key => $value) {
                echo '<li><b>' . htmlspecialchars($key) . '</b>: ' . htmlspecialchars($value) . '</li>';
            }
            echo '</ul>';
        } else {
            echo '<p><b>Error:</b> This page only accepts GET requests.</p>';
        }
    ?>
</body>
</html>