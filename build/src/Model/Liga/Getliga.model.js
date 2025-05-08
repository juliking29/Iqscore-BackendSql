"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class EquipoModel {
    // Obtener información de una liga por su ID
    static async obtenerInformacionLiga(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_informacion_liga(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los equipos de una liga por el ID de la liga
    static async obtenerEquiposLiga(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_equipos_liga(?)", [idLiga]);
        return filas[0];
    }
    // Obtener la tabla de posiciones de la liga por su ID
    static async obtenerPosicionesLiga(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_posiciones_liga(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los jugadores con más partidos en una liga por ID
    static async obtenerJugadoresMasPartidos(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_mas_partidos(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los jugadores con más goles en una liga por ID
    static async obtenerJugadoresMasGoles(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_mas_goles(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los jugadores con más asistencias en una liga por ID
    static async obtenerJugadoresMasAsistencias(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_mas_asistencias(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los jugadores con más tarjetas rojas en una liga por ID
    static async obtenerJugadoresMasTarjetasRojas(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_mas_tarjetas_rojas(?)", [idLiga]);
        return filas[0];
    }
    // Obtener los jugadores con más tarjetas amarillas en una liga por ID
    static async obtenerJugadoresMasTarjetasAmarillas(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_mas_tarjetas_amarillas(?)", [idLiga]);
        return filas[0];
    }
    // Buscar un equipo por nombre
    static async buscarEquipoPorNombre(nombreEquipo) {
        const [filas] = await database_1.pool.query("CALL buscarEquipoPorNombre(?)", [nombreEquipo]);
        return filas[0];
    }
}
exports.default = EquipoModel;
