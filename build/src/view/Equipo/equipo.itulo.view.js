"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipotitulo_controller_1 = __importDefault(require("../../controller/equipo/equipotitulo.controller"));
const router = (0, express_1.Router)();
// Ruta para insertar un nuevo título de equipo
// Route to insert a new team title
router.post("/equipo/titulo", equipotitulo_controller_1.default.insertarTitulo);
// Ruta para actualizar un título de equipo
// Route to update a team title
router.put("/equipo/titulo/:idTitulo", equipotitulo_controller_1.default.actualizarTitulo);
// Ruta para eliminar un título de equipo
// Route to delete a team title
router.delete("/equipo/titulo/:idTitulo", equipotitulo_controller_1.default.eliminarTitulo);
// Ruta para obtener los títulos de un equipo
// Route to get titles of a team
router.get("/equipo/titulo/:equipo_id", equipotitulo_controller_1.default.obtenerTitulosEquipo);
exports.default = router;
