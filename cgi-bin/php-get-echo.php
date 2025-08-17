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
        $q_str = $_SERVER['QUERY_STRING'];
        echo '<p> Query String: ' . htmlspecialchars($q_str) '</p> <br>';
        echo htmlspecialchars($q_str);
    ?>
</body>
</html>