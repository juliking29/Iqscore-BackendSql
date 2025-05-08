export type Liga = {
    idLiga: number;
    nombre: string;
    descripcion: string;
    fechaCreacion: Date;
    pais: string;
    logo: string;
};
export type Equipo = {
    idEquipo: number;
    nombre: string;
    idLiga: number;
    ciudad: string;
    estadioNombre: string;
    ubicacionEstadio: string;
    descripcionHistorica: string;
    valorMercado: number;
    entrenador: string;
    presidente: string;
    logo: string;
    estadioLogo: string;
};

export type Jugador = {
    idJugador: number;
    nombre: string;
    apellido: string;
    idEquipo: number;
    partidosJugados: number;
    goles: number;
    asistencias: number;
    tarjetasRojas: number;
    tarjetasAmarillas: number;
    fechaNacimiento: Date;
    nacionalidad: string;
    posicion: string;
};
export type TablaPosiciones = {
    idEquipo: number;
    nombreEquipo: string;
    partidosJugados: number;
    partidosGanados: number;
    partidosEmpatados: number;
    partidosPerdidos: number;
    golesFavor: number;
    golesContra: number;
    diferenciaGoles: number;
    puntos: number;
};


export default interface Ligafull {
    idLiga?: number;
    nombre: string;
    pais: string;
    nivel: string;
    año_inicio: number;
    año_fin: number;
    imagen_logo?: string;
    imagen_trofeo?: string;
    descripcion_historica?: string;
}

