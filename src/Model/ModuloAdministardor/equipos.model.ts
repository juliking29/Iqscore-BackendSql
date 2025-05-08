import { pool } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export default class EquiposModel {

  // Obtener el total de jugadores por equipo
  public static async obtenerTotalJugadoresPorEquipo(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(`
      SELECT 
        E.nombre AS equipo,
        COUNT(J.idJugador) AS total_jugadores
      FROM EQUIPOS E
      LEFT JOIN JUGADORES J ON E.idEquipo = J.idEquipoActual
      GROUP BY E.idEquipo
      ORDER BY total_jugadores DESC;
    `);
    
    return Array.isArray(rows) ? rows : [];
  }

  // Obtener el total de equipos por liga
  public static async obtenerTotalEquiposPorLiga(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(`
      SELECT 
        L.nombre AS liga,
        COUNT(E.idEquipo) AS total_equipos
      FROM LIGAS L
      LEFT JOIN EQUIPOS E ON L.idLiga = E.idLiga
      GROUP BY L.idLiga
      ORDER BY total_equipos DESC;
    `);
    
    return Array.isArray(rows) ? rows : [];
  }

  // Obtener los 10 jugadores con mayor valor de mercado
  public static async obtenerTopJugadores(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(`
      SELECT 
        nombre,
        valor_mercado,
        edad,
        posicion,
        goles,
        asistencias
      FROM JUGADORES
      ORDER BY valor_mercado DESC
      LIMIT 10;
    `);
    
    return Array.isArray(rows) ? rows : [];
  }
}
