'use client'
import useStore from "@/hooks/useStore";
import CertificateForm from "../(components)/CertificateForm";
import { useSubjectsStore } from "@/store/types.stores";
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { Icertificado } from "@/interfaces/certificado.interface";
import {initialValues, validationSchema} from "../(components)/validation.schema";
import dayjs from 'dayjs'
import CertificadosService, { Collection } from "@/services/certificados.service";
import { Box, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import BackButton from "@/components/BackButton";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import CertificateDetail from "../(components)/CertificateDetail";
import { MyDialog } from "@/components/MUI";
import { PDFViewer } from "@react-pdf/renderer";
import CertificateFormat from "../(components)/CertificateFormat";

export default function NewCertificatePage() 
{
	//HOOKS *************************************************
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
	const [id, setId] = React.useState<string>('nuevo')
    const [open, setOpen] = React.useState<boolean>(false)
    const navigate = useRouter()

	const formik = useFormik<Icertificado>({
        initialValues:initialValues,
        validationSchema : validationSchema,
        onSubmit: async(values:Icertificado) =>{
            // Convert dayjs objects to JavaScript Date objects
            const formattedValues = {
                ...values,
                fecha_emision: dayjs(values.fecha_emision).toDate(),
                fecha_conclusion: dayjs(values.fecha_conclusion).toDate()
            };
            //alert(JSON.stringify(values,null, 2))
            const id = await CertificadosService.newItem(Collection.Certificados, formattedValues)
            setId(id as string)
            navigate.push(`./certificados/${id}`)
        }
    })

	return (
		<Box>
			<CertificateForm cursos={subjects} formik={formik} id={id}/>
			<Grid container spacing={2} p={2} >
				<Grid size={{xs: 12, md: 3}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<BackButton fullWidth/>
				</Grid>
				<Grid size={{xs: 12, md: 3}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<Button 
                        fullWidth 
                        onClick={()=>{alert('asignar certificado')}} 
                        variant="contained" 
                        color="primary" 
                        startIcon={<AssignmentIcon />}>
                        Asignar Solicitud
                    </Button>
				</Grid>
				<Grid size={{xs:12, md:3}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<Button
                        fullWidth 
                        onClick={()=>setOpen(true)}
                        variant="contained" 
                        color="error" 
                        disabled={id === 'nuevo'}
                        startIcon={<PreviewIcon />}>
                        Ver Certificado
                    </Button>
				</Grid> 
				<Grid size={{xs:12}}>
					<CertificateDetail id_certificado={id} /> 
				</Grid>
				<MyDialog 
					type="SIMPLE"
					open={open} 
					setOpen={setOpen}
					title={'CERTIFICADO'}
					content={<>
						<PDFViewer width={800} height={500}>
				            <CertificateFormat
                                data={[]} 
                                fecha_emision={dayjs(formik.values.fecha_emision).format('D [de] MMMM [de] YYYY' )}
                                fecha_conclusion={dayjs(formik.values.fecha_conclusion).format('D [de] MMMM [de] YYYY' )} 
                                idioma={subjects?.filter(item=>item.value === formik.values.idioma)[0]?.label}
                                nivel={formik.values.nivel} 
                                url={`https://ciunac.unac.edu.pe/validacion-certificado/?url=${id}`}
                                alumno={formik.values.alumno} 
                                horas={formik.values.horas}
                                numero_folio={formik.values.numero_registro}/>
			            </PDFViewer>
                	</>}
				/>
			</Grid>
		</Box>
	)
}
