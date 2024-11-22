export interface Icalificacion{
    id?: string
    codigo: string,
    idioma: string,
    nivel: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creado?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modificado?: any
}
export interface IcalificacionDetalle{
    id?: string,
    id_calificacion?: string,
    minimo: number,
    maximo: number,
    resultado?: string
    isNew?: boolean
}