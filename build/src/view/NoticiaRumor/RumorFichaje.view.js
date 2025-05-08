"use strict";
// Assuming this is in a file like 'src/routes/rumorFichaje.routes.ts'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RumorFichajeController_1 = __importDefault(require("../../controller/NoticiaRumor/RumorFichajeController")); // Adjust path as needed
const router = (0, express_1.Router)();
// --- Rutas para RUMORES_FICHAJES ---
// POST: Crear un nuevo rumor
// Route to insert a new transfer rumor
router.post("/rumores", RumorFichajeController_1.default.insertarRumor);
// GET: Obtener todos los rumores
// Route to get all transfer rumors
router.get("/rumores", RumorFichajeController_1.default.obtenerTodosLosRumores);
// GET: Obtener un rumor específico por su ID
// Route to get a specific transfer rumor by its ID
router.get("/rumores/:idRumor", RumorFichajeController_1.default.obtenerRumorPorId);
// GET: Obtener todos los rumores asociados a un jugador por su ID
// Route to get all rumors associated with a player by their ID
router.get("/rumores/jugador/:idJugador", RumorFichajeController_1.default.obtenerRumoresPorJugador);
// PUT: Actualizar un rumor existente por su ID
// Route to update an existing transfer rumor by its ID
// Note: Using PUT implies replacing the entire resource, PATCH is for partial updates.
// Depending on your exact needs, PATCH might be more semantically correct if you only send changed fields.
// This implementation handles partial updates even though it uses PUT.
router.put("/rumores/:idRumor", RumorFichajeController_1.default.actualizarRumor);
// DELETE: Eliminar un rumor por su ID
// Route to delete a transfer rumor by its ID
router.delete("/rumores/:idRumor", RumorFichajeController_1.default.eliminarRumor);
exports.default = router;
