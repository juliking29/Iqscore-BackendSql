import { Request, Response } from "express";
import TituloEquipoServicio from "../../Model/Equipo/equipotitulo.Model";
import { TituloEquipo } from "../../interfaces/Equipo Interfaces/equipo";

class TituloEquipoController {
    // Insertar un nuevo título de equipo
    // Insert a new team title
    public static async insertarTitulo(req: Request, res: Response): Promise<void> {
        try {
            const titulo: TituloEquipo = req.body; // Recibir el título desde el cuerpo de la solicitud
                                                  // Receive the title from the request body
            await TituloEquipoServicio.insertarTitulo(titulo);
            res.status(201).json({ mensaje: "Título de equipo insertado correctamente" });
        } catch (error: any) {
            res.status(500).json({ mensaje: `Error al insertar el título: ${(error as Error).message}` });
        }
    }

    // Actualizar un título de equipo
    // Update a team title
    public static async actualizarTitulo(req: Request, res: Response): Promise<void> {
        try {
            const { idTitulo } = req.params; // Obtener el id del título a actualizar
                                            // Get the ID of the title to update
            const titulo: TituloEquipo = req.body; // Recibir los nuevos datos del título desde el cuerpo de la solicitud
                                                  // Receive the new title data from the request body
            await TituloEquipoServicio.actualizarTitulo(Number(idTitulo), titulo);
            res.json({ mensaje: "Título de equipo actualizado correctamente" });
        } catch (error: any) {
            res.status(500).json({ mensaje: `Error al actualizar el título: ${(error as Error).message}` });
        }
    }

    // Eliminar un título de equipo
    // Delete a team title
    public static async eliminarTitulo(req: Request, res: Response): Promise<void> {
        try {
            const { idTitulo } = req.params; // Obtener el id del título a eliminar
                                            // Get the ID of the title to delete
            await TituloEquipoServicio.eliminarTitulo(Number(idTitulo));
            res.json({ mensaje: "Título de equipo eliminado correctamente" });
        } catch (error: any) {
            res.status(500).json({ mensaje: `Error al eliminar el título: ${(error as Error).message}` });
        }
    }

    // Obtener los títulos de un equipo
    // Get titles of a team
    public static async obtenerTitulosEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { equipo_id } = req.params;
            const titulos = await TituloEquipoServicio.obtenerTitulosEquipo(Number(equipo_id));
            res.status(200).json(titulos);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los títulos del equipo", error });
        }
    }
}

export default TituloEquipoController;