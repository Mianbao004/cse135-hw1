<?php
    session_start();
    // Loads session data

    session_unset(); 
    // Clears out all the variables in the $_SESSION array immediately in the current script.

    session_destroy();
    // Deletes the session data on the server (session file, etc.)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PhP Session Destroyed</title>
</head>
<body>
    <h1 style="text-align: center;">Session Destroyed</h1>
    <hr>
    <a href="/cgi-bin/php-session-1.php">Back to Page 1</a>
    <a href="/cgi-bin/php-session-2.php">Back to Page 2</a>
    <a href="/php-cgiform.html">PhP CGI Form</a>

</body>
</html>