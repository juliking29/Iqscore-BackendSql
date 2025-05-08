import { Router } from "express";
import EquipoController from "../../controller//equipo/equipo.controller";

const router = Router();

// Obtener información de un equipo
// Get information of a team
router.get("/equipo/:idEquipo", EquipoController.obtenerInformacionEquipo);

// Obtener jugadores de un equipo
// Get players of a team
router.get("/equipo/jugadores/:idEquipo", EquipoController.obtenerJugadoresEquipo);

// Insertar un nuevo equipo
// Insert a new team
router.post("/equipo", EquipoController.insertarEquipo);

// Actualizar un equipo
// Update a team
router.put("/equipo/:idEquipo", EquipoController.actualizarEquipo);

// Eliminar un equipo
// Delete a team
router.delete("/equipo/:idEquipo", EquipoController.eliminarEquipo);

// Obtener la tabla de posiciones por ID de liga
// Get standings table by league ID
router.get("/equipo/tabla-posiciones/:idLiga", EquipoController.obtenerTablaPosiciones);

// Buscar equipo por nombre (query param)
// Search team by name (query param)
router.get("/equipo/buscar-equipo/:nombre", EquipoController.obtenerInformacionEquipopornombre);

export default router;