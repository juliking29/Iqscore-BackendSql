import { Request, Response } from 'express';
import JugadorService from '../../Model/jugador/jugadordetalles.model';
import HistorialEquipo from '../../interfaces/juagdor interfaces/historialjuagdor.intefaces';
import Titulo from '../../interfaces/juagdor interfaces/tiutlosjugador.interfaces';

export default class JugadorController {
    // Obtener detalles de un jugador por su ID
    // Get player details by ID
    public static async obtenerDetallesPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const jugador = await JugadorService.obtenerDetallesPorId(Number(id));
            if (!jugador) {
                res.status(404).json({ mensaje: 'Jugador no encontrado' });
                return;
            }
            res.json(jugador);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Obtener historial de equipos de un jugador
    // Get player's team history
    public static async obtenerHistorialEquipos(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const historial = await JugadorService.obtenerHistorialEquipos(Number(id));
            res.json(historial);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Obtener títulos de un jugador
    // Get player's titles
    public static async obtenerTitulos(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const titulos = await JugadorService.obtenerTitulos(Number(id));
            res.json(titulos);
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Agregar historial de equipo a un jugador
    // Add team history to a player
    public static async agregarHistorialEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const historial: HistorialEquipo = req.body;
            await JugadorService.agregarHistorialEquipo(Number(id), historial);
            res.status(201).json({ mensaje: 'Historial agregado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Agregar título a un jugador
    // Add title to a player
    public static async agregarTitulo(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const titulo: Titulo = req.body;
            await JugadorService.agregarTitulo(Number(id), titulo);
            res.status(201).json({ mensaje: 'Título agregado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Eliminar historial de equipo de un jugador
    // Remove team history from a player
    public static async eliminarHistorialEquipo(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { nombreEquipo } = req.body;
            await JugadorService.eliminarHistorialEquipo(Number(id), nombreEquipo);
            res.json({ mensaje: 'Historial eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }

    // Eliminar título de un jugador
    // Remove title from a player
    public static async eliminarTitulo(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { nombreTitulo } = req.body;
            await JugadorService.eliminarTitulo(Number(id), nombreTitulo);
            res.json({ mensaje: 'Título eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
        }
    }
}