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
    <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST'){
            echo '<b>Message Body : </b><br />';
            echo '<ul>';
            foreach ($_POST as $key => $value){
                echo '<li><b>' . htmlspecialchars($key) . ':</b> ' . htmlspecialchars($value) . '</li>';
            }
            echo '</ul>';
        }
    ?>
    
</body>
</html>