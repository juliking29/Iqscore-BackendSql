"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TabladePosiciones_controller_1 = __importDefault(require("../../controller/Liga/TabladePosiciones.controller"));
const router = (0, express_1.Router)();
// Prefijo para todas las rutas de posiciones de liga
// Prefix for all league standings routes
// Obtener posiciones por ID de liga
// Get standings by league ID
router.get('/posiciones_liga/liga/:idLiga', TabladePosiciones_controller_1.default.obtenerPorLiga);
// Obtener posiciones por ID de equipo
// Get standings by team ID
router.get('/posiciones_liga/equipo/:idEquipo', TabladePosiciones_controller_1.default.obtenerPorEquipo);
// Obtener posiciones por nombre de equipo
// Get standings by team name
router.get('/posiciones_liga/equipo/nombre/:nombreEquipo', TabladePosiciones_controller_1.default.obtenerPorNombreEquipo);
// Crear una nueva entrada en la tabla de posiciones
// Create a new entry in the standings table
router.post('/posiciones_liga', TabladePosiciones_controller_1.default.crear);
// Actualizar una posición por su ID
// Update a standing by its ID
router.put('/posiciones_liga/:idPosicion', TabladePosiciones_controller_1.default.actualizar);
// Eliminar una posición por su ID
// Delete a standing by its ID
router.delete('/posiciones_liga/:idPosicion', TabladePosiciones_controller_1.default.eliminar);
exports.default = router;
