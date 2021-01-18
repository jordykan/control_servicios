import routerx from 'express-promise-router';
import boatController from '../controllers/BoatController';

const router = routerx();

router.post('/add',boatController.add);
router.get('/query',boatController.query);
router.get('/list',boatController.list);
router.put('/update',boatController.update); 

export default router;