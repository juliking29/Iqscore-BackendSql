import { Request, Response } from 'express';
import PosicionLigaService from '../../Model/Liga/TabladePosiciones.model';

export default class PosicionLigaController {
  
  // Obtener todas las posiciones de una liga específica
  // Get all positions for a specific league
  public static async obtenerPorLiga(req: Request, res: Response) {
    try {
      const { idLiga } = req.params;
      const posiciones = await PosicionLigaService.obtenerPorLiga(Number(idLiga));
      res.json(posiciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener posiciones de la liga', error });
    }
  }

  // Obtener la posición de un equipo por ID
  // Get the position of a team by ID
  public static async obtenerPorEquipo(req: Request, res: Response): Promise<any> {
    try {
      const { idEquipo } = req.params;
      const posicion = await PosicionLigaService.obtenerPorEquipo(Number(idEquipo));
      if (!posicion) {
        return res.status(404).json({ message: 'Posición no encontrada' });
      }
      res.json(posicion);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la posición del equipo', error });
    }
  }

  // Obtener posiciones por nombre de equipo
  // Get positions by team name
  public static async obtenerPorNombreEquipo(req: Request, res: Response): Promise<any> {
    try {
      let { nombreEquipo } = req.params;
  
      // Verificar si el parámetro fue enviado
      // Check if the parameter was sent
      if (!nombreEquipo || nombreEquipo.trim() === "") {
        return res.status(400).json({ message: 'El nombre del equipo es requerido' });
      }
  
      // Normalizar: eliminar espacios extras y convertir a minúsculas
      // Normalize: remove extra spaces and convert to lowercase
      nombreEquipo = nombreEquipo.trim().toLowerCase();
      console.log("Buscando posiciones para el equipo:", nombreEquipo); // Depuración
  
      // Obtener las posiciones del servicio
      // Get positions from the service
      const posiciones = await PosicionLigaService.obtenerPorNombreEquipo(nombreEquipo);
  
      // Si no se encontraron posiciones, devolver un 404
      // If no positions were found, return a 404
      if (!posiciones || posiciones.length === 0) {
        return res.status(404).json({ message: 'No se encontraron posiciones para el equipo' });
      }
  
      res.json(posiciones);
    } catch (error) {
      console.error("Error en obtenerPorNombreEquipo:", error);
      res.status(500).json({ message: 'Error al obtener posiciones por nombre de equipo', error });
    }
  }
  
  // Crear una nueva posición en la liga
  // Create a new position in the league
  public static async crear(req: Request, res: Response) {
    try {
      await PosicionLigaService.crear(req.body);
      res.status(201).json({ message: 'Posición creada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la posición', error });
    }
  }

  // Actualizar la posición de un equipo en la liga por idPosicion
  // Update the position of a team in the league by idPosicion
  public static async actualizar(req: Request, res: Response) {
    try {
      const { idPosicion } = req.params;
      await PosicionLigaService.actualizar(Number(idPosicion), req.body);
      res.json({ message: 'Posición actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la posición', error });
    }
  }

  // Eliminar una posición en la liga por idPosicion
  // Delete a position in the league by idPosicion
  public static async eliminar(req: Request, res: Response) {
    try {
      const { idPosicion } = req.params;
      await PosicionLigaService.eliminar(Number(idPosicion));
      res.json({ message: 'Posición eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la posición', error });
    }
  }
}