export interface Iconstancia {
    id?: string;
    tipo: 'CONSTANCIA_MATRICULA' | 'CONSTANCIA_NOTAS';
    estudiante: string;
    dni: string;
    idioma: string;
    nivel: string;
    ciclo: string;
    impreso: boolean;
    id_solicitud: string;
    horario?: string;
    modalidad?: 'REGULAR' | 'INTENSIVO';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createAt?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateAt?: any;
}

export interface IconstanciaDetalle {
    id?: string;
    id_constancia: string;
    idioma: string;
    nivel: string;
    ciclo: string;
    modalidad: 'REGULAR' | 'INTENSIVO',
    mes: string;
    año: string;
    estado: 'APROBADO' | 'DESAPROBADO';
    nota: number;
    isNew?: boolean;
}