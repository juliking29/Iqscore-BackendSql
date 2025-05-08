"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liga_model_1 = __importDefault(require("../../Model/Liga/liga.model"));
class LigaController {
    // Obtener todas las ligas
    // Get all leagues
    static async obtenerTodas(_req, res) {
        try {
            const ligas = await liga_model_1.default.obtenerTodas();
            res.json(ligas);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener liga por ID
    // Get league by ID
    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const liga = await liga_model_1.default.obtenerPorId(Number(id));
            if (!liga) {
                res.status(404).json({ mensaje: 'Liga no encontrada' });
                return;
            }
            res.json(liga);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Crear una nueva liga
    // Create a new league
    static async crear(req, res) {
        try {
            const nuevaLiga = req.body;
            await liga_model_1.default.crear(nuevaLiga);
            res.status(201).json({ mensaje: 'Liga creada correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Actualizar una liga existente
    // Update an existing league
    static async actualizar(req, res) {
        try {
            const { id } = req.params;
            const datosActualizados = req.body;
            await liga_model_1.default.actualizar(Number(id), datosActualizados);
            res.json({ mensaje: 'Liga actualizada correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Eliminar una liga
    // Delete a league
    static async eliminar(req, res) {
        try {
            const { id } = req.params;
            await liga_model_1.default.eliminar(Number(id));
            res.json({ mensaje: 'Liga eliminada correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener nombre y logo de todas las ligas
    // Get name and logo of all leagues
    static async obtenerNombreYLogo(_req, res) {
        try {
            const ligas = await liga_model_1.default.obtenerNombreYLogo();
            res.json(ligas);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
    // Obtener liga por nombre
    // Get league by name
    static async obtenerPorNombre(req, res) {
        try {
            const { nombre } = req.params;
            if (!nombre) {
                res.status(404).json({ mensaje: 'nombre no encontrada' });
                return;
            }
            const liga = await liga_model_1.default.obtenerPorNombre(nombre);
            if (liga.length === 0) {
                res.status(404).json({ mensaje: 'Liga no encontrada' });
                return;
            }
            res.json(liga);
        }
        catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}
exports.default = LigaController;
