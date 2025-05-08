"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../config/database");
class TituloEquipoModel {
    // Insertar un nuevo título de equipo
    // Insert a new team title
    static async insertarTitulo(titulo) {
        const { idEquipo, nombre_titulo, año } = titulo;
        const sql = `INSERT INTO TITULOS_EQUIPOS (idEquipo, nombre_titulo, año) 
                     VALUES (?, ?, ?)`;
        try {
            const [result] = await database_1.pool.execute(sql, [idEquipo, nombre_titulo, año]);
            console.log("Título insertado:", result); // Title inserted
        }
        catch (error) { // Hacer type assertion a 'any' // Perform type assertion to 'any'
            throw new Error(`Error al insertar el título: ${error.message}`); // Acceder a la propiedad 'message' de la clase 'Error' // Access the 'message' property of the 'Error' class
        }
    }
    // Actualizar un título de equipo
    // Update a team title
    static async actualizarTitulo(idTitulo, titulo) {
        const { nombre_titulo, año } = titulo;
        const sql = `UPDATE TITULOS_EQUIPOS
                     SET nombre_titulo = ?, año = ?
                     WHERE idTituloEquipo = ?`;
        try {
            const [result] = await database_1.pool.execute(sql, [nombre_titulo, año, idTitulo]);
            if (result.affectedRows === 0) {
                throw new Error("Título no encontrado para actualizar."); // Title not found for update
            }
            console.log("Título actualizado:", result); // Title updated
        }
        catch (error) {
            throw new Error(`Error al actualizar el título: ${error.message}`); // Error updating the title
        }
    }
    // Eliminar un título de equipo
    // Delete a team title
    static async eliminarTitulo(idTitulo) {
        const sql = `DELETE FROM TITULOS_EQUIPOS WHERE idTituloEquipo = ?`;
        try {
            const [result] = await database_1.pool.execute(sql, [idTitulo]);
            if (result.affectedRows === 0) {
                throw new Error("Título no encontrado para eliminar."); // Title not found for deletion
            }
            console.log("Título eliminado:", result); // Title deleted
        }
        catch (error) {
            throw new Error(`Error al eliminar el título: ${error.message}`); // Error deleting the title
        }
    }
    // Obtener los títulos de un equipo usando el procedimiento almacenado
    // Get team titles using the stored procedure
    static async obtenerTitulosEquipo(equipo_id) {
        const sql = `CALL obtener_titulos_equipofinal1(?)`;
        try {
            const [result] = await database_1.pool.execute(sql, [equipo_id]);
            return result; // Return the result
        }
        catch (error) {
            throw new Error(`Error al obtener los títulos del equipo: ${error.message}`); // Error getting the team titles
        }
    }
}
exports.default = TituloEquipoModel;
