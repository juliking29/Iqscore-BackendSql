"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const equipotitulo_Model_1 = __importDefault(require("../../Model/Equipo/equipotitulo.Model"));
class TituloEquipoController {
    // Insertar un nuevo título de equipo
    // Insert a new team title
    static async insertarTitulo(req, res) {
        try {
            const titulo = req.body; // Recibir el título desde el cuerpo de la solicitud
            // Receive the title from the request body
            await equipotitulo_Model_1.default.insertarTitulo(titulo);
            res.status(201).json({ mensaje: "Título de equipo insertado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: `Error al insertar el título: ${error.message}` });
        }
    }
    // Actualizar un título de equipo
    // Update a team title
    static async actualizarTitulo(req, res) {
        try {
            const { idTitulo } = req.params; // Obtener el id del título a actualizar
            // Get the ID of the title to update
            const titulo = req.body; // Recibir los nuevos datos del título desde el cuerpo de la solicitud
            // Receive the new title data from the request body
            await equipotitulo_Model_1.default.actualizarTitulo(Number(idTitulo), titulo);
            res.json({ mensaje: "Título de equipo actualizado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: `Error al actualizar el título: ${error.message}` });
        }
    }
    // Eliminar un título de equipo
    // Delete a team title
    static async eliminarTitulo(req, res) {
        try {
            const { idTitulo } = req.params; // Obtener el id del título a eliminar
            // Get the ID of the title to delete
            await equipotitulo_Model_1.default.eliminarTitulo(Number(idTitulo));
            res.json({ mensaje: "Título de equipo eliminado correctamente" });
        }
        catch (error) {
            res.status(500).json({ mensaje: `Error al eliminar el título: ${error.message}` });
        }
    }
    // Obtener los títulos de un equipo
    // Get titles of a team
    static async obtenerTitulosEquipo(req, res) {
        try {
            const { equipo_id } = req.params;
            const titulos = await equipotitulo_Model_1.default.obtenerTitulosEquipo(Number(equipo_id));
            res.status(200).json(titulos);
        }
        catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los títulos del equipo", error });
        }
    }
}
exports.default = TituloEquipoController;
