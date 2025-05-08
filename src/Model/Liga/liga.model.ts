import { pool } from '../../config/database';
import Liga from '../../interfaces/Liga interfaces/Ligainterfaces';

export default class LigaModel {

  // Obtener todas las ligas
  public static async obtenerTodas(): Promise<Liga[]> {
    const [rows] = await pool.query('SELECT * FROM LIGAS');
    return rows as Liga[];
  }

  // Obtener liga por ID
  public static async obtenerPorId(id: number): Promise<Liga | null> {
    const [rows]: any = await pool.query(
      'SELECT * FROM LIGAS WHERE idLiga = ?',
      [id]
    );

    return Array.isArray(rows) && rows.length > 0 ? rows[0] as Liga : null;
  }

  // Insertar una nueva liga
  public static async crear(liga: Liga): Promise<void> {
    await pool.query('INSERT INTO LIGAS SET ?', [liga]);
  }

  // Actualizar una liga existente
  public static async actualizar(id: number, liga: Partial<Liga>): Promise<void> {
    await pool.query('UPDATE LIGAS SET ? WHERE idLiga = ?', [liga, id]);
  }

  // Eliminar una liga
  public static async eliminar(id: number): Promise<void> {
    await pool.query('DELETE FROM LIGAS WHERE idLiga = ?', [id]);
  }

  
// Obtener liga por nombre
      public static async obtenerPorNombre(nombre: string): Promise<Liga[]> {
        const [rows] = await pool.query('SELECT * FROM LIGAS WHERE nombre LIKE ?', [`%${nombre}%`]);
        return rows as Liga[];
      }
    

        // Obtener nombre y logo de todas las ligas
    
        public static async obtenerNombreYLogo(): Promise<{ nombre: string; logo: string }[]> {
            const [rows] = await pool.query('SELECT nombre, logo FROM LIGAS');
            return rows as { nombre: string; logo: string }[];
        }
        

}
