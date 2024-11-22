export default interface IProspecto {
    id?: string,
    dni: string,
    nombres: string,
    apellidos: string,
    telefono: string,
    facultad: string,
    email?: string,
    codigo?: string
    trabajador : boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creado?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modificado?: any
}