import { Router } from "express";
import TituloEquipoController from "../../controller/equipo/equipotitulo.controller";

const router = Router();

// Ruta para insertar un nuevo título de equipo
// Route to insert a new team title
router.post("/equipo/titulo", TituloEquipoController.insertarTitulo);

// Ruta para actualizar un título de equipo
// Route to update a team title
router.put("/equipo/titulo/:idTitulo", TituloEquipoController.actualizarTitulo);

// Ruta para eliminar un título de equipo
// Route to delete a team title
router.delete("/equipo/titulo/:idTitulo", TituloEquipoController.eliminarTitulo);

// Ruta para obtener los títulos de un equipo
// Route to get titles of a team
router.get("/equipo/titulo/:equipo_id", TituloEquipoController.obtenerTitulosEquipo);

export default router;