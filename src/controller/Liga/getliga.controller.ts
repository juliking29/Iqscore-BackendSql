import { Request, Response } from 'express';
import EquipoServicio from '../../Model/Liga/Getliga.model';
import { Liga, Equipo, Jugador, TablaPosiciones } from '../../interfaces/Liga interfaces/Ligainterfaces';

export default class EquipoController {

  // Método para obtener información de una liga por su ID
  // Method to get league information by ID
  public static async obtenerInformacionLiga(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const liga: Liga[] = await EquipoServicio.obtenerInformacionLiga(Number(idLiga));

      if (!liga.length) {
        res.status(404).json({ mensaje: 'Información de la liga no encontrada' });
        return;
      }

      res.json(liga);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la información de la liga', error });
    }
  }

  // Método para obtener los equipos de una liga por su ID
  // Method to get teams in a league by league ID
  public static async obtenerEquiposLiga(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const equipos: Equipo[] = await EquipoServicio.obtenerEquiposLiga(Number(idLiga));

      if (!equipos.length) {
        res.status(404).json({ mensaje: 'Equipos no encontrados para la liga especificada' });
        return;
      }

      res.json(equipos);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los equipos de la liga', error });
    }
  }

  // Método para obtener la tabla de posiciones de una liga por su ID
  // Method to get the standings table of a league by ID
  public static async obtenerPosicionesLiga(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const posiciones: TablaPosiciones[] = await EquipoServicio.obtenerPosicionesLiga(Number(idLiga));

      if (!posiciones.length) {
        res.status(404).json({ mensaje: 'Posiciones no encontradas para la liga especificada' });
        return;
      }

      res.json(posiciones);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener las posiciones de la liga', error });
    }
  }

  // Método para obtener los jugadores con más partidos en una liga
  // Method to get players with most matches in a league
  public static async obtenerJugadoresMasPartidos(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const jugadores: Jugador[] = await EquipoServicio.obtenerJugadoresMasPartidos(Number(idLiga));

      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores con más partidos', error });
    }
  }

  // Método para obtener los jugadores con más goles en una liga
  // Method to get players with most goals in a league
  public static async obtenerJugadoresMasGoles(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const jugadores: Jugador[] = await EquipoServicio.obtenerJugadoresMasGoles(Number(idLiga));

      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores con más goles', error });
    }
  }

  // Método para obtener los jugadores con más asistencias en una liga
  // Method to get players with most assists in a league
  public static async obtenerJugadoresMasAsistencias(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const jugadores: Jugador[] = await EquipoServicio.obtenerJugadoresMasAsistencias(Number(idLiga));

      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores con más asistencias', error });
    }
  }

  // Método para obtener los jugadores con más tarjetas rojas en una liga
  // Method to get players with most red cards in a league
  public static async obtenerJugadoresMasTarjetasRojas(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const jugadores: Jugador[] = await EquipoServicio.obtenerJugadoresMasTarjetasRojas(Number(idLiga));

      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores con más tarjetas rojas', error });
    }
  }

  // Método para obtener los jugadores con más tarjetas amarillas en una liga
  // Method to get players with most yellow cards in a league
  public static async obtenerJugadoresMasTarjetasAmarillas(req: Request, res: Response): Promise<void> {
    try {
      const { idLiga } = req.params;
      const jugadores: Jugador[] = await EquipoServicio.obtenerJugadoresMasTarjetasAmarillas(Number(idLiga));

      res.json(jugadores);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los jugadores con más tarjetas amarillas', error });
    }
  }

  // Método para buscar un equipo por su nombre
  // Method to search for a team by name
  public static async buscarEquipoPorNombre(req: Request, res: Response): Promise<void> {
    try {
      const { nombreEquipo } = req.params;

      // Verificamos que el nombreEquipo no sea null ni esté vacío
      // Verify that team name is not null or empty
      if (!nombreEquipo || typeof nombreEquipo !== 'string' || nombreEquipo.trim() === '') {
        res.status(400).json({ mensaje: 'El nombre del equipo es requerido y debe ser una cadena válida.' });
        return;
      }

      const equipos = await EquipoServicio.buscarEquipoPorNombre(nombreEquipo);

      if (!equipos.length) {
        res.status(404).json({ mensaje: 'Equipo no encontrado con el nombre proporcionado' });
        return;
      }

      res.json(equipos);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar el equipo por nombre', error });
    }
  }
}