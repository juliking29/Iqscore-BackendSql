// Importación de módulos necesarios
// Import of required modules
import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import dotenv from "dotenv";
import path from 'path';
import cors from 'cors'; // Importar módulo CORS

// Cargar variables de entorno desde el archivo .env
// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../env/.env') });

// Inicializar la aplicación Express
// Initialize Express application
const app = express();

// Configurar CORS para permitir solicitudes de cualquier origen
// Configure CORS to allow requests from any origin
app.use(cors());

// Middleware para permitir JSON en solicitudes
// Middleware to allow JSON in requests
app.use(express.json());

// Importar rutas de la aplicación
// Import application routes
import jugadorRoutes from './view/Jugador/jugador.view';
import jugadoredetalles from './view/Jugador/juagdoresdetalles.viw'; // Nota: posible error de ortografía en el nombre del archivo
import equiporouter from './view/Equipo/equipos.view';
import tituloEquipoRouter from './view/Equipo/equipo.itulo.view'; // Nota: posible error de ortografía en el nombre del archivo
import getLigaroutes from './view/Liga/getliga.view';
import ligaroutes from './view/Liga/liga.view';
import generalroutes from './view/general/general.view';
import TablaPosicionesRouter from './view/Liga/PosicionesLiga.view';
import mercadopago from "../src/view/general/Mercado.view"
// Configurar rutas para la API
// Configure API routes
import logsRoutes from './view/ModuloAdministardor/Log.View';

import equiposRoutes from './view/ModuloAdministardor/equipos.view';
import RumorFichajeview from './view/NoticiaRumor/RumorFichaje.view';
app.use('/api', RumorFichajeview);
app.use('/api', equiposRoutes);
app.use('/api', logsRoutes);
app.use('/api', jugadorRoutes);         // Rutas para jugadores / Player routes
app.use('/api', jugadoredetalles);      // Rutas para detalles de jugadores / Player details routes
app.use('/api', equiporouter);          // Rutas para equipos / Team routes
app.use('/api', tituloEquipoRouter);    // Rutas para títulos de equipos / Team titles routes
app.use('/api', getLigaroutes);         // Rutas para obtener ligas / League retrieval routes
app.use('/api', ligaroutes);            // Rutas para ligas / League routes
app.use('/api', TablaPosicionesRouter); // Rutas para tabla de posiciones / League standings routes
app.use('/api', generalroutes);         // Rutas generales / General routes
app.use('/api', mercadopago);      
// Configurar puerto para el servidor
// Configure server port
const HTTPS_PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;
const HTTP_PORT = 3001;

// Iniciar un servidor HTTP para las solicitudes HTTP
// Start an HTTP server for HTTP requests
http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`✅ Servidor HTTP corriendo en http://localhost:${HTTP_PORT}`);
  console.log(`✅ HTTP Server running at http://localhost:${HTTP_PORT}`);
});

// Comprobar si los certificados existen e iniciar servidor HTTPS
// Check if certificates exist and start HTTPS server
try {
  // Rutas absolutas para los certificados SSL
  // Absolute paths for SSL certificates
  const keyPath = path.resolve(__dirname, '../Certificados/iqscore-key.pem');
  const certPath = path.resolve(__dirname, '../certificados/iqscore-cert.pem');
  
  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    // Leer los archivos de certificado
    // Read certificate files
    const key = fs.readFileSync(keyPath);
    const cert = fs.readFileSync(certPath);
    
    // Iniciar servidor HTTPS con los certificados SSL
    // Start HTTPS server with SSL certificates
    https.createServer({ key, cert }, app).listen(HTTPS_PORT, () => {
      console.log(`✅ Servidor HTTPS corriendo en https://localhost:${HTTPS_PORT}`);
      console.log(`✅ HTTPS Server running at https://localhost:${HTTPS_PORT}`);
    });
  } else {
    console.warn("⚠️ Los archivos de certificado no existen. El servidor HTTPS no se iniciará.");
    console.warn("⚠️ Certificate files do not exist. HTTPS server will not start.");
  }
} catch (error) {

}