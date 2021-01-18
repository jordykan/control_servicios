import routerx from 'express-promise-router';
import BoatController from '../controllers/BoatController';
import ofHireController from '../controllers/OfHireController';

const router = routerx();

router.post('/add',ofHireController.add);
router.get('/query',ofHireController.query);
router.get('/list',ofHireController.list);

export default router;

