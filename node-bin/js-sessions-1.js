import express from 'express';
const router = express.Router();

function noHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

router.post('/', (req, res) => {
    const username = req.body.username?.trim() || '';

    if (!username) {
        req.session.username = 'You do not have a name set';
    } else {
        req.session.username = noHtml(username);
    }

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>POST Request Echo</title>
        </head>
        <body>
        <h1>NodeJS Sessions Page 1</h1>
        <hr>
        <p><b>Name: </b>${req.session.username}</p><br />
        <a href="/node-bin/js-sessions-2.js">Sessions Page 2</a><br />
        <a href="/nodejs-cgiform.html">NodeJS CGI Form</a>
        <form action="/node-bin/js-session-destroy.js" method="GET">
            <button type="submit">Destroy Session</button>
        </form>

        </body>
    </html>
  `);
});

router.get('/', (req, res) => {
    let username = req.session.username || '';

    if (username.trim() === '') {
        username = 'You do not have a name set';
    }

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>POST Request Echo</title>
        </head>
        <body>
        <h1>NodeJS Sessions Page 1</h1>
        <hr>
        <p><b>Name: </b>${req.session.username}</p><br />
        <a href="/node-bin/js-sessions-2.js">Sessions Page 2</a><br />
        <a href="/nodejs-cgiform.html">NodeJS CGI Form</a>
        <form action="/node-bin/js-session-destroy.js" method="GET">
            <button type="submit">Destroy Session</button>
        </form>
        </body>
    </html>
  `);
});

export default router;
