<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Environment Variables</title>
</head>
<body>
    <h1>Environment Variables</h1>
    <ul>
        <?php
        $server_vars = $_SERVER;
        foreach ($server_vars as $name => $value) {
            echo "<li><strong>$name:</strong> " . htmlspecialchars($value) . "</li>";
            // htmlspecialchars is used to prevent XSS attacks by escaping special characters
        }
        ?>
    </ul>
</body>
</html>