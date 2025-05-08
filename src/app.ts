// Importación de módulos necesarios
import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import dotenv from "dotenv";
import path from 'path';
import cors from 'cors';
import os from 'os';
import qrcode from 'qrcode-terminal'; // Código QR en consola

// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: path.resolve(__dirname, '../../env/.env') });

// Inicializar la aplicación Express
const app = express();

// Función para obtener la IP local de la máquina
function getLocalIP(): string {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]!) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIP();

// Configurar CORS para permitir solicitudes de cualquier origen
app.use(cors());

// Middleware para permitir JSON en solicitudes
app.use(express.json());

// Importar rutas de la aplicación
import jugadorRoutes from './view/Jugador/jugador.view';
import jugadoredetalles from './view/Jugador/juagdoresdetalles.viw'; // Posible error de ortografía
import equiporouter from './view/Equipo/equipos.view';
import tituloEquipoRouter from './view/Equipo/equipo.itulo.view'; // Posible error de ortografía
import getLigaroutes from './view/Liga/getliga.view';
import ligaroutes from './view/Liga/liga.view';
import generalroutes from './view/general/general.view';
import TablaPosicionesRouter from './view/Liga/PosicionesLiga.view';
import mercadopago from "../src/view/general/Mercado.view"
import logsRoutes from './view/ModuloAdministardor/Log.View';
import equiposRoutes from './view/ModuloAdministardor/equipos.view';
import RumorFichajeview from './view/NoticiaRumor/RumorFichaje.view';

// Configurar rutas para la API
app.use('/api', RumorFichajeview);
app.use('/api', equiposRoutes);
app.use('/api', logsRoutes);
app.use('/api', jugadorRoutes);
app.use('/api', jugadoredetalles);
app.use('/api', equiporouter);
app.use('/api', tituloEquipoRouter);
app.use('/api', getLigaroutes);
app.use('/api', ligaroutes);
app.use('/api', TablaPosicionesRouter);
app.use('/api', generalroutes);
app.use('/api', mercadopago);

// Configurar puertos
const HTTPS_PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;
const HTTP_PORT = 3001;

// Iniciar servidor HTTP
http.createServer(app).listen(HTTP_PORT, '0.0.0.0', () => {
  const url = `http://${localIP}:${HTTP_PORT}`;
  const localhostUrl = `http://localhost:${HTTP_PORT}`;
  console.log(`✅ Servidor HTTP corriendo en ${url}`);
  console.log(`✅ Servidor HTTP corriendo en ${localhostUrl}`);
  qrcode.generate(url, { small: true });
  qrcode.generate(localhostUrl, { small: true });
});

// Iniciar servidor HTTPS si existen los certificados
try {
  const keyPath = path.resolve(__dirname, '../Certificados/iqscore-key.pem');
  const certPath = path.resolve(__dirname, '../certificados/iqscore-cert.pem');

  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    const key = fs.readFileSync(keyPath);
    const cert = fs.readFileSync(certPath);

    const httpsUrl = `https://${localIP}:${HTTPS_PORT}`;
    const httpsLocalhostUrl = `https://localhost:${HTTPS_PORT}`;
    https.createServer({ key, cert }, app).listen(HTTPS_PORT, '0.0.0.0', () => {
      console.log(`✅ Servidor HTTPS corriendo en ${httpsUrl}`);
      console.log(`✅ Servidor HTTPS corriendo en ${httpsLocalhostUrl}`);
      qrcode.generate(httpsUrl, { small: true });
      qrcode.generate(httpsLocalhostUrl, { small: true });
    });
  } else {
    console.warn("⚠️ Los archivos de certificado no existen. El servidor HTTPS no se iniciará.");
  }
} catch (error) {
  console.error("❌ Error al iniciar el servidor HTTPS:", error);
}
