export interface IUsuario{
    id?: string,
    uid?: string,
    email: string,
    nombre: string
    password: string,
    role: 'ADMIN' | 'USER',
    isNew?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creado?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modificado?:any
}