import { Router } from 'express';
import JugadorController from '../../controller/jugador/jugadordetalles.controller';

const router = Router();

// Obtener detalles de un jugador por ID
// Get player details by ID
router.get('/jugadordetalles/:id', JugadorController.obtenerDetallesPorId);

// Obtener historial de equipos de un jugador
// Get team history of a player
router.get('/jugadordetalles/:id/historial', JugadorController.obtenerHistorialEquipos);

// Obtener títulos de un jugador
// Get titles of a player
router.get('/jugadordetalles/:id/titulos', JugadorController.obtenerTitulos);

// Agregar un nuevo equipo al historial del jugador
// Add a new team to player's history
router.post('/jugadordetalles/:id/historial', JugadorController.agregarHistorialEquipo);

// Agregar un nuevo título al jugador
// Add a new title to player
router.post('/jugadordetalles/:id/titulo', JugadorController.agregarTitulo);

// Eliminar un equipo del historial del jugador
// Remove a team from player's history
router.delete('/jugadordetalles/:id/historial', JugadorController.eliminarHistorialEquipo);

// Eliminar un título del jugador
// Remove a title from player
router.delete('/jugadordetalles/:id/titulo', JugadorController.eliminarTitulo);

export default router;