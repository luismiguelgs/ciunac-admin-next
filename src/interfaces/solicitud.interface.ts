export interface Isolicitud {
    id?:string,
    periodo?: string,
    solicitud?:string,
    antiguo?:boolean,
    apellidos?:string,
    nombres?:string,
    celular?:string,
    certificado_trabajo?:string,
    codigo?:string,
    dni?:string,
    email?:string,
    digital?:boolean,
    escuela?:string,
    idioma?:string,
    nivel?:string,
    numero_voucher?:string,
    facultad?:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fecha_pago?:any | null,
    timestamp?:string,
    trabajador?:boolean,
    voucher?:string,
    img_voucher?:string
    img_cert_estudio?:string,
    img_cert_trabajo?:string,
    img_dni?:string,
    estado?:string,
    pago?:string,
    manual?:boolean,
    tipo_trabajador?:string,
    alumno_id?: string,
    observaciones?:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creado?:any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modificado?:any
}