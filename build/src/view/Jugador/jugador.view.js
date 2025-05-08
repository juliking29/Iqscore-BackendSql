"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugador_controller_1 = __importDefault(require("../../controller/jugador/jugador.controller"));
const router = (0, express_1.Router)();
// Ruta para obtener todos los jugadores
// Route to get all players
router.get('/jugadores', jugador_controller_1.default.obtenerTodos);
// Ruta para obtener un jugador por su nombre
// Route to get a player by name
router.get('/jugadores/nombre/:nombre', jugador_controller_1.default.obtenerPorNombre);
// Ruta para obtener un jugador por su ID
// Route to get a player by ID
router.get('/jugadores/:id', jugador_controller_1.default.obtenerPorId);
// Ruta para crear un nuevo jugador
// Route to create a new player
router.post('/jugadores', jugador_controller_1.default.crear);
// Ruta para actualizar un jugador por su ID
// Route to update a player by ID
router.put('/jugadores/:id', jugador_controller_1.default.actualizar);
// Ruta para eliminar un jugador por su ID
// Route to delete a player by ID
router.delete('/jugadores/:id', jugador_controller_1.default.eliminar);
exports.default = router;
