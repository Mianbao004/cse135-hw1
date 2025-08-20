import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const ip = req.ip;
  const time = new Date().toLocaleString();

  res.json({
    message: "Hello HTML World with NodeJS and Express",
    generatedAt: time,
    ipAddress: ip
  });
});

export default router;
