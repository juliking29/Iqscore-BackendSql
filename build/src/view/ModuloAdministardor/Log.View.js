"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Logs_Controller_1 = __importDefault(require("../../controller/ModuloAdministardor/Logs.Controller"));
const router = (0, express_1.Router)();
router.get('/transferencias', Logs_Controller_1.default.obtenerTransferencias);
router.get('/jugadores-eliminados', Logs_Controller_1.default.obtenerJugadoresEliminados);
router.get('/equipos-eliminados', Logs_Controller_1.default.obtenerEquiposEliminados);
router.get('/ligas-log', Logs_Controller_1.default.obtenerLigasLog);
router.get('/totales', Logs_Controller_1.default.obtenerTotales);
exports.default = router;
