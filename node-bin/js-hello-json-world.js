import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
  const ip = req.ip;
  const time = new Date().toLocaleString();

    res.send(`JSON.encode({
        "message": "Hello JSON World with NodeJS and Express",
        "generatedAt": "${time}",
        "ipAddress": "${ip}"
  });
  `);
});

export default router;
