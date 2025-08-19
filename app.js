import express from 'express';
import cgiBinRouter from './cgi-bin/cgiBinRouter.js';

const app = express();

app.set('trust proxy', true);

// Mount everything under /cgi-bin
app.use('/cgi-bin', cgiBinRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
