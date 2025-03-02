import { pool } from '../../config/database';
import { RowDataPacket } from 'mysql2';

export default class GeneralModel {


  public static async buscarEntidad(nombre: string): Promise<string | null> {
    const [rows] = await pool.query<RowDataPacket[]>(`SELECT buscarEntidad(?) AS resultado`, [nombre]);

    if (Array.isArray(rows) && rows.length > 0) {
      const resultado = (rows[0] as { resultado?: string })?.resultado; 
      if (resultado !== undefined && resultado !== null) {
        return resultado;
      }
    }

    return 'No se encontraron resultados';
  }

 // Buscar un equipo por ID
public static async buscarEquipoPorID(idEquipo: number): Promise<RowDataPacket | null> {
  const [rows] = await pool.query<RowDataPacket[]>('CALL buscarEquipoPorID(?)', [idEquipo]);

  if (Array.isArray(rows) && rows.length > 0 && rows[0] !== undefined) {
    return rows[0];
  }

  return null;
}

  // Buscar todos los equipos de una liga por ID de la liga
  public static async buscarEquiposPorLiga(idLiga: number): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('CALL buscarEquiposPorLiga(?)', [idLiga]);

    return Array.isArray(rows) ? rows : [];
  }

  // Obtener todos los equipos con ID, Liga y Nombre
  public static async obtenerTodosLosEquipos(): Promise<RowDataPacket[]> {
    const [rows] = await pool.query<RowDataPacket[]>('CALL obtenerTodosLosEquipos()');

    return Array.isArray(rows) ? rows : [];
  }
}
