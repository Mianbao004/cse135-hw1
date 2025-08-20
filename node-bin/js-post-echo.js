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
    res.set('Content-Type', 'text/html; charset=utf-8');

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>POST Request Echo</title>
        </head>
        <body>
            <h1 style="text-align: center;">POST Request Echo</h1>
            <hr />
        </body>
        </html>
    `;

    res.send(html);
});

router.post('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');

    const postParams = Object.entries(req.body);

    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>POST Request Echo</title>
        </head>
        <body>
            <h1 style="text-align: center;">POST Request Echo</h1>
            <hr />
    `;

    if (postParams.length) {
        html += `
            <b style="margin-bottom: 0;">Raw Message Body:</b> <pre>${noHtml(JSON.stringify(req.body))}</pre>
            <b>Parsed Body Message:</b>
            <ul>
        `;
        for (const [key, value] of postParams) {
            html += `<li><b>${noHtml(key)}</b>: ${noHtml(value)}</li>\n`;
        }
        html += '</ul>';
    } else {
        html += '<p><b>Error:</b> This page only accepts POST requests.</p>';
    }

    html += `
        </body>
        </html>
    `;

    res.send(html);
});

export default router;
