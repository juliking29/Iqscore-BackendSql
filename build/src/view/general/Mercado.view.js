"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MercadoPago_controller_1 = __importDefault(require("../../controller/General/MercadoPago.controller"));
const router = express_1.default.Router();
const generalController = new MercadoPago_controller_1.default();
router.post("/MercadoPago", generalController.metodoDePago.bind(generalController));
exports.default = router;
