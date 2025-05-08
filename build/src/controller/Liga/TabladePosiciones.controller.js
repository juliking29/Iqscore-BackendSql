"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TabladePosiciones_model_1 = __importDefault(require("../../Model/Liga/TabladePosiciones.model"));
class PosicionLigaController {
    // Obtener todas las posiciones de una liga específica
    // Get all positions for a specific league
    static async obtenerPorLiga(req, res) {
        try {
            const { idLiga } = req.params;
            const posiciones = await TabladePosiciones_model_1.default.obtenerPorLiga(Number(idLiga));
            res.json(posiciones);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener posiciones de la liga', error });
        }
    }
    // Obtener la posición de un equipo por ID
    // Get the position of a team by ID
    static async obtenerPorEquipo(req, res) {
        try {
            const { idEquipo } = req.params;
            const posicion = await TabladePosiciones_model_1.default.obtenerPorEquipo(Number(idEquipo));
            if (!posicion) {
                return res.status(404).json({ message: 'Posición no encontrada' });
            }
            res.json(posicion);
        }
        catch (error) {
            res.status(500).json({ message: 'Error al obtener la posición del equipo', error });
        }
    }
    // Obtener posiciones por nombre de equipo
    // Get positions by team name
    static async obtenerPorNombreEquipo(req, res) {
        try {
            let { nombreEquipo } = req.params;
            // Verificar si el parámetro fue enviado
            // Check if the parameter was sent
            if (!nombreEquipo || nombreEquipo.trim() === "") {
                return res.status(400).json({ message: 'El nombre del equipo es requerido' });
            }
            // Normalizar: eliminar espacios extras y convertir a minúsculas
            // Normalize: remove extra spaces and convert to lowercase
            nombreEquipo = nombreEquipo.trim().toLowerCase();
            console.log("Buscando posiciones para el equipo:", nombreEquipo); // Depuración
            // Obtener las posiciones del servicio
            // Get positions from the service
            const posiciones = await TabladePosiciones_model_1.default.obtenerPorNombreEquipo(nombreEquipo);
            // Si no se encontraron posiciones, devolver un 404
            // If no positions were found, return a 404
            if (!posiciones || posiciones.length === 0) {
                return res.status(404).json({ message: 'No se encontraron posiciones para el equipo' });
            }
            res.json(posiciones);
        }
        catch (error) {
            console.error("Error en obtenerPorNombreEquipo:", error);
            res.status(500).json({ message: 'Error al obtener posiciones por nombre de equipo', error });
        }
    }
    // Crear una nueva posición en la liga
    // Create a new position in the league
    static async crear(req, res) {
        try {
            await TabladePosiciones_model_1.default.crear(req.body);
            res.status(201).json({ message: 'Posición creada correctamente' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al crear la posición', error });
        }
    }
    // Actualizar la posición de un equipo en la liga por idPosicion
    // Update the position of a team in the league by idPosicion
    static async actualizar(req, res) {
        try {
            const { idPosicion } = req.params;
            await TabladePosiciones_model_1.default.actualizar(Number(idPosicion), req.body);
            res.json({ message: 'Posición actualizada correctamente' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al actualizar la posición', error });
        }
    }
    // Eliminar una posición en la liga por idPosicion
    // Delete a position in the league by idPosicion
    static async eliminar(req, res) {
        try {
            const { idPosicion } = req.params;
            await TabladePosiciones_model_1.default.eliminar(Number(idPosicion));
            res.json({ message: 'Posición eliminada correctamente' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error al eliminar la posición', error });
        }
    }
}
exports.default = PosicionLigaController;
