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

    const rawQueryString = req.originalUrl.split('?')[1] || ''; //Get the later half of ? OR fallback is ''
    const queryParams = Object.entries(req.query);

    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GET Request Echo</title>
        </head>
        <body>
            <h1 style="text-align: center;">Get Request Echo</h1>
            <hr>

    `;

    if (req.method === 'GET') {
    html += `
        <b style="margin-bottom: 0;">Raw Query String:</b> ${noHtml(rawQueryString)}<br />
        Formatted Query String: <br />
        <ul>
    `;
        for (const [key, value] of queryParams) {
            html += `<li><b>${noHtml(key)}</b>: ${noHtml(value)}</li> \n`;
        }

        html += '</ul>';
    } else {
        html += '<p><b>Error:</b> This page only accepts GET requests.</p>';
    }

    html += `
        </body>
        </html>
    `;

    res.send(html);
});


export default router;
