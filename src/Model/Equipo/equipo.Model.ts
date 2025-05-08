import { pool } from "../../config/database";
import {  Jugador, Equipo, TablaPosiciones } from "../../interfaces/Equipo Interfaces/equipo";

class EquipoModel {
    // Obtener información de un equipo / Get team information
    public static async obtenerInformacionEquipo(idEquipo: number): Promise<Equipo[]> {
        const [filas]: any = await pool.query("CALL obtenerInformacionEquipo(?)", [idEquipo]);
        return filas[0];
    }

    // Obtener jugadores de un equipo / Get players from a team
    public static async obtenerJugadoresEquipo(idEquipo: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_equipofinal(?)", [idEquipo]);
        return filas[0];
    }

    public static async insertarEquipo(equipo: Equipo): Promise<void> {
        const { 
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
        } = equipo;

        await pool.query(
            `INSERT INTO EQUIPOS 
            (nombre, idLiga, ciudad, estadioNombre, ubicacion_estadio, descripcion_historica, 
            valor_mercado, entrenador, presidente, logo, estadiologo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
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
            ]
        );
    }

    // Actualizar un equipo / Update a team
    public static async actualizarEquipo(idEquipo: number, equipo: Equipo): Promise<void> {
        const { 
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
        } = equipo;

        await pool.query(
            `UPDATE EQUIPOS SET 
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
            WHERE idEquipo = ?`,
            [
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
            ]
        );
    }

    // Eliminar un equipo / Delete a team
    public static async eliminarEquipo(idEquipo: number): Promise<void> {
        await pool.query("DELETE FROM EQUIPOS WHERE idEquipo = ?", [idEquipo]);
    }

    // Obtener la tabla de posiciones / Get the standings table
    public static async obtenerTablaPosiciones(idLiga: number): Promise<TablaPosiciones[]> {
        const [filas]: any = await pool.query("CALL obtener_tabla_posiciones(?)", [idLiga]);
        return filas[0]; 
    }

    // Buscar un equipo por nombre / Search for a team by name
    public static async buscarEquipoPorNombre(nombreEquipo: string): Promise<Equipo[]> {
        const [filas]: any = await pool.query("CALL buscarEquipoPorNombre(?)", [nombreEquipo]);
        return filas[0]; 
    }
}

export default EquipoModel;
