"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class JugadorModel {
    // Método para obtener todos los jugadores de la base de datos
    // Method to get all players from the database
    static async obtenerTodos() {
        const [rows] = await database_1.pool.query('SELECT * FROM JUGADORES');
        return rows;
    }
    // Método para obtener jugadores filtrados por nombre
    // Method to get players filtered by name
    static async obtenerPorNombre(nombre) {
        const [rows] = await database_1.pool.query('SELECT * FROM JUGADORES WHERE nombre LIKE ?', [`%${nombre}%`]);
        return rows;
    }
    // Método para obtener un jugador por su ID
    // Method to get a player by their ID
    static async obtenerPorId(id) {
        const [rows] = await database_1.pool.query('SELECT * FROM JUGADORES WHERE idJugador = ?', [id] // Busca al jugador por su ID
        // Search for the player by their ID
        );
        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0];
        }
        return null;
    }
    // Método para insertar un nuevo jugador en la base de datos
    // Method to insert a new player into the database
    static async crear(jugador) {
        await database_1.pool.query('INSERT INTO JUGADORES SET ?', [jugador]);
    }
    // Método para actualizar la información de un jugador
    // Method to update a player's information
    static async actualizar(id, jugador) {
        await database_1.pool.query('UPDATE JUGADORES SET ? WHERE idJugador = ?', [jugador, id]);
    }
    // Método para eliminar un jugador de la base de datos
    // Method to delete a player from the database
    static async eliminar(id) {
        await database_1.pool.query('DELETE FROM JUGADORES WHERE idJugador = ?', [id]);
    }
}
exports.default = JugadorModel;
