export default interface Jugador {
    idJugador?: number;
    nombre: string;
    edad: number;
    fecha_nacimiento: string;
    nacionalidad: string;
    nacionalidad_logo?: string;
    altura: number;
    peso: number;
    pierna_habil: 'Izquierda' | 'Derecha' | 'Ambas';
    posicion: string;
    posicion_ideal?: string;
    idEquipoActual?: number;
    valor_mercado: number;
    partidos_jugados?: number;
    goles?: number;
    asistencias?: number;
    tarjetas_rojas?: number;
    tarjetas_amarillas?: number;
    pases_completados?: number;
    tiros_totales?: number;
    tiros_al_arco?: number;
    corners?: number;
    faltas?: number;
    habilidades?: string;
    caracteristicas?: string;
    atributos?: string;
    logo?: string;
  }
  
