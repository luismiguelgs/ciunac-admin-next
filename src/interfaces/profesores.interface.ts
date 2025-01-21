export interface Iprofesor {
    id?: string,
    nombres: string,
    apellidos: string,
    genero: string,
    email: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fecha_nacimiento: any,
    telefono: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creado?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modificado?: any,
    isNew?: boolean
}