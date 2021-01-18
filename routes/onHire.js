import routerx from 'express-promise-router';
import onHireController from '../controllers/OnHireController';

const router = routerx();

router.post('/add',onHireController.add);
router.post('/query',onHireController.query);
router.post('/list',onHireController.list);

export default router;