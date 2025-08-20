## Team Members:
- Gloria Lee

## Link to my Domain:
- https://mianbao004.site/

## Login for user "grader" on Apache server:
- password: `c3e!35-gr4deR`
- IP address: `137.184.93.82`

## To run the NodeJS server:
1. Log into user "grader" on the Apache server like `ssh grader@mianbao004.site`
2. `cd /var/www/mianbao004.site/public_html`
3. `node app.js` to keep the port running 




## Github AutoDeploy Setup
- I created a workflow file (`.yml`) that defines what happens with jobs and secret values which I kept in my repo. Once set up, every push on my local repo automatically deploy the changes to my server.

## Login info for member site:
- username: `gloria`
- password: `popuppass`

## Summary of changes to HTML file in DevTools after compression:
- Before enabling compression with `mod_deflate`, the document took about **90,000 ms** or more to load itself. After enabling compression with `mod_deflate`, the load time took **less than 80,000 ms** to load itself. This shows that `mod_deflate` significantly helped reduce the load time of the document by compressing the files, resulting in faster page rendering.

## Summary of removing 'server' header
- After some research, I installed Apache's `mod_security` module, edited Apache's configuration to add my custom server name, and then retrieved the desired header. This was verified on my DevTools Network tab.