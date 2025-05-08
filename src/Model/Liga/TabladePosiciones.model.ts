import { pool } from '../../config/database';
import PosicionLiga from '../../interfaces/general/general';

export default class PosicionLigaModel {

   // Obtener todas las posiciones de una liga específica, incluyendo el nombre del equipo
   public static async obtenerPorLiga(idLiga: number): Promise<PosicionLiga[]> {
    const [rows] = await pool.query(
      `SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo
       WHERE PL.idLiga = ? 
       ORDER BY PL.posicion ASC`,
      [idLiga]
    );
    return rows as PosicionLiga[];
  }

  // Obtener la posición de un equipo específico por ID, incluyendo el nombre del equipo
  public static async obtenerPorEquipo(idEquipo: number): Promise<PosicionLiga | null> {
    const [rows]: any = await pool.query(
      `SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo
       WHERE PL.idEquipo = ?`,
      [idEquipo]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as PosicionLiga;
    }
    return null;
  }

  public static async obtenerPorNombreEquipo(nombreEquipo: string): Promise<PosicionLiga[]> {
    // Normalizamos el nombre (quitamos espacios y convertimos a minúsculas)
    const nombreNormalizado = `%${nombreEquipo.trim().toLowerCase()}%`;
    console.log("Buscando equipo con nombre similar a:", nombreNormalizado); // Para depuración

    // Consulta SQL: Usamos LIKE para buscar coincidencias parciales
    const [rows] = await pool.query(
      `SELECT PL.*, E.nombre AS nombreEquipo 
       FROM POSICIONES_LIGA PL 
       JOIN EQUIPOS E ON PL.idEquipo = E.idEquipo 
       WHERE LOWER(TRIM(E.nombre)) LIKE ? 
       ORDER BY PL.posicion ASC`,
      [nombreNormalizado]
    );

    console.log("Resultados encontrados:", rows); // Para depuración

    return rows as PosicionLiga[];
}



  // Insertar un equipo en la tabla de posiciones de una liga
  public static async crear(posicion: PosicionLiga): Promise<void> {
    const {
      idLiga,
      idEquipo,
      posicion: puesto,
      puntos,
      ultimo_partido_1,
      ultimo_partido_2,
      ultimo_partido_3,
      ultimo_partido_4,
      ultimo_partido_5
    } = posicion;

    await pool.query(
      `INSERT INTO POSICIONES_LIGA 
      (idLiga, idEquipo, posicion, puntos, 
       ultimo_partido_1, ultimo_partido_2, 
       ultimo_partido_3, ultimo_partido_4, ultimo_partido_5) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [idLiga, idEquipo, puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5]
    );
  }

  // Actualizar la posición de un equipo (por idPosicion)
  public static async actualizar(idPosicion: number, posicion: PosicionLiga): Promise<void> {
    const {
      idLiga,
      idEquipo,
      posicion: puesto,
      puntos,
      ultimo_partido_1,
      ultimo_partido_2,
      ultimo_partido_3,
      ultimo_partido_4,
      ultimo_partido_5
    } = posicion;

    await pool.query(
      `UPDATE POSICIONES_LIGA 
      SET idLiga = ?, idEquipo = ?, posicion = ?, puntos = ?, 
          ultimo_partido_1 = ?, ultimo_partido_2 = ?, 
          ultimo_partido_3 = ?, ultimo_partido_4 = ?, ultimo_partido_5 = ?
      WHERE idPosicion = ?`,
      [idLiga, idEquipo, puesto, puntos, ultimo_partido_1, ultimo_partido_2, ultimo_partido_3, ultimo_partido_4, ultimo_partido_5, idPosicion]
    );
  }

  // Eliminar un equipo de la tabla de posiciones por ID de posición
  public static async eliminar(idPosicion: number): Promise<void> {
    await pool.query(
      'DELETE FROM POSICIONES_LIGA WHERE idPosicion = ?',
      [idPosicion]
    );
  }
}
