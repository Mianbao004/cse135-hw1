import express from 'express';
import helloHtmlWorld from './js-helloHtmlWorld.js';
import helloJsonWorld from './js-hello-json-world.js';
import envJS from './js-environment.js';
import getJS from './js-get-echo.js';
import postJS from './js-post-echo.js';

const router = express.Router();

router.use('/js-helloHtmlWorld.js', helloHtmlWorld);        //Any request that starts with /js-helloHtmlWorld.js will be handled by the router defined in helloHtmlWorld.
router.use('/js-hello-json-world.js', helloJsonWorld); 
router.use('/js-environment.js', envJS);
router.use('/js-get-echo.js', getJS);
router.use('/js-post-echo.js', postJS);



export default router;
