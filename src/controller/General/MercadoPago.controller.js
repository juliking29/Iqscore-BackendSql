import MercadoPagoService from "../../Model/General/Mecadopago.model";

class GeneralController {
  constructor() {
    this.mercadoPagoService = new MercadoPagoService();
  }

  async metodoDePago(req, res) {
    try {
      const response = await this.mercadoPagoService.crearPreferencia({
        title: "Pago de plan Premium de IqScore",
        quantity: 1,
        price: 10,
        currency_id: "USD"
      });

      res.status(200).json({
        id: response.body.id,
        init_point: response.body.init_point,
      });
    } catch (error) {
      console.error("Error en metodoDePago:", error.response?.data || error.message);
      res.status(500).json({
        error: "Error al crear la preferencia de pago.",
        details: error.response?.data || error.message,
      });
    }
  }
}

export default GeneralController;
