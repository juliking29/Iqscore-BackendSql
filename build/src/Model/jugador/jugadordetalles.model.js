"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class JugadorModel {
    // Método para obtener los detalles completos de un jugador por su ID
    // Method to get complete details of a player by their ID
    static async obtenerDetallesPorId(id) {
        try {
            const [rows] = await database_1.pool.query(`SELECT j.*, e.nombre AS equipo_actual, l.nombre AS liga
                 FROM JUGADORES j
                 LEFT JOIN EQUIPOS e ON j.idEquipoActual = e.idEquipo
                 LEFT JOIN LIGAS l ON e.idLiga = l.idLiga
                 WHERE j.idJugador = ?`, [id]);
            return rows.length > 0 ? rows[0] : null;
        }
        catch (error) {
            throw new Error(`Error al obtener detalles del jugador: ${error}`);
        }
    }
    // Método para obtener el historial de equipos de un jugador
    // Method to get a player's team history
    static async obtenerHistorialEquipos(id) {
        try {
            const [rows] = await database_1.pool.query(`SELECT idJugador, nombre_equipo, año_inicio, año_fin, foto_equipo
                 FROM EQUIPOS_JUGADOR
                 WHERE idJugador = ?
                 ORDER BY año_inicio DESC`, [id]);
            return rows;
        }
        catch (error) {
            throw new Error(`Error al obtener historial de equipos: ${error}`);
        }
    }
    // Método para obtener los títulos ganados por un jugador
    // Method to get titles won by a player
    static async obtenerTitulos(id) {
        try {
            const [rows] = await database_1.pool.query(`SELECT idJugador, nombre_titulo, año
                 FROM TITULOS_JUGADORES
                 WHERE idJugador = ?
                 ORDER BY año DESC`, [id]);
            return rows;
        }
        catch (error) {
            throw new Error(`Error al obtener títulos: ${error}`);
        }
    }
    // Método para agregar un nuevo equipo al historial del jugador (con foto)
    // Method to add a new team to the player's history (with photo)
    static async agregarHistorialEquipo(idJugador, historial) {
        try {
            await database_1.pool.query(`INSERT INTO EQUIPOS_JUGADOR (idJugador, nombre_equipo, año_inicio, año_fin, foto_equipo)
                 VALUES (?, ?, ?, ?, ?)`, [idJugador, historial.nombre_equipo, historial.año_inicio, historial.año_fin, historial.foto_equipo]);
        }
        catch (error) {
            throw new Error(`Error al agregar historial de equipo: ${error}`);
        }
    }
    // Método para agregar un nuevo título al jugador
    // Method to add a new title to the player
    static async agregarTitulo(idJugador, titulo) {
        try {
            await database_1.pool.query(`INSERT INTO TITULOS_JUGADORES (idJugador, nombre_titulo, año)
                 VALUES (?, ?, ?)`, [idJugador, titulo.nombre_titulo, titulo.año]);
        }
        catch (error) {
            throw new Error(`Error al agregar título: ${error}`);
        }
    }
    // Método para eliminar un equipo del historial del jugador
    // Method to remove a team from the player's history
    static async eliminarHistorialEquipo(idJugador, nombreEquipo) {
        try {
            await database_1.pool.query(`DELETE FROM EQUIPOS_JUGADOR
                 WHERE idJugador = ? AND nombre_equipo = ?`, [idJugador, nombreEquipo]);
        }
        catch (error) {
            throw new Error(`Error al eliminar historial de equipo: ${error}`);
        }
    }
    // Método para eliminar un título del jugador
    // Method to remove a title from the player
    static async eliminarTitulo(idJugador, nombreTitulo) {
        try {
            await database_1.pool.query(`DELETE FROM TITULOS_JUGADORES
                 WHERE idJugador = ? AND nombre_titulo = ?`, [idJugador, nombreTitulo]);
        }
        catch (error) {
            throw new Error(`Error al eliminar título: ${error}`);
        }
    }
}
exports.default = JugadorModel;
