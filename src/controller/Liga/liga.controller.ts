import { Request, Response } from 'express';
import LigaService from '../../Model/Liga/liga.model';
import Liga from '../../interfaces/Liga interfaces/Ligainterfaces';

export default class LigaController {

    // Obtener todas las ligas
    // Get all leagues
    public static async obtenerTodas(_req: Request, res: Response): Promise<void> {
        try {
            const ligas = await LigaService.obtenerTodas();
            res.json(ligas);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Obtener liga por ID
    // Get league by ID
    public static async obtenerPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const liga = await LigaService.obtenerPorId(Number(id));

            if (!liga) {
                res.status(404).json({ mensaje: 'Liga no encontrada' });
                return;
            }

            res.json(liga);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Crear una nueva liga
    // Create a new league
    public static async crear(req: Request, res: Response): Promise<void> {
        try {
            const nuevaLiga: Liga = req.body;
            await LigaService.crear(nuevaLiga);
            res.status(201).json({ mensaje: 'Liga creada correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Actualizar una liga existente
    // Update an existing league
    public static async actualizar(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const datosActualizados: Partial<Liga> = req.body;
            await LigaService.actualizar(Number(id), datosActualizados);
            res.json({ mensaje: 'Liga actualizada correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Eliminar una liga
    // Delete a league
    public static async eliminar(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await LigaService.eliminar(Number(id));
            res.json({ mensaje: 'Liga eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Obtener nombre y logo de todas las ligas
    // Get name and logo of all leagues
    public static async obtenerNombreYLogo(_req: Request, res: Response): Promise<void> {
        try {
            const ligas = await LigaService.obtenerNombreYLogo();
            res.json(ligas);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Obtener liga por nombre
    // Get league by name
    public static async obtenerPorNombre(req: Request, res: Response): Promise<void> {
        try {
            const { nombre } = req.params;

            if (!nombre) {
                res.status(404).json({ mensaje: 'nombre no encontrada' });
                return;
            }
            const liga = await LigaService.obtenerPorNombre(nombre);
            if (liga.length === 0) {
                res.status(404).json({ mensaje: 'Liga no encontrada' });
                return;
            }
            res.json(liga);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}