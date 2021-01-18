import routerx from 'express-promise-router';
import usuarioController from '../controllers/UserController'
import auth from '../middlewares/auth'
const router = routerx();

router.post('/add',auth.verifyAdministrador,usuarioController.add);
router.get('/query',auth.verifyAdministrador,usuarioController.query);
router.get('/list',auth.verifyAdministrador,usuarioController.list);
router.post('/login',usuarioController.login);

export default router;