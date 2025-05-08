"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipo_controller_1 = __importDefault(require("../../controller//equipo/equipo.controller"));
const router = (0, express_1.Router)();
// Obtener información de un equipo
// Get information of a team
router.get("/equipo/:idEquipo", equipo_controller_1.default.obtenerInformacionEquipo);
// Obtener jugadores de un equipo
// Get players of a team
router.get("/equipo/jugadores/:idEquipo", equipo_controller_1.default.obtenerJugadoresEquipo);
// Insertar un nuevo equipo
// Insert a new team
router.post("/equipo", equipo_controller_1.default.insertarEquipo);
// Actualizar un equipo
// Update a team
router.put("/equipo/:idEquipo", equipo_controller_1.default.actualizarEquipo);
// Eliminar un equipo
// Delete a team
router.delete("/equipo/:idEquipo", equipo_controller_1.default.eliminarEquipo);
// Obtener la tabla de posiciones por ID de liga
// Get standings table by league ID
router.get("/equipo/tabla-posiciones/:idLiga", equipo_controller_1.default.obtenerTablaPosiciones);
// Buscar equipo por nombre (query param)
// Search team by name (query param)
router.get("/equipo/buscar-equipo/:nombre", equipo_controller_1.default.obtenerInformacionEquipopornombre);
exports.default = router;
