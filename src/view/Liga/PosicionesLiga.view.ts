import { Router } from 'express';
import PosicionLigaController from '../../controller/Liga/TabladePosiciones.controller';

const router = Router();

// Prefijo para todas las rutas de posiciones de liga
// Prefix for all league standings routes

// Obtener posiciones por ID de liga
// Get standings by league ID
router.get('/posiciones_liga/liga/:idLiga', PosicionLigaController.obtenerPorLiga);

// Obtener posiciones por ID de equipo
// Get standings by team ID
router.get('/posiciones_liga/equipo/:idEquipo', PosicionLigaController.obtenerPorEquipo);

// Obtener posiciones por nombre de equipo
// Get standings by team name
router.get('/posiciones_liga/equipo/nombre/:nombreEquipo', PosicionLigaController.obtenerPorNombreEquipo);

// Crear una nueva entrada en la tabla de posiciones
// Create a new entry in the standings table
router.post('/posiciones_liga', PosicionLigaController.crear);

// Actualizar una posición por su ID
// Update a standing by its ID
router.put('/posiciones_liga/:idPosicion', PosicionLigaController.actualizar);

// Eliminar una posición por su ID
// Delete a standing by its ID
router.delete('/posiciones_liga/:idPosicion', PosicionLigaController.eliminar);

export default router;