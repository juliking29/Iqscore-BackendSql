import { Request, Response } from 'express';
import LogsModel from '../../Model/ModuloAdministardor/Logs.Model';

export default class LogsController {

  public static async obtenerTransferencias(_req: Request, res: Response): Promise<void> {
    try {
      const datos = await LogsModel.obtenerTransferencias();
      res.json({ datos });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener transferencias', error });
    }
  }

  public static async obtenerJugadoresEliminados(_req: Request, res: Response): Promise<void> {
    try {
      const datos = await LogsModel.obtenerJugadoresEliminados();
      res.json({ datos });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener jugadores eliminados', error });
    }
  }

  public static async obtenerEquiposEliminados(_req: Request, res: Response): Promise<void> {
    try {
      const datos = await LogsModel.obtenerEquiposEliminados();
      res.json({ datos });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener equipos eliminados', error });
    }
  }

  public static async obtenerLigasLog(_req: Request, res: Response): Promise<void> {
    try {
      const datos = await LogsModel.obtenerLigasLog();
      res.json({ datos });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener log de ligas', error });
    }
  }

  public static async obtenerTotales(_req: Request, res: Response): Promise<void> {
    try {
      const datos = await LogsModel.obtenerTotales();
      res.json({ datos });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener totales', error });
    }
  }
}
