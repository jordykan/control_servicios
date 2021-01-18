import routerx from 'express-promise-router';
import agencyControler from '../controllers/AgencyController';

const router = routerx();

router.post('/add',agencyControler.add);
router.get('query',agencyControler.add);
router.get('/list',agencyControler.list);

export default router;
