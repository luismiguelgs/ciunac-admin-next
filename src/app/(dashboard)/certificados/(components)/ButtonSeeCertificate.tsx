import { Icertificado, IcertificadoDetalle } from '@/interfaces/certificado.interface'
import { IBaseData } from '@/interfaces/types.interface'
import { Button } from '@mui/material'
import { FormikProps } from 'formik'
import React from 'react'
import PreviewIcon from '@mui/icons-material/Preview';
import { MyDialog } from '@/components/MUI'
import { PDFViewer } from '@react-pdf/renderer'
import CertificateFormat from './CertificateFormat'
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { NIVEL } from '@/lib/constants'
import CertificadosService from '@/services/certificados.service'
dayjs.locale('es');

type Props = {
    id: string,
    formik: FormikProps<Icertificado>,
    data?: IcertificadoDetalle[],
    cursos: IBaseData[] | undefined
}


export default function ButtonSeeCertificate({ id, formik, data=[], cursos }: Props) 
{
    //HOOKS *************************************************
    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <React.Fragment>
            <Button
                fullWidth 
                onClick={()=>setOpen(true)}
                variant="contained" 
                color="error" 
                disabled={id === 'nuevo'}
                startIcon={<PreviewIcon />}>
                    Ver Certificado
            </Button>
            <MyDialog 
                open={open}
                type='SIMPLE'
                title='ACTA DEL EXAMEN'
                setOpen={setOpen}
                content={<>
                    <PDFViewer width={800} height={500}>
				        <CertificateFormat
                            id={id}
                            fecha_emision={dayjs(formik.values.fecha_emision).format('D [de] MMMM [de] YYYY' )}
                            fecha_conclusion={dayjs(formik.values.fecha_conclusion).format('D [de] MMMM [de] YYYY' )} 
                            idioma={cursos?.filter(item=>item.value === formik.values.idioma)[0]?.label}
                            nivel={NIVEL.filter(item=>item.value === formik.values.nivel)[0]?.label} 
                            url={`https://ciunac.unac.edu.pe/validacion-certificado/?url=${id}`}
                            alumno={formik.values.alumno} 
                            horas={formik.values.horas}
                            numero_folio={formik.values.numero_registro}/>
			        </PDFViewer>
                </>}
            />
        </React.Fragment>
    )
}
