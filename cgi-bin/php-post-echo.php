<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST Request Echo</title>
</head>
<body>
    <h1 style="text-align: center;">POST Request Echo</h1>
    <hr>
    <b>Message Body : </b><br />
    <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST'){
            echo '<ul>';
            foreach ($_POST as $key => $value){
                echo '<li><b>' . htmlspecialchars($key) . ':</b> ' . htmlspecialchars($value) . '</li><br />';
            }
            echo '</ul>';
        } else {
            echo '<p><b>Error:</b> This page only accepts POST requests.</p>';
        }
    ?>
    
</body>
</html>