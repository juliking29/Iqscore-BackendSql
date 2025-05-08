import { Router } from 'express';
import LogsController from '../../controller/ModuloAdministardor/Logs.Controller';

const router = Router();

router.get('/transferencias', LogsController.obtenerTransferencias);
router.get('/jugadores-eliminados', LogsController.obtenerJugadoresEliminados);
router.get('/equipos-eliminados', LogsController.obtenerEquiposEliminados);
router.get('/ligas-log', LogsController.obtenerLigasLog);
router.get('/totales', LogsController.obtenerTotales);

export default router;
