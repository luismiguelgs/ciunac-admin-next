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
    horas: yup.number().required(msgReq).max(400).min(100),
})

const initialValues:Icertificado ={
    alumno: '',
    idioma: '',
    nivel : '',
    tipo: 'fisico',
    fecha_emision: new Date(),
    fecha_conclusion: new Date(),
    horas: 0,
    numero_registro: ''
}

export { initialValues, validationSchema }