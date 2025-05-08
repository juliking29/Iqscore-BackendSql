"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importación de módulos necesarios
// Import of required modules
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors")); // Importar módulo CORS
// Cargar variables de entorno desde el archivo .env
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../env/.env') });
// Inicializar la aplicación Express
// Initialize Express application
const app = (0, express_1.default)();
// Configurar CORS para permitir solicitudes de cualquier origen
// Configure CORS to allow requests from any origin
app.use((0, cors_1.default)());
// Middleware para permitir JSON en solicitudes
// Middleware to allow JSON in requests
app.use(express_1.default.json());
// Importar rutas de la aplicación
// Import application routes
const jugador_view_1 = __importDefault(require("./view/Jugador/jugador.view"));
const juagdoresdetalles_viw_1 = __importDefault(require("./view/Jugador/juagdoresdetalles.viw")); // Nota: posible error de ortografía en el nombre del archivo
const equipos_view_1 = __importDefault(require("./view/Equipo/equipos.view"));
const equipo_itulo_view_1 = __importDefault(require("./view/Equipo/equipo.itulo.view")); // Nota: posible error de ortografía en el nombre del archivo
const getliga_view_1 = __importDefault(require("./view/Liga/getliga.view"));
const liga_view_1 = __importDefault(require("./view/Liga/liga.view"));
const general_view_1 = __importDefault(require("./view/general/general.view"));
const PosicionesLiga_view_1 = __importDefault(require("./view/Liga/PosicionesLiga.view"));
const Mercado_view_1 = __importDefault(require("../src/view/general/Mercado.view"));
// Configurar rutas para la API
// Configure API routes
const Log_View_1 = __importDefault(require("./view/ModuloAdministardor/Log.View"));
const equipos_view_2 = __importDefault(require("./view/ModuloAdministardor/equipos.view"));
app.use('/api', equipos_view_2.default);
app.use('/api', Log_View_1.default);
app.use('/api', jugador_view_1.default); // Rutas para jugadores / Player routes
app.use('/api', juagdoresdetalles_viw_1.default); // Rutas para detalles de jugadores / Player details routes
app.use('/api', equipos_view_1.default); // Rutas para equipos / Team routes
app.use('/api', equipo_itulo_view_1.default); // Rutas para títulos de equipos / Team titles routes
app.use('/api', getliga_view_1.default); // Rutas para obtener ligas / League retrieval routes
app.use('/api', liga_view_1.default); // Rutas para ligas / League routes
app.use('/api', PosicionesLiga_view_1.default); // Rutas para tabla de posiciones / League standings routes
app.use('/api', general_view_1.default); // Rutas generales / General routes
app.use('/api', Mercado_view_1.default);
// Configurar puerto para el servidor
// Configure server port
const HTTPS_PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;
const HTTP_PORT = 3001;
// Iniciar un servidor HTTP para las solicitudes HTTP
// Start an HTTP server for HTTP requests
http_1.default.createServer(app).listen(HTTP_PORT, () => {
    console.log(`✅ Servidor HTTP corriendo en http://localhost:${HTTP_PORT}`);
    console.log(`✅ HTTP Server running at http://localhost:${HTTP_PORT}`);
});
// Comprobar si los certificados existen e iniciar servidor HTTPS
// Check if certificates exist and start HTTPS server
try {
    // Rutas absolutas para los certificados SSL
    // Absolute paths for SSL certificates
    const keyPath = path_1.default.resolve(__dirname, '../Certificados/iqscore-key.pem');
    const certPath = path_1.default.resolve(__dirname, '../certificados/iqscore-cert.pem');
    if (fs_1.default.existsSync(keyPath) && fs_1.default.existsSync(certPath)) {
        // Leer los archivos de certificado
        // Read certificate files
        const key = fs_1.default.readFileSync(keyPath);
        const cert = fs_1.default.readFileSync(certPath);
        // Iniciar servidor HTTPS con los certificados SSL
        // Start HTTPS server with SSL certificates
        https_1.default.createServer({ key, cert }, app).listen(HTTPS_PORT, () => {
            console.log(`✅ Servidor HTTPS corriendo en https://localhost:${HTTPS_PORT}`);
            console.log(`✅ HTTPS Server running at https://localhost:${HTTPS_PORT}`);
        });
    }
    else {
        console.warn("⚠️ Los archivos de certificado no existen. El servidor HTTPS no se iniciará.");
        console.warn("⚠️ Certificate files do not exist. HTTPS server will not start.");
    }
}
catch (error) {
}
