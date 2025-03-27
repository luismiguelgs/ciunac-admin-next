import { Isolicitud } from '@/interfaces/solicitud.interface'
import { obtenerPeriodo } from '@/lib/utils'
import * as yup from 'yup'

const msgReq = 'Campo requerido'
const msgDni = 'Campo de 8 caracteres'

const validationSchema = yup.object<Isolicitud>({
    apellidos: yup.string().required(msgReq).trim(),
    nombres: yup.string().trim().required(msgReq),
    solicitud: yup.string().trim().required(msgReq),
    celular: yup.string().trim().required(msgReq).min(11,'El campo requiere 9 caracteres'),
    dni: yup.string().trim().required(msgReq).min(8,msgDni),
    idioma: yup.string().trim().required(msgReq),
    nivel: yup.string().trim().default('BASICO'),
    trabajador: yup.boolean(),
    numero_voucher: yup.string().trim().when('trabajador',{
        is: true,
        then: (schema:yup.Schema) => schema.optional().nullable(),
        otherwise: (schema:yup.Schema)=> schema.required(msgReq),
    }),
    pago: yup.number().when('trabajador', {
        is: true,
        then: (schema:yup.Schema) => schema.optional().nullable(),
        otherwise: (schema: yup.Schema) => schema.required(msgReq)
    }),
    fecha_pago: yup.date().when('trabajador',{
        is:true,
        then: (schema:yup.Schema) => schema.optional().nullable(),
        otherwise: (schema:yup.Schema) => schema.required(msgReq)
    }),
    tipo_trabajador: yup.string().trim()
})
const initialValues: Isolicitud = {
    solicitud: '',
    apellidos: '',
    nombres: '',
    celular: '',
    dni: '',
    periodo: obtenerPeriodo(),
    idioma: '',
    nivel: 'BASICO',
    facultad: 'PAR',
    codigo: '',
    numero_voucher: '',
    pago: '',
    fecha_pago: null, //dayjs(new Date()),
    trabajador: false,
    creado: null,
    tipo_trabajador: '',
}

export {validationSchema, initialValues}