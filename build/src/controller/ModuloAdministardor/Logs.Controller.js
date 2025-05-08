"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logs_Model_1 = __importDefault(require("../../Model/ModuloAdministardor/Logs.Model"));
class LogsController {
    static async obtenerTransferencias(_req, res) {
        try {
            const datos = await Logs_Model_1.default.obtenerTransferencias();
            res.json({ datos });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener transferencias', error });
        }
    }
    static async obtenerJugadoresEliminados(_req, res) {
        try {
            const datos = await Logs_Model_1.default.obtenerJugadoresEliminados();
            res.json({ datos });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener jugadores eliminados', error });
        }
    }
    static async obtenerEquiposEliminados(_req, res) {
        try {
            const datos = await Logs_Model_1.default.obtenerEquiposEliminados();
            res.json({ datos });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener equipos eliminados', error });
        }
    }
    static async obtenerLigasLog(_req, res) {
        try {
            const datos = await Logs_Model_1.default.obtenerLigasLog();
            res.json({ datos });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener log de ligas', error });
        }
    }
    static async obtenerTotales(_req, res) {
        try {
            const datos = await Logs_Model_1.default.obtenerTotales();
            res.json({ datos });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener totales', error });
        }
    }
}
exports.default = LogsController;
