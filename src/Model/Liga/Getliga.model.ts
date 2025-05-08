import { pool } from "../../config/database";
import { Liga, Equipo, Jugador, TablaPosiciones } from "../../interfaces/Liga interfaces/Ligainterfaces";

class EquipoModel {
    // Obtener información de una liga por su ID
    public static async obtenerInformacionLiga(idLiga: number): Promise<Liga[]> {
        const [filas]: any = await pool.query("CALL obtener_informacion_liga(?)", [idLiga]);
        return filas[0] as Liga[];
    }

    // Obtener los equipos de una liga por el ID de la liga
    public static async obtenerEquiposLiga(idLiga: number): Promise<Equipo[]> {
        const [filas]: any = await pool.query("CALL obtener_equipos_liga(?)", [idLiga]);
        return filas[0] as Equipo[];
    }

    // Obtener la tabla de posiciones de la liga por su ID
    public static async obtenerPosicionesLiga(idLiga: number): Promise<TablaPosiciones[]> {
        const [filas]: any = await pool.query("CALL obtener_posiciones_liga(?)", [idLiga]);
        return filas[0] as TablaPosiciones[];
    }

    // Obtener los jugadores con más partidos en una liga por ID
    public static async obtenerJugadoresMasPartidos(idLiga: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_mas_partidos(?)", [idLiga]);
        return filas[0] as Jugador[];
    }

    // Obtener los jugadores con más goles en una liga por ID
    public static async obtenerJugadoresMasGoles(idLiga: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_mas_goles(?)", [idLiga]);
        return filas[0] as Jugador[];
    }

    // Obtener los jugadores con más asistencias en una liga por ID
    public static async obtenerJugadoresMasAsistencias(idLiga: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_mas_asistencias(?)", [idLiga]);
        return filas[0] as Jugador[];
    }

    // Obtener los jugadores con más tarjetas rojas en una liga por ID
    public static async obtenerJugadoresMasTarjetasRojas(idLiga: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_mas_tarjetas_rojas(?)", [idLiga]);
        return filas[0] as Jugador[];
    }

    // Obtener los jugadores con más tarjetas amarillas en una liga por ID
    public static async obtenerJugadoresMasTarjetasAmarillas(idLiga: number): Promise<Jugador[]> {
        const [filas]: any = await pool.query("CALL obtener_jugadores_mas_tarjetas_amarillas(?)", [idLiga]);
        return filas[0] as Jugador[];
    }

    // Buscar un equipo por nombre
    public static async buscarEquipoPorNombre(nombreEquipo: string): Promise<Equipo[]> {
        const [filas]: any = await pool.query("CALL buscarEquipoPorNombre(?)", [nombreEquipo]);
        return filas[0] as Equipo[];
    }
}

export default EquipoModel;
