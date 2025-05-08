import { pool } from '../../config/database';
import Jugador from '../../interfaces/juagdor interfaces/jugador.interface';

export default class JugadorModel {

  // Método para obtener todos los jugadores de la base de datos
  // Method to get all players from the database
  public static async obtenerTodos(): Promise<Jugador[]> {
    const [rows] = await pool.query('SELECT * FROM JUGADORES'); 
    return rows as Jugador[]; 
  }

  // Método para obtener jugadores filtrados por nombre
  // Method to get players filtered by name
  public static async obtenerPorNombre(nombre: string): Promise<Jugador[]> {
    const [rows] = await pool.query(
      'SELECT * FROM JUGADORES WHERE nombre LIKE ?',
      [`%${nombre}%`] 
    );
    return rows as Jugador[]; 
  }

  // Método para obtener un jugador por su ID
  // Method to get a player by their ID
  public static async obtenerPorId(id: number): Promise<Jugador | null> {
    const [rows]: any = await pool.query(
      'SELECT * FROM JUGADORES WHERE idJugador = ?',
      [id] // Busca al jugador por su ID
           // Search for the player by their ID
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0] as Jugador; 
    }
    return null; 
  }

  // Método para insertar un nuevo jugador en la base de datos
  // Method to insert a new player into the database
  public static async crear(jugador: Jugador): Promise<void> {
    await pool.query(
      'INSERT INTO JUGADORES SET ?',
      [jugador] 
    );
  }

  // Método para actualizar la información de un jugador
  // Method to update a player's information
  public static async actualizar(
    id: number,
    jugador: Partial<Jugador>
  ): Promise<void> {
    await pool.query(
      'UPDATE JUGADORES SET ? WHERE idJugador = ?',
      [jugador, id] 
    );
  }

  // Método para eliminar un jugador de la base de datos
  // Method to delete a player from the database
  public static async eliminar(id: number): Promise<void> {
    await pool.query(
      'DELETE FROM JUGADORES WHERE idJugador = ?',
      [id] 
    );
  }
}