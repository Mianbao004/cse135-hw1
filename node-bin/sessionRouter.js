import express from 'express';
import session1 from './js-sessions-1.js';
import session2 from './js-sessions-2.js';
import destroysess from './js-session-destroy.js';

const router = express.Router();

router.use('/js-sessions-1.js', session1);
router.use('/js-sessions-2.js', session2);
router.use('/js-session-destroy.js', destroysess);

export default router;
