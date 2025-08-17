<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello PhP world!</title>
</head>
<body>
    <h1>Hello HTML World with PhP</h1>
    <?php
        $name = "PhP";
        echo "Hello HTML World from $name <br>";

        $date = date("l, F j, Y H:i:s");
        echo "This program is generated at: $date <br>";

        $ip_address = $_SERVER['REMOTE_ADDR'];
        echo "Your IP Address is: $ip_address <br>";
    ?>
    
</body>
</html>