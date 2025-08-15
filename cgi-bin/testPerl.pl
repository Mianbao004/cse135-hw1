#!/usr/bin/perl

# Required for good practice
use strict;
use warnings;

# Print HTTP header
print "Content-type: text/html\n\n";

# Print HTML content
print <<HTML;
<!DOCTYPE html>
<html>
<head>
    <title>Hello from Perl CGI</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This Perl script is running via CGI.</p>
</body>
</html>
HTML
