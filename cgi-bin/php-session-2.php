<?php
    session_name("FakeSessionID");
    session_set_cookie_params([
        'lifetime' => 3600,  // 1 hour
        'path' => '/',       // ('/') for all paths on the domain.
        'domain' => '',      // Use your domain or leave blank
        'secure' => false,   // works on both http and https
        'httponly' => true   // If set to true, then PHP will attempt to send the httponly flag when setting the session cookie.
    ]);
    session_start();

    // Looks out for a session cookie (usually called PHPSESSID)
    // If it exits -> Loads corresponsing data
    // Else --> creates new session and send a new cookie to the browser

    if (!isset($_SESSION['username'])){ //Bc if !isset, empty => true
        $_SESSION['username'] = 'No session found. Please return submit a CGI Form.';
    } else if (empty($_SESSION['username'])) {
        $_SESSION['username'] = 'You do not have a name set';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-32C6KNWFFK"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-32C6KNWFFK');
    </script>

    <title>PhP Sessions</title>
</head>
<body>
    <h1 style="text-align: center;">PhP Sessions Page 2</h1>
    <hr>
    <?php 
        echo '<b>Name: </b>' . $_SESSION['username'] . '<br />';
    ?>
    <a href="/cgi-bin/php-session-1.php">Session Page 1</a><br />
    <a href="/php-cgiform.html">PhP CGI Form</a><br />
    
    <form action="/cgi-bin/php-destroy-session.php" method="GET">
        <button type="submit">Destroy Session</button>
    </form>

</body>
</html>