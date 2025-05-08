"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipo_Model_1 = __importDefault(require("../../Model/Equipo/equipo.Model"));
class EquipoController {
    // Obtener información de un equipo
    // Get team information
    static async obtenerInformacionEquipo(req, res) {
        try {
            const { idEquipo } = req.params;
            const equipo = await equipo_Model_1.default.obtenerInformacionEquipo(Number(idEquipo));
            res.json(equipo);
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al obtener la información del equipo", error });
        }
    }
    // Obtener jugadores de un equipo
    // Get players from a team
    static async obtenerJugadoresEquipo(req, res) {
        try {
            const { idEquipo } = req.params;
            const jugadores = await equipo_Model_1.default.obtenerJugadoresEquipo(Number(idEquipo));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los jugadores del equipo", error });
        }
    }
    // Insertar un nuevo equipo
    // Insert a new team
    static async insertarEquipo(req, res) {
        try {
            const equipo = req.body;
            await equipo_Model_1.default.insertarEquipo(equipo);
            res.status(201).json({ mensaje: "Equipo insertado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al insertar el equipo", error });
        }
    }
    // Actualizar un equipo
    // Update a team
    static async actualizarEquipo(req, res) {
        try {
            const { idEquipo } = req.params;
            const equipo = req.body;
            await equipo_Model_1.default.actualizarEquipo(Number(idEquipo), equipo);
            res.json({ mensaje: "Equipo actualizado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar el equipo", error });
        }
    }
    // Eliminar un equipo
    // Delete a team
    static async eliminarEquipo(req, res) {
        try {
            const { idEquipo } = req.params;
            await equipo_Model_1.default.eliminarEquipo(Number(idEquipo));
            res.json({ mensaje: "Equipo eliminado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el equipo", error });
        }
    }
    // Obtener tabla de posiciones de una liga
    // Get league standings
    static async obtenerTablaPosiciones(req, res) {
        try {
            const { idLiga } = req.params;
            if (!idLiga || isNaN(Number(idLiga))) {
                res.status(400).json({ message: "El ID de la liga es requerido y debe ser un número válido." });
                return;
            }
            const posiciones = await equipo_Model_1.default.obtenerTablaPosiciones(Number(idLiga));
            res.status(200).json(posiciones);
        }
        catch (error) {
            console.error("Error al obtener la tabla de posiciones:", error);
            res.status(500).json({ message: "Error al obtener la tabla de posiciones.", error: error.message });
        }
    }
    // Obtener información de un equipo por su nombre
    // Get team information by name
    static async obtenerInformacionEquipopornombre(req, res) {
        try {
            // Extraer el nombre del equipo desde los parámetros de la URL
            // Extract team name from URL parameters
            const { nombre } = req.params;
            if (!nombre || typeof nombre !== "string") {
                res.status(400).json({ message: "El nombre del equipo es requerido y debe ser un texto válido." });
                return;
            }
            const equipo = await equipo_Model_1.default.buscarEquipoPorNombre(nombre);
            if (equipo.length === 0) {
                res.status(404).json({ message: "No se encontró un equipo con ese nombre." });
                return;
            }
            res.status(200).json(equipo);
        }
        catch (error) {
            console.error("Error al buscar el equipo por nombre:", error);
            res.status(500).json({
                message: "Error al obtener la información del equipo.",
                error: error.message
            });
        }
    }
}
exports.default = EquipoController;
