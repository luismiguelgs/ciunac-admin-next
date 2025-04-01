import { Isolicitud } from "@/interfaces/solicitud.interface"
import * as yup from 'yup'

const msgReq = 'Campo requerido'

export const validationSchemaFinance = yup.object<Isolicitud>({
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
})

export const validationSchemaBasic = yup.object<Isolicitud>({
    apellidos: yup.string().required(msgReq),
    nombres: yup.string().required(msgReq),
    dni: yup.string().required(msgReq),
    celular : yup.string().required(msgReq),
    tipo_trabajador: yup.string()
})