"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jugador_model_1 = __importDefault(require("../../Model/jugador/jugador.model"));
class JugadorController {
    // Método para obtener todos los jugadores
    // Method to get all players
    static async obtenerTodos(_req, res) {
        try {
            const jugadores = await jugador_model_1.default.obtenerTodos();
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores', error });
        }
    }
    // Método para obtener jugadores por nombre
    // Method to get players by name
    static async obtenerPorNombre(req, res) {
        try {
            const { nombre } = req.params;
            // Validar que el parámetro nombre no sea undefined
            // Validate that the name parameter is not undefined
            if (!nombre) {
                res.status(400).json({ mensaje: 'El nombre es requerido' });
                return;
            }
            const jugadores = await jugador_model_1.default.obtenerPorNombre(nombre);
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener jugadores por nombre', error });
        }
    }
    // Método para obtener un jugador por su ID
    // Method to get a player by ID
    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const jugador = await jugador_model_1.default.obtenerPorId(Number(id));
            if (!jugador) {
                res.status(404).json({ mensaje: 'Jugador no encontrado' });
                return;
            }
            res.json(jugador);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener el jugador', error });
        }
    }
    // Método para crear un nuevo jugador
    // Method to create a new player
    static async crear(req, res) {
        try {
            const jugador = req.body;
            await jugador_model_1.default.crear(jugador);
            res.status(201).json({ mensaje: 'Jugador creado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al crear el jugador', error });
        }
    }
    // Método para actualizar un jugador por su ID
    // Method to update a player by ID
    static async actualizar(req, res) {
        try {
            const { id } = req.params;
            const jugador = req.body;
            await jugador_model_1.default.actualizar(Number(id), jugador);
            res.json({ mensaje: 'Jugador actualizado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al actualizar el jugador', error });
        }
    }
    // Método para eliminar un jugador por su ID
    // Method to delete a player by ID
    static async eliminar(req, res) {
        try {
            const { id } = req.params;
            await jugador_model_1.default.eliminar(Number(id));
            res.json({ mensaje: 'Jugador eliminado correctamente' });
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al eliminar el jugador', error });
        }
    }
}
exports.default = JugadorController;
