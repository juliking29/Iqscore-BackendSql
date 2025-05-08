"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class EquipoModel {
    // Obtener información de un equipo / Get team information
    static async obtenerInformacionEquipo(idEquipo) {
        const [filas] = await database_1.pool.query("CALL obtenerInformacionEquipo(?)", [idEquipo]);
        return filas[0];
    }
    // Obtener jugadores de un equipo / Get players from a team
    static async obtenerJugadoresEquipo(idEquipo) {
        const [filas] = await database_1.pool.query("CALL obtener_jugadores_equipofinal(?)", [idEquipo]);
        return filas[0];
    }
    static async insertarEquipo(equipo) {
        const { nombre, idLiga, ciudad, estadioNombre, ubicacionEstadio, descripcionHistorica, valorMercado, entrenador, presidente, logo, estadioLogo } = equipo;
        await database_1.pool.query(`INSERT INTO EQUIPOS 
            (nombre, idLiga, ciudad, estadioNombre, ubicacion_estadio, descripcion_historica, 
            valor_mercado, entrenador, presidente, logo, estadiologo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            nombre,
            idLiga,
            ciudad,
            estadioNombre,
            ubicacionEstadio,
            descripcionHistorica,
            valorMercado,
            entrenador,
            presidente,
            logo,
            estadioLogo
        ]);
    }
    // Actualizar un equipo / Update a team
    static async actualizarEquipo(idEquipo, equipo) {
        const { nombre, idLiga, ciudad, estadioNombre, ubicacionEstadio, descripcionHistorica, valorMercado, entrenador, presidente, logo, estadioLogo } = equipo;
        await database_1.pool.query(`UPDATE EQUIPOS SET 
                nombre = ?, 
                idLiga = ?, 
                ciudad = ?, 
                estadioNombre = ?, 
                ubicacion_estadio = ?, 
                descripcion_historica = ?, 
                valor_mercado = ?, 
                entrenador = ?, 
                presidente = ?, 
                logo = ?, 
                estadiologo = ? 
            WHERE idEquipo = ?`, [
            nombre,
            idLiga,
            ciudad,
            estadioNombre,
            ubicacionEstadio,
            descripcionHistorica,
            valorMercado,
            entrenador,
            presidente,
            logo,
            estadioLogo,
            idEquipo
        ]);
    }
    // Eliminar un equipo / Delete a team
    static async eliminarEquipo(idEquipo) {
        await database_1.pool.query("DELETE FROM EQUIPOS WHERE idEquipo = ?", [idEquipo]);
    }
    // Obtener la tabla de posiciones / Get the standings table
    static async obtenerTablaPosiciones(idLiga) {
        const [filas] = await database_1.pool.query("CALL obtener_tabla_posiciones(?)", [idLiga]);
        return filas[0];
    }
    // Buscar un equipo por nombre / Search for a team by name
    static async buscarEquipoPorNombre(nombreEquipo) {
        const [filas] = await database_1.pool.query("CALL buscarEquipoPorNombre(?)", [nombreEquipo]);
        return filas[0];
    }
}
exports.default = EquipoModel;
