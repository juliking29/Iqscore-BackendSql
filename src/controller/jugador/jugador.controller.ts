import { Request, Response } from 'express';
import JugadorService from '../../Model/jugador/jugador.model';
import Jugador from '../../interfaces/juagdor interfaces/jugador.interface';

export default class JugadorController {

  // Método para obtener todos los jugadores
  // Method to get all players
  public static async obtenerTodos(_req: Request, res: Response): Promise<void> {
    try {
      const jugadores: Jugador[] = await JugadorService.obtenerTodos();
      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores', error });
    }
  }

  // Método para obtener jugadores por nombre
  // Method to get players by name
  public static async obtenerPorNombre(req: Request, res: Response): Promise<void> {
    try {
      const { nombre } = req.params;
  
      // Validar que el parámetro nombre no sea undefined
      // Validate that the name parameter is not undefined
      if (!nombre) {
        res.status(400).json({ mensaje: 'El nombre es requerido' });
        return;
      }
  
      const jugadores: Jugador[] = await JugadorService.obtenerPorNombre(nombre);
      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener jugadores por nombre', error });
    }
  }
  
  // Método para obtener un jugador por su ID
  // Method to get a player by ID
  public static async obtenerPorId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const jugador: Jugador | null = await JugadorService.obtenerPorId(Number(id));

      if (!jugador) {
        res.status(404).json({ mensaje: 'Jugador no encontrado' });
        return;
      }

      res.json(jugador);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el jugador', error });
    }
  }

  // Método para crear un nuevo jugador
  // Method to create a new player
  public static async crear(req: Request, res: Response): Promise<void> {
    try {
      const jugador: Jugador = req.body;
      await JugadorService.crear(jugador);
      res.status(201).json({ mensaje: 'Jugador creado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear el jugador', error });
    }
  }

  // Método para actualizar un jugador por su ID
  // Method to update a player by ID
  public static async actualizar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const jugador: Partial<Jugador> = req.body;
      await JugadorService.actualizar(Number(id), jugador);
      res.json({ mensaje: 'Jugador actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar el jugador', error });
    }
  }

  // Método para eliminar un jugador por su ID
  // Method to delete a player by ID
  public static async eliminar(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await JugadorService.eliminar(Number(id));
      res.json({ mensaje: 'Jugador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el jugador', error });
    }
  }
}