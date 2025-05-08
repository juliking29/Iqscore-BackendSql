"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipos_model_1 = __importDefault(require("../../model/ModuloAdministardor/equipos.model"));
class EquiposController {
    // Obtener el total de jugadores por equipo
    static async obtenerTotalJugadoresPorEquipo(_req, res) {
        try {
            const equipos = await equipos_model_1.default.obtenerTotalJugadoresPorEquipo();
            if (!equipos || equipos.length === 0) {
                res.status(404).json({ mensaje: 'No se encontraron equipos' });
                return;
            }
            res.json({ equipos });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener el total de equipos por liga
    static async obtenerTotalEquiposPorLiga(_req, res) {
        try {
            const ligas = await equipos_model_1.default.obtenerTotalEquiposPorLiga();
            if (!ligas || ligas.length === 0) {
                res.status(404).json({ mensaje: 'No se encontraron ligas' });
                return;
            }
            res.json({ ligas });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener los 10 jugadores con mayor valor de mercado
    static async obtenerTopJugadores(_req, res) {
        try {
            const jugadores = await equipos_model_1.default.obtenerTopJugadores();
            if (!jugadores || jugadores.length === 0) {
                res.status(404).json({ mensaje: 'No se encontraron jugadores' });
                return;
            }
            res.json({ jugadores });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}
exports.default = EquiposController;
