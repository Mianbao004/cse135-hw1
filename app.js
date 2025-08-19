import express from 'express';
import helloHtmlWorld from './cgi-bin/js-helloHtmlWorld.js';

const app = express();                   // Initializes and returns an Express application object
app.set('trust proxy', true);            // To get correct client IP behind Apache via reverse proxy
app.use('/cgi-bin/js-helloHtmlWorld.js', helloHtmlWorld);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});


