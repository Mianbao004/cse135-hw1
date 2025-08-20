import express from 'express';
const router = express.Router();

function noHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}


router.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');


    // process.env -> object in Node.js that holds an array of key-value pair environment variables
    // Object.entries(process.env) -> convert each key-value pair into an array of arrays
    const env = Object.entries(process.env).sort(([a], [b]) =>
        a.localeCompare(b) //compare keys
    );

    const headers = Object.entries(req.headers).sort(([a], [b]) =>
        a.localeCompare(b)
    );

    // Append html
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Environment Variables</title>
    </head>
    <body>
        <h1 style="text-align: center;">Environment Variables</h1>
        <hr>
  `;

    for (const [key, value] of env) {
        html += `<b>${noHtml(key)}</b>: ${noHtml(value)}<br> \n`;
    }

    for (const [key, value] of headers) {
        html += `<b>HTTP_${noHtml(key.toUpperCase())}</b>: ${noHtml(value)}<br>\n`;
    }

    html += `
    </body>
    </html>
  `;

    res.send(html);
});

export default router;