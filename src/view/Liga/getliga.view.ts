import { Router } from 'express';
import EquipoController from '../../controller/Liga/getliga.controller';

const router: Router = Router();

// Ruta para obtener información de una liga por su ID
// Route to get information of a league by its ID
router.get('/liga/:idLiga', EquipoController.obtenerInformacionLiga);

// Ruta para obtener los equipos de una liga por su ID
// Route to get teams of a league by its ID
router.get('/liga/equipos/:idLiga', EquipoController.obtenerEquiposLiga);

// Ruta para obtener la tabla de posiciones de una liga por su ID
// Route to get standings table of a league by its ID
router.get('/liga/posiciones/:idLiga', EquipoController.obtenerPosicionesLiga);

// Ruta para obtener los jugadores con más partidos en una liga
// Route to get players with most matches in a league
router.get('/liga/jugadores/mas-partidos/:idLiga', EquipoController.obtenerJugadoresMasPartidos);

// Ruta para obtener los jugadores con más goles en una liga
// Route to get players with most goals in a league
router.get('/liga/jugadores/mas-goles/:idLiga', EquipoController.obtenerJugadoresMasGoles);

// Ruta para obtener los jugadores con más asistencias en una liga
// Route to get players with most assists in a league
router.get('/liga/jugadores/mas-asistencias/:idLiga', EquipoController.obtenerJugadoresMasAsistencias);

// Ruta para obtener los jugadores con más tarjetas rojas en una liga
// Route to get players with most red cards in a league
router.get('/liga/jugadores/mas-tarjetas-rojas/:idLiga', EquipoController.obtenerJugadoresMasTarjetasRojas);

// Ruta para obtener los jugadores con más tarjetas amarillas en una liga
// Route to get players with most yellow cards in a league
router.get('/liga/jugadores/mas-tarjetas-amarillas/:idLiga', EquipoController.obtenerJugadoresMasTarjetasAmarillas);

// Ruta para buscar un equipo por su nombre
// Route to search for a team by its name
router.get('/equipo/:nombreEquipo/ligas/:idLiga', EquipoController.buscarEquipoPorNombre);

export default router;