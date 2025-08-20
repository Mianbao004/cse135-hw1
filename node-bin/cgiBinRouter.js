import express from 'express';
import helloHtmlWorld from './js-helloHtmlWorld.js';
import helloJsonWorld from './js-helloJsonWorld.js';

const router = express.Router();

router.use('/js-helloHtmlWorld.js', helloHtmlWorld);        //Any request that starts with /js-helloHtmlWorld.js will be handled by the router defined in helloHtmlWorld.
router.use('/js-hello-json-world.js', helloJsonWorld); 




export default router;
