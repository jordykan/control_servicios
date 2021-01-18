import routerx from 'express-promise-router';
import movimientController from '../controllers/MovimientController';

const router = routerx();

router.post('/add',movimientController.add);
router.get('/query',movimientController.query);
router.get('/list',movimientController.list);

export default router;


