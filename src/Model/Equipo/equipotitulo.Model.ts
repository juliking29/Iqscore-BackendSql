import { TituloEquipo } from "../../interfaces/Equipo Interfaces/equipo";
import { pool } from "../../config/database";

class TituloEquipoModel {
    // Insertar un nuevo título de equipo
    // Insert a new team title
    public static async insertarTitulo(titulo: TituloEquipo): Promise<void> {
 const { idEquipo, nombre_titulo, año } = titulo;

        const sql = `INSERT INTO TITULOS_EQUIPOS (idEquipo, nombre_titulo, año) 
                     VALUES (?, ?, ?)`;

        try {
            const [result] = await pool.execute(sql, [idEquipo, nombre_titulo, año]);
            console.log("Título insertado:", result); // Title inserted
        } catch (error: any) {  // Hacer type assertion a 'any' // Perform type assertion to 'any'
            throw new Error(`Error al insertar el título: ${(error as Error).message}`); // Acceder a la propiedad 'message' de la clase 'Error' // Access the 'message' property of the 'Error' class
        }
    }

    // Actualizar un título de equipo
    // Update a team title
    public static async actualizarTitulo(idTitulo: number, titulo: TituloEquipo): Promise<void> {
 const { nombre_titulo, año } = titulo;

        const sql = `UPDATE TITULOS_EQUIPOS
                     SET nombre_titulo = ?, año = ?
                     WHERE idTituloEquipo = ?`;

        try {
            const [result] = await pool.execute(sql, [nombre_titulo, año, idTitulo]);
            if ((result as any).affectedRows === 0) {
                throw new Error("Título no encontrado para actualizar."); // Title not found for update
            }
            console.log("Título actualizado:", result); // Title updated
        } catch (error: any) {
            throw new Error(`Error al actualizar el título: ${(error as Error).message}`); // Error updating the title
        }
    }

    // Eliminar un título de equipo
    // Delete a team title
    public static async eliminarTitulo(idTitulo: number): Promise<void> {
 const sql = `DELETE FROM TITULOS_EQUIPOS WHERE idTituloEquipo = ?`;

        try {
            const [result] = await pool.execute(sql, [idTitulo]);
            if ((result as any).affectedRows === 0) {
                throw new Error("Título no encontrado para eliminar."); // Title not found for deletion
            }
            console.log("Título eliminado:", result); // Title deleted
        } catch (error: any) {
            throw new Error(`Error al eliminar el título: ${(error as Error).message}`); // Error deleting the title
        }
    }

    // Obtener los títulos de un equipo usando el procedimiento almacenado
    // Get team titles using the stored procedure
    public static async obtenerTitulosEquipo(equipo_id: number): Promise<any> {
 const sql = `CALL obtener_titulos_equipofinal1(?)`;

        try {
            const [result] = await pool.execute(sql, [equipo_id]);
            return result; // Return the result
        } catch (error: any) {
            throw new Error(`Error al obtener los títulos del equipo: ${error.message}`); // Error getting the team titles
        }
    }
}

export default TituloEquipoModel;