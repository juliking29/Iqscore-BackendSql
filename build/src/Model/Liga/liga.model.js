"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class LigaModel {
    // Obtener todas las ligas
    static async obtenerTodas() {
        const [rows] = await database_1.pool.query('SELECT * FROM LIGAS');
        return rows;
    }
    // Obtener liga por ID
    static async obtenerPorId(id) {
        const [rows] = await database_1.pool.query('SELECT * FROM LIGAS WHERE idLiga = ?', [id]);
        return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
    }
    // Insertar una nueva liga
    static async crear(liga) {
        await database_1.pool.query('INSERT INTO LIGAS SET ?', [liga]);
    }
    // Actualizar una liga existente
    static async actualizar(id, liga) {
        await database_1.pool.query('UPDATE LIGAS SET ? WHERE idLiga = ?', [liga, id]);
    }
    // Eliminar una liga
    static async eliminar(id) {
        await database_1.pool.query('DELETE FROM LIGAS WHERE idLiga = ?', [id]);
    }
    // Obtener liga por nombre
    static async obtenerPorNombre(nombre) {
        const [rows] = await database_1.pool.query('SELECT * FROM LIGAS WHERE nombre LIKE ?', [`%${nombre}%`]);
        return rows;
    }
    // Obtener nombre y logo de todas las ligas
    static async obtenerNombreYLogo() {
        const [rows] = await database_1.pool.query('SELECT nombre, logo FROM LIGAS');
        return rows;
    }
}
exports.default = LigaModel;
