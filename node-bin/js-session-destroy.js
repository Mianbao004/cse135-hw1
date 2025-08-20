import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error destroying session');
    }

    res.clearCookie('FakeSessionID', {
      path: '/',
      httpOnly: true,
      secure: false,
    });

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NodeJS Session Destroyed</title>
      </head>
      <body>
        <h1 style="text-align: center;">NodeJS Session Destroyed</h1>
        <hr />
        <a href="/node-bin/js-sessions-1.js">Back to Session Page 1</a><br />
        <a href="/node-bin/js-sessions-2.js">Back to Session Page 2</a><br />
        <a href="/nodejs-cgiform.html">NodeJS CGI Form</a><br />
      </body>
      </html>
    `);
  });
});

export default router;
