"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipos_controller_1 = __importDefault(require("../../controller/ModuloAdministardor/equipos.controller"));
const router = (0, express_1.Router)();
// Obtener total de jugadores por equipo
router.get('/equipos/total-jugadores', equipos_controller_1.default.obtenerTotalJugadoresPorEquipo);
// Obtener total de equipos por liga
router.get('/ligas/total-equipos', equipos_controller_1.default.obtenerTotalEquiposPorLiga);
// Obtener los 10 jugadores con mayor valor de mercado
router.get('/jugadores/top', equipos_controller_1.default.obtenerTopJugadores);
exports.default = router;
