import routerx from 'express-promise-router';
import boatRouter from './boat';
import agencyRouter from './agency';
import movimientRouter from './movimient'
import ofHireRouter from './ofHire'
import onHireRouter from './onHire';
import usuarioRouter from './usuario'

const router = routerx();

router.use('/boat',boatRouter)
router.use('/agency',agencyRouter)
router.use('/movimient',movimientRouter);
router.use('/ofHire',ofHireRouter);
router.use('/onhire',onHireRouter);
router.use('/user',usuarioRouter);

export default router;