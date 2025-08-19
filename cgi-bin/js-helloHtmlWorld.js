import express from 'express';
const router = express.Router();

// app = express() → the main app
// router = express.Router() -> a smaller, modular version of the app just for routes

router.get('/', (req, res) => {
  const ip = req.ip;
  const time = new Date().toLocaleString();

  res.send(`
    <html>
      <head><title>Hello NodeJS with Express world!</title></head>
      <body>
        <h1 style="text-align: center;">Hello HTML World with NodeJS and Express</h1>
        <hr>
        <p>This program is generated at: ${time}</p>
        <p>Your IP Address is: ${ip}</p>
      </body>
    </html>
  `);
});

export default router;
