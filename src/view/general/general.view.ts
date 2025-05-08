import { Router } from 'express';
import GeneralController from '../../controller/General/general.controller';

const router = Router();

// Buscar entidad por nombre
router.get('/buscar/:nombre', GeneralController.buscarEntidad);

// Buscar equipo por ID
router.get('/equipo1/:idEquipo', GeneralController.buscarEquipoPorID);

// Buscar equipos por liga
router.get('/equipos/liga/:idLiga', GeneralController.buscarEquiposPorLiga);

// Obtener todos los equipos
router.get('/equipos', GeneralController.obtenerTodosLosEquipos);

export default router;
