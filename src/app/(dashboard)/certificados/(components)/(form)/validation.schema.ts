import { Icertificado } from '@/interfaces/certificado.interface'
import * as yup from 'yup'

const msgReq = 'Campo requerido'

const validationSchema = yup.object<Icertificado>({
    alumno: yup.string().required(msgReq),
    fecha_emision: yup.date().required(msgReq),
    fecha_conclusion: yup.date().required(msgReq),
    idioma: yup.string().trim().required(msgReq),
    nivel: yup.string().trim().required(msgReq),
    numero_registro: yup.string().trim().required(msgReq),
    horas: yup.number().required(msgReq).max(400).min(100, 'Mínimo 100 horas'),
    elaborador: yup.string().trim(),
    curricula_antigua: yup.boolean(),
    duplicado : yup.boolean(),
    id_solicitud: yup.string(),
    certificado_anterior: yup.string().trim().when('duplicado', {
        is: true,
        then: (schema:yup.Schema)=> schema.required(msgReq),
        otherwise: (schema:yup.Schema) => schema.optional().nullable(),
    })
})

const initialValues:Icertificado ={
    alumno: '',
    idioma: '',
    nivel : '',
    tipo: 'fisico',
    fecha_emision: new Date(),
    fecha_conclusion: new Date(),
    horas: 0,
    elaborador: '',
    numero_registro: '',
    curricula_antigua: false,
    duplicado: false,
    certificado_anterior: '',
    id_solicitud: ''
}

export { initialValues, validationSchema }