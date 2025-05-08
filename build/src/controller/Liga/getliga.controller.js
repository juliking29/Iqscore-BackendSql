"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Getliga_model_1 = __importDefault(require("../../Model/Liga/Getliga.model"));
class EquipoController {
    // Método para obtener información de una liga por su ID
    // Method to get league information by ID
    static async obtenerInformacionLiga(req, res) {
        try {
            const { idLiga } = req.params;
            const liga = await Getliga_model_1.default.obtenerInformacionLiga(Number(idLiga));
            if (!liga.length) {
                res.status(404).json({ mensaje: 'Información de la liga no encontrada' });
                return;
            }
            res.json(liga);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener la información de la liga', error });
        }
    }
    // Método para obtener los equipos de una liga por su ID
    // Method to get teams in a league by league ID
    static async obtenerEquiposLiga(req, res) {
        try {
            const { idLiga } = req.params;
            const equipos = await Getliga_model_1.default.obtenerEquiposLiga(Number(idLiga));
            if (!equipos.length) {
                res.status(404).json({ mensaje: 'Equipos no encontrados para la liga especificada' });
                return;
            }
            res.json(equipos);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los equipos de la liga', error });
        }
    }
    // Método para obtener la tabla de posiciones de una liga por su ID
    // Method to get the standings table of a league by ID
    static async obtenerPosicionesLiga(req, res) {
        try {
            const { idLiga } = req.params;
            const posiciones = await Getliga_model_1.default.obtenerPosicionesLiga(Number(idLiga));
            if (!posiciones.length) {
                res.status(404).json({ mensaje: 'Posiciones no encontradas para la liga especificada' });
                return;
            }
            res.json(posiciones);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener las posiciones de la liga', error });
        }
    }
    // Método para obtener los jugadores con más partidos en una liga
    // Method to get players with most matches in a league
    static async obtenerJugadoresMasPartidos(req, res) {
        try {
            const { idLiga } = req.params;
            const jugadores = await Getliga_model_1.default.obtenerJugadoresMasPartidos(Number(idLiga));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores con más partidos', error });
        }
    }
    // Método para obtener los jugadores con más goles en una liga
    // Method to get players with most goals in a league
    static async obtenerJugadoresMasGoles(req, res) {
        try {
            const { idLiga } = req.params;
            const jugadores = await Getliga_model_1.default.obtenerJugadoresMasGoles(Number(idLiga));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores con más goles', error });
        }
    }
    // Método para obtener los jugadores con más asistencias en una liga
    // Method to get players with most assists in a league
    static async obtenerJugadoresMasAsistencias(req, res) {
        try {
            const { idLiga } = req.params;
            const jugadores = await Getliga_model_1.default.obtenerJugadoresMasAsistencias(Number(idLiga));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores con más asistencias', error });
        }
    }
    // Método para obtener los jugadores con más tarjetas rojas en una liga
    // Method to get players with most red cards in a league
    static async obtenerJugadoresMasTarjetasRojas(req, res) {
        try {
            const { idLiga } = req.params;
            const jugadores = await Getliga_model_1.default.obtenerJugadoresMasTarjetasRojas(Number(idLiga));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores con más tarjetas rojas', error });
        }
    }
    // Método para obtener los jugadores con más tarjetas amarillas en una liga
    // Method to get players with most yellow cards in a league
    static async obtenerJugadoresMasTarjetasAmarillas(req, res) {
        try {
            const { idLiga } = req.params;
            const jugadores = await Getliga_model_1.default.obtenerJugadoresMasTarjetasAmarillas(Number(idLiga));
            res.json(jugadores);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al obtener los jugadores con más tarjetas amarillas', error });
        }
    }
    // Método para buscar un equipo por su nombre
    // Method to search for a team by name
    static async buscarEquipoPorNombre(req, res) {
        try {
            const { nombreEquipo } = req.params;
            // Verificamos que el nombreEquipo no sea null ni esté vacío
            // Verify that team name is not null or empty
            if (!nombreEquipo || typeof nombreEquipo !== 'string' || nombreEquipo.trim() === '') {
                res.status(400).json({ mensaje: 'El nombre del equipo es requerido y debe ser una cadena válida.' });
                return;
            }
            const equipos = await Getliga_model_1.default.buscarEquipoPorNombre(nombreEquipo);
            if (!equipos.length) {
                res.status(404).json({ mensaje: 'Equipo no encontrado con el nombre proporcionado' });
                return;
            }
            res.json(equipos);
        }
        catch (error) {
            res.status(500).json({ mensaje: 'Error al buscar el equipo por nombre', error });
        }
    }
}
exports.default = EquipoController;
