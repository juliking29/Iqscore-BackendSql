import { Router } from 'express';
import LigaController from '../../controller/Liga/liga.controller';

const router = Router();

// Definir rutas para ligas
// Define routes for leagues

// Obtener todas las ligas
// Get all leagues
router.get('/ligas', LigaController.obtenerTodas);

// Obtener una liga por ID
// Get a league by ID
router.get('/ligas/:id', LigaController.obtenerPorId);

// Crear una nueva liga
// Create a new league
router.post('/ligas', LigaController.crear);

// Actualizar una liga por ID
// Update a league by ID
router.put('/ligas/:id', LigaController.actualizar);

// Eliminar una liga por ID
// Delete a league by ID
router.delete('/ligas/:id', LigaController.eliminar);

// Obtener nombre y logo de todas las ligas
// Get name and logo of all leagues
router.get('/ligas/nombre-logo', LigaController.obtenerNombreYLogo);

// Obtener una liga por nombre
// Get a league by name
router.get('/ligas/nombre/:nombre', LigaController.obtenerPorNombre);

export default router;