import cgiBinRouter from './node-bin/cgiBinRouter.js';
import LogRocket from 'logrocket';

import express from 'express';
import session from 'express-session';
import sessionRouter from './node-bin/sessionRouter.js';
LogRocket.init('23mc9d/mianbao004site');


const app = express();

app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); 
app.use(session({
  name: 'FakeSessionID',
  secret: 'cse135-demo-secret-12345',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000,
    httpOnly: true,
    path: '/',
    secure: false
  }
}));
app.use('/node-bin', sessionRouter);
app.use('/node-bin', cgiBinRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
