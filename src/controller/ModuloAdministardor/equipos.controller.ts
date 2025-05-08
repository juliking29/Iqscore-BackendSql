import { Request, Response } from 'express';
import EquiposModel from '../../Model/ModuloAdministardor/equipos.model';

export default class EquiposController {

  // Obtener el total de jugadores por equipo
  public static async obtenerTotalJugadoresPorEquipo(_req: Request, res: Response): Promise<void> {
    try {
      const equipos = await EquiposModel.obtenerTotalJugadoresPorEquipo();
      
      if (!equipos || equipos.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron equipos' });
        return;
      }

      res.json({ equipos });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // Obtener el total de equipos por liga
  public static async obtenerTotalEquiposPorLiga(_req: Request, res: Response): Promise<void> {
    try {
      const ligas = await EquiposModel.obtenerTotalEquiposPorLiga();
      
      if (!ligas || ligas.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron ligas' });
        return;
      }

      res.json({ ligas });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }

  // Obtener los 10 jugadores con mayor valor de mercado
  public static async obtenerTopJugadores(_req: Request, res: Response): Promise<void> {
    try {
      const jugadores = await EquiposModel.obtenerTopJugadores();
      
      if (!jugadores || jugadores.length === 0) {
        res.status(404).json({ mensaje: 'No se encontraron jugadores' });
        return;
      }

      res.json({ jugadores });
    } catch (error) {
      res.status(500).json({ mensaje: error instanceof Error ? error.message : 'Error desconocido' });
    }
  }
}
