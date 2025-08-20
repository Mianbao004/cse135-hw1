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
      <title>NodeJS Sessions Page 2</title>
    </head>
    <body>
      <h1>NodeJS Sessions Page 2</h1>
      <hr>
      <p><b>Name: </b>${noHtml(username)}</p><br />
      <a href="/node-bin/js-sessions-1.js">Session Page 1</a><br />
      <a href="/nodejs-cgiform.html">NodeJS CGI Form</a><br />      
      <form action="/node-bin/destroy" method="GET">
        <button type="submit">Destroy Session</button>
      </form>
    </body>
    </html>
  `);
});

export default router;
