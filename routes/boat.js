import routerx from 'express-promise-router';
import boatController from '../controllers/BoatController';
import auth from '../middlewares/auth';
const router = routerx();

router.post('/add',boatController.add);
router.get('/query',boatController.query);
//router.get('/list',auth.verifyAdministrador, boatController.list);
router.get('/list', boatController.list);
router.put('/update',boatController.update); 
router.put('/activate',boatController.activate);
router.put('/deactivate',boatController.deactivate);

export default router;