<?php
    session_set_cookie_params([
        'lifetime' => 3600,  // 1 hour
        'path' => '/',       // ('/') for all paths on the domain.
        'domain' => '.mianbao004.site',      // Use your domain or leave blank
        'secure' => false,   // works on both http and https
        'httponly' => true   // If set to true, then PHP will attempt to send the httponly flag when setting the session cookie.
    ]);

    session_name("FakeSessionID"); 
    // Use FakeSessionID as the name of the session cookie to identify the user's session.
    session_start();
    // Looks out for a session cookie (usually called PHPSESSID)
    // If it exits -> Loads corresponsing data
    // Else --> creates new session and send a new cookie to the browser
    
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        if (trim($_POST['username']) === ''){
            $_SESSION['username'] = 'You do not have a name set';
        } else {
            $_SESSION['username'] = htmlspecialchars(strip_tags(trim($_POST['username'])));
        }   
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhP Sessions</title>
</head>
<body>
    <h1 style="text-align: center;">PhP Sessions Page 1</h1>
    <hr>
    <?php 
        echo '<b>Name: </b>' . $_SESSION['username'] . '<br />';
    ?>
    <a href="/cgi-bin/php-session-2.php">Session Page 2</a> <br />
    <a href="/php-cgiform.html">PhP CGI Form</a> <br />
    
    <form action="/cgi-bin/php-destroy-session.php" method="GET">
        <button type="submit">Destroy Session</button>
    </form>

</body>
</html>