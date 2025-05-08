import express from "express";
import GeneralController from "../../controller/General/MercadoPago.controller"; 
const router = express.Router();

const generalController = new GeneralController();

router.post("/MercadoPago", generalController.metodoDePago.bind(generalController));

export default router;
