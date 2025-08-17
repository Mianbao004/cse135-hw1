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
            echo '<p style="margin-bottom: 0;"><b>Query String:</b> ' . htmlspecialchars($q_str) . '</p> <br>';
            echo htmlspecialchars($q_str) . '<br>';
        } else {
            echo '<p><b>Error:</b> This page only accepts GET requests.</p>';
        }
    ?>
</body>
</html>