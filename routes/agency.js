import routerx from 'express-promise-router';
import agencyControler from '../controllers/AgencyController';

const router = routerx();

router.post('/add',agencyControler.add);
router.get('query',agencyControler.add);
router.get('/list',agencyControler.list);
router.put('/update',agencyControler.update)
router.put('/activate',agencyControler.activate);
router.put('/deactivate',agencyControler.deactivate)
export default router;
