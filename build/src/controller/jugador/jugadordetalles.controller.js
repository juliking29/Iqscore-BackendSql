"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jugadordetalles_model_1 = __importDefault(require("../../Model/jugador/jugadordetalles.model"));
class JugadorController {
    // Obtener detalles de un jugador por su ID
    // Get player details by ID
    static async obtenerDetallesPorId(req, res) {
        try {
            const { id } = req.params;
            const jugador = await jugadordetalles_model_1.default.obtenerDetallesPorId(Number(id));
            if (!jugador) {
                res.status(404).json({ mensaje: 'Jugador no encontrado' });
                return;
            }
            res.json(jugador);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener historial de equipos de un jugador
    // Get player's team history
    static async obtenerHistorialEquipos(req, res) {
        try {
            const { id } = req.params;
            const historial = await jugadordetalles_model_1.default.obtenerHistorialEquipos(Number(id));
            res.json(historial);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener títulos de un jugador
    // Get player's titles
    static async obtenerTitulos(req, res) {
        try {
            const { id } = req.params;
            const titulos = await jugadordetalles_model_1.default.obtenerTitulos(Number(id));
            res.json(titulos);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Agregar historial de equipo a un jugador
    // Add team history to a player
    static async agregarHistorialEquipo(req, res) {
        try {
            const { id } = req.params;
            const historial = req.body;
            await jugadordetalles_model_1.default.agregarHistorialEquipo(Number(id), historial);
            res.status(201).json({ mensaje: 'Historial agregado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Agregar título a un jugador
    // Add title to a player
    static async agregarTitulo(req, res) {
        try {
            const { id } = req.params;
            const titulo = req.body;
            await jugadordetalles_model_1.default.agregarTitulo(Number(id), titulo);
            res.status(201).json({ mensaje: 'Título agregado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Eliminar historial de equipo de un jugador
    // Remove team history from a player
    static async eliminarHistorialEquipo(req, res) {
        try {
            const { id } = req.params;
            const { nombreEquipo } = req.body;
            await jugadordetalles_model_1.default.eliminarHistorialEquipo(Number(id), nombreEquipo);
            res.json({ mensaje: 'Historial eliminado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Eliminar título de un jugador
    // Remove title from a player
    static async eliminarTitulo(req, res) {
        try {
            const { id } = req.params;
            const { nombreTitulo } = req.body;
            await jugadordetalles_model_1.default.eliminarTitulo(Number(id), nombreTitulo);
            res.json({ mensaje: 'Título eliminado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}
exports.default = JugadorController;
