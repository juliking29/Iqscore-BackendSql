// Importación de módulos necesarios
// Import of required modules
import express from 'express';
import fs from 'fs';
import https from 'https';
import dotenv from "dotenv";
import path from 'path';

// Cargar variables de entorno desde el archivo .env
// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../env/.env') });

// Rutas absolutas para los certificados SSL
// Absolute paths for SSL certificates
const keyPath = path.resolve(__dirname, '../Certificados/iqscore-key.pem');
const certPath = path.resolve(__dirname, '../certificados/iqscore-cert.pem');

// Verificar si los archivos de certificado existen antes de leerlos
// Check if certificate files exist before reading them
if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error("❌ ERROR: Los archivos de certificado no existen en la ruta especificada.");
  console.error("❌ ERROR: Certificate files do not exist in the specified path.");
  process.exit(1); // Detener ejecución si los certificados no existen / Stop execution if certificates don't exist
}

// Leer los archivos de certificado
// Read certificate files
const key = fs.readFileSync(keyPath);
const cert = fs.readFileSync(certPath);

// Inicializar la aplicación Express
// Initialize Express application
const app = express();

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

// Configurar rutas para la API
// Configure API routes
app.use('/api', jugadorRoutes);         // Rutas para jugadores / Player routes
app.use('/api', jugadoredetalles);      // Rutas para detalles de jugadores / Player details routes
app.use('/api', equiporouter);          // Rutas para equipos / Team routes
app.use('/api', tituloEquipoRouter);    // Rutas para títulos de equipos / Team titles routes
app.use('/api', getLigaroutes);         // Rutas para obtener ligas / League retrieval routes
app.use('/api', ligaroutes);            // Rutas para ligas / League routes
app.use('/api', TablaPosicionesRouter); // Rutas para tabla de posiciones / League standings routes
app.use('/api', generalroutes);         // Rutas generales / General routes

// Configurar puerto para el servidor
// Configure server port
const PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;

// Iniciar servidor HTTPS con los certificados SSL
// Start HTTPS server with SSL certificates
https.createServer({ key, cert }, app).listen(PORT, () => {
  console.log(`✅ Servidor corriendo en https://localhost:${PORT}`);
  console.log(`✅ Server running at https://localhost:${PORT}`);
});