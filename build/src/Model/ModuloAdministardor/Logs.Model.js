"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class LogsModel {
    static async obtenerTransferencias() {
        const [rows] = await database_1.pool.query('SELECT * FROM JUGADORES_TRANSFERENCIAS_LOG');
        return rows;
    }
    static async obtenerJugadoresEliminados() {
        const [rows] = await database_1.pool.query('SELECT * FROM JUGADORES_DELETED_LOG');
        return rows;
    }
    static async obtenerEquiposEliminados() {
        const [rows] = await database_1.pool.query('SELECT * FROM EQUIPOS_DELETED_LOG');
        return rows;
    }
    static async obtenerLigasLog() {
        const [rows] = await database_1.pool.query('SELECT * FROM LIGAS_LOG');
        return rows;
    }
    static async obtenerTotales() {
        const [rows] = await database_1.pool.query(`
      SELECT 
        (SELECT COUNT(*) FROM JUGADORES) AS total_jugadores,
        (SELECT COUNT(*) FROM EQUIPOS) AS total_equipos,
        (SELECT COUNT(*) FROM LIGAS) AS total_ligas
    `);
        return rows;
    }
}
exports.default = LogsModel;
