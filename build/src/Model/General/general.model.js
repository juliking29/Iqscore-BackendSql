"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class GeneralModel {
    static async buscarEntidad(nombre) {
        const [rows] = await database_1.pool.query(`SELECT buscarEntidad(?) AS resultado`, [nombre]);
        if (Array.isArray(rows) && rows.length > 0) {
            const resultado = rows[0]?.resultado;
            if (resultado !== undefined && resultado !== null) {
                return resultado;
            }
        }
        return 'No se encontraron resultados';
    }
    // Buscar un equipo por ID
    static async buscarEquipoPorID(idEquipo) {
        const [rows] = await database_1.pool.query('CALL buscarEquipoPorID(?)', [idEquipo]);
        if (Array.isArray(rows) && rows.length > 0 && rows[0] !== undefined) {
            return rows[0];
        }
        return null;
    }
    // Buscar todos los equipos de una liga por ID de la liga
    static async buscarEquiposPorLiga(idLiga) {
        const [rows] = await database_1.pool.query('CALL buscarEquiposPorLiga(?)', [idLiga]);
        return Array.isArray(rows) ? rows : [];
    }
    // Obtener todos los equipos con ID, Liga y Nombre
    static async obtenerTodosLosEquipos() {
        const [rows] = await database_1.pool.query('CALL obtenerTodosLosEquipos()');
        return Array.isArray(rows) ? rows : [];
    }
}
exports.default = GeneralModel;
