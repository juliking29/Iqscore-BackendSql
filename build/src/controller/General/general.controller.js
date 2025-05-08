"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const general_model_1 = __importDefault(require("../../Model/General/general.model"));
class GeneralController {
    // Buscar entidad por nombre
    static async buscarEntidad(req, res) {
        try {
            const { nombre } = req.params;
            if (!nombre) {
                res.status(400).json({ mensaje: 'El nombre es obligatorio' });
                return;
            }
            const resultado = await general_model_1.default.buscarEntidad(nombre);
            if (!resultado) {
                res.status(404).json({ mensaje: 'Entidad no encontrada' });
                return;
            }
            res.json({ resultado });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Buscar equipo por ID
    static async buscarEquipoPorID(req, res) {
        try {
            const { idEquipo } = req.params;
            if (!idEquipo) {
                res.status(400).json({ mensaje: 'El ID del equipo es obligatorio' });
                return;
            }
            const equipo = await general_model_1.default.buscarEquipoPorID(Number(idEquipo));
            if (!equipo) {
                res.status(404).json({ mensaje: 'Equipo no encontrado' });
                return;
            }
            res.json({ equipo });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Buscar equipos por liga
    static async buscarEquiposPorLiga(req, res) {
        try {
            const { idLiga } = req.params;
            if (!idLiga) {
                res.status(400).json({ mensaje: 'El ID de la liga es obligatorio' });
                return;
            }
            const equipos = await general_model_1.default.buscarEquiposPorLiga(Number(idLiga));
            if (!equipos || equipos.length === 0) {
                res.status(404).json({ mensaje: 'No se encontraron equipos en esta liga' });
                return;
            }
            res.json({ equipos });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener todos los equipos
    static async obtenerTodosLosEquipos(_req, res) {
        try {
            const equipos = await general_model_1.default.obtenerTodosLosEquipos();
            if (!equipos || equipos.length === 0) {
                res.status(404).json({ mensaje: 'No hay equipos registrados' });
                return;
            }
            res.json({ equipos });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}
exports.default = GeneralController;
