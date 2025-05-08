
// Assuming this is in a file like 'src/controller/Rumor/rumorFichaje.controller.ts'

import { Request, Response } from "express";
import { RumorFichaje } from "../../interfaces/NoticiaRumor/RumorFichaje";
import RumorFichajeModel from "../../Model/NoticiaRumor/RumorFichajeModel";



class RumorFichajeController {

    // Insertar un nuevo rumor
    public static async insertarRumor(req: Request, res: Response): Promise<void> {
        try {
            // Basic validation (more robust validation is recommended)
            const rumorData: RumorFichaje = req.body;
            if (!rumorData.idJugador || !rumorData.equipo_destino || !rumorData.fecha_rumor) {
                 res.status(400).json({ mensaje: "Faltan campos obligatorios: idJugador, equipo_destino, fecha_rumor" });
                 return;
            }

            const result = await RumorFichajeModel.insertarRumor(rumorData);
            res.status(201).json({ mensaje: "Rumor insertado correctamente", idRumor: result.insertId });
        } catch (error: any) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al insertar el rumor", error: (error as Error).message });
        }
    }

    // Actualizar un rumor
    public static async actualizarRumor(req: Request, res: Response): Promise<void> {
        try {
            const { idRumor } = req.params;
            const rumorData: Partial<RumorFichaje> = req.body;

            if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }
             if (Object.keys(rumorData).length === 0) {
                 res.status(400).json({ mensaje: "No se proporcionaron datos para actualizar." });
                 return;
            }

            const success = await RumorFichajeModel.actualizarRumor(Number(idRumor), rumorData);

            if (success) {
                res.status(200).json({ mensaje: "Rumor actualizado correctamente" });
            } else {
                res.status(404).json({ mensaje: "Rumor no encontrado para actualizar" });
            }
        } catch (error: any) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al actualizar el rumor", error: (error as Error).message });
        }
    }

    // Eliminar un rumor
    public static async eliminarRumor(req: Request, res: Response): Promise<void> {
        try {
            const { idRumor } = req.params;

             if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }

            const success = await RumorFichajeModel.eliminarRumor(Number(idRumor));

             if (success) {
                 res.status(200).json({ mensaje: "Rumor eliminado correctamente" });
             } else {
                 res.status(404).json({ mensaje: "Rumor no encontrado para eliminar" });
             }
        } catch (error: any) {
             console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al eliminar el rumor", error: (error as Error).message });
        }
    }

    // Obtener todos los rumores
    public static async obtenerTodosLosRumores(_req: Request, res: Response): Promise<void> {
        try {
            const rumores = await RumorFichajeModel.obtenerTodosLosRumores();
            res.status(200).json(rumores);
        } catch (error: any) {
             console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener los rumores", error: (error as Error).message });
        }
    }

    // Obtener un rumor por ID
    public static async obtenerRumorPorId(req: Request, res: Response): Promise<void> {
        try {
            const { idRumor } = req.params;

             if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }

            const rumor = await RumorFichajeModel.obtenerRumorPorId(Number(idRumor));
            if (rumor) {
                res.status(200).json(rumor);
            } else {
                res.status(404).json({ mensaje: "Rumor no encontrado" });
            }
        } catch (error: any) {
             console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener el rumor", error: (error as Error).message });
        }
    }

    // Obtener rumores por ID de jugador
     public static async obtenerRumoresPorJugador(req: Request, res: Response): Promise<void> {
        try {
            const { idJugador } = req.params;

            if (isNaN(Number(idJugador))) {
                res.status(400).json({ mensaje: "ID de jugador inválido." });
                return;
            }

            const rumores = await RumorFichajeModel.obtenerRumoresPorJugador(Number(idJugador));
            // Always return 200, even if the array is empty
            res.status(200).json(rumores);
        } catch (error: any) {
             console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener los rumores del jugador", error: (error as Error).message });
        }
    }
}

export default RumorFichajeController;