<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>General Request Echo</title>
</head>
<body>
    <h1 style="text-align: center;">General Request Echo</h1>
    <hr>
    <?php 
        $raw_msg = file_get_contents('php://input');

        echo '<p><b>HTTP Protocol: </b>' . $_SERVER['SERVER_PROTOCOL'] . '</p><br />';
        echo '<p><b>HTTP Method: </b>' . $_SERVER['REQUEST_METHOD'] . '</p><br />';
        echo '<p><b>Raw Query String: </b>' . $_SERVER['QUERY_STRING'] . '</p><br />';
        echo '<p><b>Raw Message Body: </b>' . $raw_msg . '</p><br />';
    ?>
</body>
</html>