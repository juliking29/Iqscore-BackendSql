import { Router } from 'express';
import EquiposController from '../../controller/ModuloAdministardor/equipos.controller';

const router = Router();

// Obtener total de jugadores por equipo
router.get('/equipos/total-jugadores', EquiposController.obtenerTotalJugadoresPorEquipo);

// Obtener total de equipos por liga
router.get('/ligas/total-equipos', EquiposController.obtenerTotalEquiposPorLiga);

// Obtener los 10 jugadores con mayor valor de mercado
router.get('/jugadores/top', EquiposController.obtenerTopJugadores);

export default router;
