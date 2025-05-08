import { Request, Response } from "express";
import EquipoServicio from "../../Model/Equipo/equipo.Model";

class EquipoController {
    // Obtener información de un equipo
    // Get team information
    public static async obtenerInformacionEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { idEquipo } = req.params;
            const equipo = await EquipoServicio.obtenerInformacionEquipo(Number(idEquipo));
            res.json(equipo);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener la información del equipo", error });
        }
    }

    // Obtener jugadores de un equipo
    // Get players from a team
    public static async obtenerJugadoresEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { idEquipo } = req.params;
            const jugadores = await EquipoServicio.obtenerJugadoresEquipo(Number(idEquipo));
            res.json(jugadores);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los jugadores del equipo", error });
        }
    }

    // Insertar un nuevo equipo
    // Insert a new team
    public static async insertarEquipo(req: Request, res: Response): Promise<void> {
        try {
            const equipo = req.body;
            await EquipoServicio.insertarEquipo(equipo);
            res.status(201).json({ mensaje: "Equipo insertado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al insertar el equipo", error });
        }
    }

    // Actualizar un equipo
    // Update a team
    public static async actualizarEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { idEquipo } = req.params;
            const equipo = req.body;
            await EquipoServicio.actualizarEquipo(Number(idEquipo), equipo);
            res.json({ mensaje: "Equipo actualizado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar el equipo", error });
        }
    }

    // Eliminar un equipo
    // Delete a team
    public static async eliminarEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { idEquipo } = req.params;
            await EquipoServicio.eliminarEquipo(Number(idEquipo));
            res.json({ mensaje: "Equipo eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el equipo", error });
        }
    }

    // Obtener tabla de posiciones de una liga
    // Get league standings
    public static async obtenerTablaPosiciones(req: Request, res: Response): Promise<void> {
        try {
            const { idLiga } = req.params;

            if (!idLiga || isNaN(Number(idLiga))) {
                res.status(400).json({ message: "El ID de la liga es requerido y debe ser un número válido." });
                return;
            }

            const posiciones = await EquipoServicio.obtenerTablaPosiciones(Number(idLiga));
            res.status(200).json(posiciones);
        } catch (error) {
            console.error("Error al obtener la tabla de posiciones:", error);
            res.status(500).json({ message: "Error al obtener la tabla de posiciones.", error: (error as Error).message });
        }
    }
    
    // Obtener información de un equipo por su nombre
    // Get team information by name
    public static async obtenerInformacionEquipopornombre(req: Request, res: Response): Promise<void> {
        try {
            // Extraer el nombre del equipo desde los parámetros de la URL
            // Extract team name from URL parameters
            const { nombre } = req.params;

            if (!nombre || typeof nombre !== "string") {
                res.status(400).json({ message: "El nombre del equipo es requerido y debe ser un texto válido." });
                return;
            }

            const equipo = await EquipoServicio.buscarEquipoPorNombre(nombre);

            if (equipo.length === 0) {
                res.status(404).json({ message: "No se encontró un equipo con ese nombre." });
                return;
            }

            res.status(200).json(equipo);
        } catch (error) {
            console.error("Error al buscar el equipo por nombre:", error);
            res.status(500).json({ 
                message: "Error al obtener la información del equipo.",
                error: (error as Error).message 
            });
        }
    }
}

export default EquipoController;