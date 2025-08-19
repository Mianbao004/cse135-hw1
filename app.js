import express from 'express';
import helloHtmlWorld from './cgi-bin/js-helloHtmlWorld.js';

const app = express();                   // Initializes and returns an Express application object

app.set('trust proxy', true);            // To get correct client IP behind Apache via reverse proxy

app.use('/cgi-bin/hello-html-world', helloHtmlWorld);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
