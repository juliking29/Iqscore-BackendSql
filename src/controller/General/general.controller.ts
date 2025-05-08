import { Request, Response } from 'express';
import GeneralService from '../../Model/General/general.model';

export default class GeneralController {
  
  // Buscar entidad por nombre
  public static async buscarEntidad(req: Request, res: Response): Promise<void> {
    try {
      const { nombre } = req.params;

      if (!nombre) {
        res.status(400).json({ mensaje: 'El nombre es obligatorio' });
        return;
      }

      const resultado = await GeneralService.buscarEntidad(nombre);

      if (!resultado) {
        res.status(404).json({ mensaje: 'Entidad no encontrada' });
        return;
      }

      res.json({ resultado });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // Buscar equipo por ID
  public static async buscarEquipoPorID(req: Request, res: Response): Promise<void> {
    try {
      const { idEquipo } = req.params;

      if (!idEquipo) {
        res.status(400).json({ mensaje: 'El ID del equipo es obligatorio' });
        return;
      }

      const equipo = await GeneralService.buscarEquipoPorID(Number(idEquipo));

      if (!equipo) {
        res.status(404).json({ mensaje: 'Equipo no encontrado' });
        return;
      }

      res.json({ equipo });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // Buscar equipos por liga
  public static async buscarEquiposPorLiga(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;

      if (!idLiga) {
        res.status(400).json({ mensaje: 'El ID de la liga es obligatorio' });
        return;
      }

      const equipos = await GeneralService.buscarEquiposPorLiga(Number(idLiga));

      if (!equipos || equipos.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron equipos en esta liga' });
        return;
      }

      res.json({ equipos });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // Obtener todos los equipos
  public static async obtenerTodosLosEquipos(_req: Request, res: Response): Promise<void> {
    try {
      const equipos = await GeneralService.obtenerTodosLosEquipos();

      if (!equipos || equipos.length === 0) {
        res.status(404).json({ mensaje: 'No hay equipos registrados' });
        return;
      }

      res.json({ equipos });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }
}
