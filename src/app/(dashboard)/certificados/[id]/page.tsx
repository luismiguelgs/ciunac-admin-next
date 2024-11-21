'use client'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CertificateForm from '../(components)/CertificateForm'
import useStore from '@/hooks/useStore'
import { useSubjectsStore } from '@/store/types.stores'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import { Icertificado, IcertificadoDetalle } from '@/interfaces/certificado.interface'
import CertificadosService, { Collection } from '@/services/certificados.service'
import { initialValues, validationSchema } from '../(components)/validation.schema'
import { useFormik } from 'formik'
import Grid from '@mui/material/Grid2'
import BackButton from '@/components/BackButton'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ButtonSeeCertificate from '../(components)/ButtonSeeCertificate'
import CertificateDetail from '../(components)/CertificateDetail'
import ButtonSave from '@/components/ButtonSave'

export default function CertificateDetailPage(params:{params:{id:string}}) 
{
	const { id } = params.params
    let maker:string = ''
	//HOOKS *************************************************
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
	const navigate = useRouter()
	const [detalle, setDetalle] = React.useState<IcertificadoDetalle[]>([])

	React.useEffect(()=>{
        const loadData = async (id:string|undefined) =>{
            const data = await CertificadosService.selectItem(id as string)
            maker = data?.elaborador || ''
            const detailData = await CertificadosService.fetchItemsDetail(id as string)
            setDetalle(detailData)
            
            formik.setValues({
                alumno: data?.alumno || initialValues.alumno,
                idioma: data?.idioma || initialValues.idioma,
                nivel : data?.nivel || initialValues.nivel,
                tipo: data?.tipo || initialValues.tipo,
                fecha_emision: data?.fecha_emision || initialValues.fecha_emision,
                fecha_conclusion: data?.fecha_conclusion || initialValues.fecha_conclusion,
                horas: data?.horas || initialValues.horas,
                numero_registro: data?.numero_registro || initialValues.numero_registro
            })
        }
        loadData(id)
    },[])

	const formik = useFormik<Icertificado>({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async(values:Icertificado) =>{
            // Convert dayjs objects to JavaScript Date objects
            const formattedValues = {
                ...values,
                id,
                fecha_emision: dayjs(values.fecha_emision).toDate(),
                fecha_conclusion: dayjs(values.fecha_conclusion).toDate()
            };
            console.log(formattedValues);
            
            await CertificadosService.updateItem(Collection.Certificados, formattedValues)
            navigate.back()
        }
    })
    
	return (
		<Box>
			<Typography variant="h5" gutterBottom>{`Certificado Detalle (${id})` }</Typography>
			<CertificateForm cursos={subjects} formik={formik} id={id} />
			<Grid container spacing={2} p={2} >
				<Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
					<BackButton fullWidth />
				</Grid>
				<Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
					<Button 
                        fullWidth 
                        onClick={()=>{alert('asignar certificado')}} 
                        variant="contained" 
                        color="primary" 
                        startIcon={<AssignmentIcon />}>
                            Asignar Solicitud
                    </Button>
				</Grid>
				<Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <ButtonSave fullWidth onClick={()=>formik.submitForm()}/>
				</Grid>
				<Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
					<ButtonSeeCertificate 
                        formik={formik} 
                        maker={maker}
                        id={id as string} 
                        data={detalle} 
                        cursos={subjects} />
				</Grid>
                <Grid size={{xs:12}}>
					<CertificateDetail id_certificado={id} idioma={formik.values.idioma}  nivel={formik.values.nivel}/> 
				</Grid>
			</Grid>
		</Box>
	)
}
