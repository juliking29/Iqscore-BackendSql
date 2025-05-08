"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class PosicionLigaModel {
    // Obtener todas las posiciones de una liga específica, incluyendo el nombre del equipo
    static async obtenerPorLiga(idLiga) {
        const [rows] = await database_1.pool.query(`SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo
       WHERE PL.idLiga = ? 
       ORDER BY PL.posicion ASC`, [idLiga]);
        return rows;
    }
    // Obtener la posición de un equipo específico por ID, incluyendo el nombre del equipo
    static async obtenerPorEquipo(idEquipo) {
        const [rows] = await database_1.pool.query(`SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo
       WHERE PL.idEquipo = ?`, [idEquipo]);
        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0];
        }
        return null;
    }
    static async obtenerPorNombreEquipo(nombreEquipo) {
        // Normalizamos el nombre (quitamos espacios y convertimos a minúsculas)
        const nombreNormalizado = `%${nombreEquipo.trim().toLowerCase()}%`;
        console.log("Buscando equipo con nombre similar a:", nombreNormalizado); // Para depuración
        // Consulta SQL: Usamos LIKE para buscar coincidencias parciales
        const [rows] = await database_1.pool.query(`SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL 
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo 
       WHERE LOWER(TRIM(E.nombre)) LIKE ? 
       ORDER BY PL.posicion ASC`, [nombreNormalizado]);
        console.log("Resultados encontrados:", rows); // Para depuración
        return rows;
    }
    // Insertar un equipo en la tabla de posiciones de una liga
    static async crear(posicion) {
        const { idLiga, idEquipo, posicion: puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5 } = posicion;
        await database_1.pool.query(`INSERT INTO POSICIONES_LIGA 
      (idLiga, idEquipo, posicion, puntos, 
       ultimo_partido_1, ultimo_partido_2, 
       ultimo_partido_3, ultimo_partido_4, ultimo_partido_5) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [idLiga, idEquipo, puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5]);
    }
    // Actualizar la posición de un equipo (por idPosicion)
    static async actualizar(idPosicion, posicion) {
        const { idLiga, idEquipo, posicion: puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5 } = posicion;
        await database_1.pool.query(`UPDATE POSICIONES_LIGA 
      SET idLiga = ?, idEquipo = ?, posicion = ?, puntos = ?, 
          ultimo_partido_1 = ?, ultimo_partido_2 = ?, 
          ultimo_partido_3 = ?, ultimo_partido_4 = ?, ultimo_partido_5 = ?
      WHERE idPosicion = ?`, [idLiga, idEquipo, puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5, idPosicion]);
    }
    // Eliminar un equipo de la tabla de posiciones por ID de posición
    static async eliminar(idPosicion) {
        await database_1.pool.query('DELETE FROM POSICIONES_LIGA WHERE idPosicion = ?', [idPosicion]);
    }
}
exports.default = PosicionLigaModel;
