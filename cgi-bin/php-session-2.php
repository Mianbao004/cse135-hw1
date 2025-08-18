<?php
    session_name("FakeSessionID");
    session_start();
    // Looks out for a session cookie (usually called PHPSESSID)
    // If it exits -> Loads corresponsing data
    // Else --> creates new session and send a new cookie to the browser

    //For debugging
    $sessionId = session_id();
    echo "This is the sessionID: " . $sessionId;
    
    $_SESSION['username'] = $_POST['username'];
    // PHP stores session data on the server (default: in /tmp or a similar directory).
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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