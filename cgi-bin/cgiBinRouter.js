import express from 'express';
import helloHtmlWorld from './js-helloHtmlWorld.js';

const router = express.Router();

// Mount the Hello HTML router at /js-helloHtmlWorld.js
router.use('/js-helloHtmlWorld.js', helloHtmlWorld);

export default router;
