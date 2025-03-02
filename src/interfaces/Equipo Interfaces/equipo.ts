export type  Equipo = {
    idEquipo?: number; // Opcional, ya que es autoincremental
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
}
export type TablaPosiciones = {
    equipo: string;
    posicion: number;
    puntos: number;
}

export type Jugador = {
    idJugador: number;
    nombre: string;
    posicion: string;
    edad: number;
    nacionalidad: string;
    valorMercado: number;
};
// models/tituloEquipoModel.ts

export type TituloEquipo = {
    idTituloEquipo: number;
    idEquipo: number;
    nombre_titulo: string;
    año: number;
}

