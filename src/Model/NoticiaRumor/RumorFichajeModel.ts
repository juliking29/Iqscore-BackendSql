// Assuming this is in a file like 'src/Model/Rumor/rumorFichaje.Model.ts'

import { pool } from "../../config/database"; // Adjust path as needed
import { RumorFichaje } from "../../interfaces/NoticiaRumor/RumorFichaje"; // Adjust path as needed
import { RowDataPacket, ResultSetHeader } from 'mysql2'; // Import necessary types

class RumorFichajeModel {

    // Insertar un nuevo rumor de fichaje
    // Insert a new transfer rumor
    public static async insertarRumor(rumor: RumorFichaje): Promise<ResultSetHeader> {
        const {
            idJugador,
            equipo_origen,
            equipo_destino,
            valor_estimado,
            fecha_rumor,
            fuente,
            credibilidad,
            descripcion
        } = rumor;

        // Note: idRumor is auto-incremented and not included here.
        // Handle optional fields: pass null if undefined or null.
        const sql = `INSERT INTO RUMORES_FICHAJES
                     (idJugador, equipo_origen, equipo_destino, valor_estimado, fecha_rumor, fuente, credibilidad, descripcion)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        try {
            const [result] = await pool.execute<ResultSetHeader>(sql, [
                idJugador,
                equipo_origen ?? null,
                equipo_destino,
                valor_estimado ?? null,
                fecha_rumor,
                fuente ?? null,
                credibilidad ?? 'Media', // Use default if not provided
                descripcion ?? null
            ]);
            console.log("Rumor insertado:", result);
            return result; // Return the result which includes insertId
        } catch (error: any) {
            console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al insertar el rumor: ${(error as Error).message}`);
        }
    }

    // Actualizar un rumor de fichaje
    // Update a transfer rumor
    public static async actualizarRumor(idRumor: number, rumor: Partial<RumorFichaje>): Promise<boolean> {
        // Build SET clause dynamically based on provided fields in 'rumor' object
        const fields = Object.keys(rumor).filter(key => key !== 'idRumor'); // Exclude idRumor from update fields
        if (fields.length === 0) {
            throw new Error("No fields provided for update.");
        }

        const setClause = fields.map(key => `${key} = ?`).join(', ');
        const values = fields.map(key => (rumor as any)[key]);

        const sql = `UPDATE RUMORES_FICHAJES SET ${setClause} WHERE idRumor = ?`;

        try {
            const [result] = await pool.execute<ResultSetHeader>(sql, [...values, idRumor]);
            if (result.affectedRows === 0) {
                console.warn(`Rumor con id ${idRumor} no encontrado para actualizar.`);
                return false; // Indicate not found/not updated
            }
            console.log("Rumor actualizado:", result);
            return true; // Indicate success
        } catch (error: any) {
            console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al actualizar el rumor: ${(error as Error).message}`);
        }
    }

    // Eliminar un rumor de fichaje
    // Delete a transfer rumor
    public static async eliminarRumor(idRumor: number): Promise<boolean> {
        const sql = `DELETE FROM RUMORES_FICHAJES WHERE idRumor = ?`;

        try {
            const [result] = await pool.execute<ResultSetHeader>(sql, [idRumor]);
            if (result.affectedRows === 0) {
                 console.warn(`Rumor con id ${idRumor} no encontrado para eliminar.`);
                return false; // Indicate not found/not deleted
            }
            console.log("Rumor eliminado:", result);
            return true; // Indicate success
        } catch (error: any) {
            console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al eliminar el rumor: ${(error as Error).message}`);
        }
    }

    // Obtener todos los rumores de fichajes
    // Get all transfer rumors
    public static async obtenerTodosLosRumores(): Promise<RumorFichaje[]> {
        const sql = `SELECT * FROM RUMORES_FICHAJES ORDER BY fecha_rumor DESC, idRumor DESC`;
        try {
            // Specify RowDataPacket[] as the expected row type
            const [rows] = await pool.execute<RowDataPacket[]>(sql);
            // Cast the result to the desired interface
            return rows as RumorFichaje[];
        } catch (error: any) {
             console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al obtener los rumores: ${(error as Error).message}`);
        }
    }

    // Obtener un rumor específico por ID
    // Get a specific rumor by ID
    public static async obtenerRumorPorId(idRumor: number): Promise<RumorFichaje | null> {
        const sql = `SELECT * FROM RUMORES_FICHAJES WHERE idRumor = ?`;
        try {
            const [rows] = await pool.execute<RowDataPacket[]>(sql, [idRumor]);
            if (rows.length === 0) {
                return null; // Not found
            }
            // Cast the first row to the desired interface
            return rows[0] as RumorFichaje;
        } catch (error: any) {
             console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al obtener el rumor: ${(error as Error).message}`);
        }
    }

     // Obtener rumores por id de jugador
     // Get rumors by player ID
     public static async obtenerRumoresPorJugador(idJugador: number): Promise<RumorFichaje[]> {
        const sql = `SELECT * FROM RUMORES_FICHAJES WHERE idJugador = ? ORDER BY fecha_rumor DESC, idRumor DESC`;
        try {
            const [rows] = await pool.execute<RowDataPacket[]>(sql, [idJugador]);
            return rows as RumorFichaje[];
        } catch (error: any) {
             console.error("Error raw:", error); // Log the raw error
            throw new Error(`Error al obtener los rumores del jugador: ${(error as Error).message}`);
        }
    }
}

export default RumorFichajeModel;