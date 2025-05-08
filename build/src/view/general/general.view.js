"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const general_controller_1 = __importDefault(require("../../controller/General/general.controller"));
const router = (0, express_1.Router)();
// Buscar entidad por nombre
router.get('/buscar/:nombre', general_controller_1.default.buscarEntidad);
// Buscar equipo por ID
router.get('/equipo1/:idEquipo', general_controller_1.default.buscarEquipoPorID);
// Buscar equipos por liga
router.get('/equipos/liga/:idLiga', general_controller_1.default.buscarEquiposPorLiga);
// Obtener todos los equipos
router.get('/equipos', general_controller_1.default.obtenerTodosLosEquipos);
exports.default = router;
