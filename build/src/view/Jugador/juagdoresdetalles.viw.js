"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugadordetalles_controller_1 = __importDefault(require("../../controller/jugador/jugadordetalles.controller"));
const router = (0, express_1.Router)();
// Obtener detalles de un jugador por ID
// Get player details by ID
router.get('/jugadordetalles/:id', jugadordetalles_controller_1.default.obtenerDetallesPorId);
// Obtener historial de equipos de un jugador
// Get team history of a player
router.get('/jugadordetalles/:id/historial', jugadordetalles_controller_1.default.obtenerHistorialEquipos);
// Obtener títulos de un jugador
// Get titles of a player
router.get('/jugadordetalles/:id/titulos', jugadordetalles_controller_1.default.obtenerTitulos);
// Agregar un nuevo equipo al historial del jugador
// Add a new team to player's history
router.post('/jugadordetalles/:id/historial', jugadordetalles_controller_1.default.agregarHistorialEquipo);
// Agregar un nuevo título al jugador
// Add a new title to player
router.post('/jugadordetalles/:id/titulo', jugadordetalles_controller_1.default.agregarTitulo);
// Eliminar un equipo del historial del jugador
// Remove a team from player's history
router.delete('/jugadordetalles/:id/historial', jugadordetalles_controller_1.default.eliminarHistorialEquipo);
// Eliminar un título del jugador
// Remove a title from player
router.delete('/jugadordetalles/:id/titulo', jugadordetalles_controller_1.default.eliminarTitulo);
exports.default = router;
