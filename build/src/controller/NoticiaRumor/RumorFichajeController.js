"use strict";
// Assuming this is in a file like 'src/controller/Rumor/rumorFichaje.controller.ts'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RumorFichajeModel_1 = __importDefault(require("../../Model/NoticiaRumor/RumorFichajeModel"));
class RumorFichajeController {
    // Insertar un nuevo rumor
    static async insertarRumor(req, res) {
        try {
            // Basic validation (more robust validation is recommended)
            const rumorData = req.body;
            if (!rumorData.idJugador || !rumorData.equipo_destino || !rumorData.fecha_rumor) {
                res.status(400).json({ mensaje: "Faltan campos obligatorios: idJugador, equipo_destino, fecha_rumor" });
                return;
            }
            const result = await RumorFichajeModel_1.default.insertarRumor(rumorData);
            res.status(201).json({ mensaje: "Rumor insertado correctamente", idRumor: result.insertId });
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al insertar el rumor", error: error.message });
        }
    }
    // Actualizar un rumor
    static async actualizarRumor(req, res) {
        try {
            const { idRumor } = req.params;
            const rumorData = req.body;
            if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }
            if (Object.keys(rumorData).length === 0) {
                res.status(400).json({ mensaje: "No se proporcionaron datos para actualizar." });
                return;
            }
            const success = await RumorFichajeModel_1.default.actualizarRumor(Number(idRumor), rumorData);
            if (success) {
                res.status(200).json({ mensaje: "Rumor actualizado correctamente" });
            }
            else {
                res.status(404).json({ mensaje: "Rumor no encontrado para actualizar" });
            }
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al actualizar el rumor", error: error.message });
        }
    }
    // Eliminar un rumor
    static async eliminarRumor(req, res) {
        try {
            const { idRumor } = req.params;
            if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }
            const success = await RumorFichajeModel_1.default.eliminarRumor(Number(idRumor));
            if (success) {
                res.status(200).json({ mensaje: "Rumor eliminado correctamente" });
            }
            else {
                res.status(404).json({ mensaje: "Rumor no encontrado para eliminar" });
            }
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al eliminar el rumor", error: error.message });
        }
    }
    // Obtener todos los rumores
    static async obtenerTodosLosRumores(_req, res) {
        try {
            const rumores = await RumorFichajeModel_1.default.obtenerTodosLosRumores();
            res.status(200).json(rumores);
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener los rumores", error: error.message });
        }
    }
    // Obtener un rumor por ID
    static async obtenerRumorPorId(req, res) {
        try {
            const { idRumor } = req.params;
            if (isNaN(Number(idRumor))) {
                res.status(400).json({ mensaje: "ID de rumor inválido." });
                return;
            }
            const rumor = await RumorFichajeModel_1.default.obtenerRumorPorId(Number(idRumor));
            if (rumor) {
                res.status(200).json(rumor);
            }
            else {
                res.status(404).json({ mensaje: "Rumor no encontrado" });
            }
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener el rumor", error: error.message });
        }
    }
    // Obtener rumores por ID de jugador
    static async obtenerRumoresPorJugador(req, res) {
        try {
            const { idJugador } = req.params;
            if (isNaN(Number(idJugador))) {
                res.status(400).json({ mensaje: "ID de jugador inválido." });
                return;
            }
            const rumores = await RumorFichajeModel_1.default.obtenerRumoresPorJugador(Number(idJugador));
            // Always return 200, even if the array is empty
            res.status(200).json(rumores);
        }
        catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ mensaje: "Error interno del servidor al obtener los rumores del jugador", error: error.message });
        }
    }
}
exports.default = RumorFichajeController;
