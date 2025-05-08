const mercadopago = require("mercadopago");

class MercadoPagoService {
  constructor() {
    mercadopago.configure({
      access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-1707246189912216-040614-0c7b6ffa35f3cce6700cae4c997beaf6-2373157399"
    });
    this.mp = mercadopago;
  }

  async crearPreferencia({ title, price, quantity, currency_id = "USD" }) {
    const preference = {
      items: [
        {
          title,
          unit_price: parseFloat(price),
          quantity: parseInt(quantity, 10),
          currency_id, 
        },
      ],
      payment_methods: {
        excluded_payment_methods: [], 
        excluded_payment_types: [],
      },
      back_urls: {
        success: "https://example.com/success",
        failure: "https://example.com/failure",
        pending: "https://example.com/pending",
      },
      auto_return: "approved",
    };

    return await this.mp.preferences.create(preference);
  }
}

module.exports = MercadoPagoService;