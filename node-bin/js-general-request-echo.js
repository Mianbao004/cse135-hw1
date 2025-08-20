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

function generalHtml(protocol, method, queryString, bodyMsg) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>General Request Echo</title>
    </head>
    <body>
      <h1 style="text-align: center;">General Request Echo</h1>
      <hr />
      <p><b>HTTP Protocol: </b>${noHtml(protocol)}</p><br />
      <p><b>HTTP Method: </b>${noHtml(method)}</p><br />
      <p><b>Raw Query String: </b>${noHtml(queryString)}</p><br />
      <p><b>Raw Message Body: </b>${noHtml(bodyMsg)}</p><br />
    </body>
    </html>
  `;
}

router.get('/', (req, res) => {
  const protocol = `HTTP/${req.httpVersion}`;
  const method = req.method;
  const queryString = req.originalUrl.split('?')[1] || '';
  const bodyMsg = ''; 

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(generalHtml(protocol, method, queryString, bodyMsg));
});

router.post('/', (req, res) => {
  const protocol = `HTTP/${req.httpVersion}`;
  const method = req.method;
  const queryString = req.originalUrl.split('?')[1] || '';
  const bodyMsg = JSON.stringify(req.body); // reconstruct raw form

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(generalHtml(protocol, method, queryString, bodyMsg));
});

export default router;
