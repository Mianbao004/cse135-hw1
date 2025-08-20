import express from 'express';
import cgiBinRouter from './node-bin/cgiBinRouter.js';

const app = express();

app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); 
app.use('/node-bin', cgiBinRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
