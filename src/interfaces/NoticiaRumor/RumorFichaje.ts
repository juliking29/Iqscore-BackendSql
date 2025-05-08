// Assuming this is in a file like 'src/interfaces/RumorInterfaces/rumor.ts'

export interface RumorFichaje{
    idRumor?: number; // Optional: Auto-incremented by DB on creation
    idJugador: number;
    equipo_origen?: string | null; // Optional field
    equipo_destino: string;
    valor_estimado?: number | null; // Optional field
    fecha_rumor: string; // Use string for date handling via API/DB, can be Date too
    fuente?: string | null; // Optional field
    credibilidad?: 'Alta' | 'Media' | 'Baja'; // ENUM type, has default 'Media'
    descripcion?: string | null; // Optional field
}