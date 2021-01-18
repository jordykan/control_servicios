import routerx from 'express-promise-router';
import servicesController from '../controllers/BoatController';

const router = routerx();

router.post('/add',servicesController.add);
router.get('/query',servicesController.query);
router.get('/list',servicesController.list);

export default router;