"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const liga_controller_1 = __importDefault(require("../../controller/Liga/liga.controller"));
const router = (0, express_1.Router)();
// Definir rutas para ligas
// Define routes for leagues
// Obtener todas las ligas
// Get all leagues
router.get('/ligas', liga_controller_1.default.obtenerTodas);
// Obtener una liga por ID
// Get a league by ID
router.get('/ligas/:id', liga_controller_1.default.obtenerPorId);
// Crear una nueva liga
// Create a new league
router.post('/ligas', liga_controller_1.default.crear);
// Actualizar una liga por ID
// Update a league by ID
router.put('/ligas/:id', liga_controller_1.default.actualizar);
// Eliminar una liga por ID
// Delete a league by ID
router.delete('/ligas/:id', liga_controller_1.default.eliminar);
// Obtener nombre y logo de todas las ligas
// Get name and logo of all leagues
router.get('/ligas/nombre-logo', liga_controller_1.default.obtenerNombreYLogo);
// Obtener una liga por nombre
// Get a league by name
router.get('/ligas/nombre/:nombre', liga_controller_1.default.obtenerPorNombre);
exports.default = router;
