import { Router } from 'express';
import JugadorController from '../../controller/jugador/jugador.controller';

const router = Router();

// Ruta para obtener todos los jugadores
// Route to get all players
router.get('/jugadores', JugadorController.obtenerTodos);

// Ruta para obtener un jugador por su nombre
// Route to get a player by name
router.get('/jugadores/nombre/:nombre', JugadorController.obtenerPorNombre);

// Ruta para obtener un jugador por su ID
// Route to get a player by ID
router.get('/jugadores/:id', JugadorController.obtenerPorId);

// Ruta para crear un nuevo jugador
// Route to create a new player
router.post('/jugadores', JugadorController.crear);

// Ruta para actualizar un jugador por su ID
// Route to update a player by ID
router.put('/jugadores/:id', JugadorController.actualizar);

// Ruta para eliminar un jugador por su ID
// Route to delete a player by ID
router.delete('/jugadores/:id', JugadorController.eliminar);

export default router;