import { pool } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export default class LogsModel {

  public static async obtenerTransferencias(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM JUGADORES_TRANSFERENCIAS_LOG');
    return rows;
  }

  public static async obtenerJugadoresEliminados(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM JUGADORES_DELETED_LOG');
    return rows;
  }

  public static async obtenerEquiposEliminados(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM EQUIPOS_DELETED_LOG');
    return rows;
  }

  public static async obtenerLigasLog(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM LIGAS_LOG');
    return rows;
  }

  public static async obtenerTotales(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>(`
      SELECT 
        (SELECT COUNT(*) FROM JUGADORES) AS total_jugadores,
        (SELECT COUNT(*) FROM EQUIPOS) AS total_equipos,
        (SELECT COUNT(*) FROM LIGAS) AS total_ligas
    `);
    return rows;
  }
}
