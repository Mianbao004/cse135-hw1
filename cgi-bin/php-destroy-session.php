<?php
    session_name("FakeSessionID");
    session_start();
    // Loads session data

//To clear up server-side:
    session_unset(); 
    // Clears out all the variables in the $_SESSION array immediately in the current script.
    session_destroy();
    // Deletes the session data on the server (session file, etc.)

//To clear up client-side => Expire exact cookie for browser to delete
    if (ini_get("session.use_cookies")) { //if it is using cookies
        $params = session_get_cookie_params(); //outputs an array
        setcookie(
            session_name(),    // curr session
            '',                 //value of the cookie
            time()-42000,       //expires immediately --> browser deletes it
            $params["path"],
            $params["domain"],
            $params["secure"],
            $params["httponly"]
        );
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

    <title>PhP Session Destroyed</title>
</head>
<body>
    <h1 style="text-align: center;">Session Destroyed</h1>
    <hr>
    <a href="/cgi-bin/php-session-1.php">Back to Page 1</a><br />
    <a href="/cgi-bin/php-session-2.php">Back to Page 2</a><br />
    <a href="/php-cgiform.html">PhP CGI Form</a><br />

</body>
</html>