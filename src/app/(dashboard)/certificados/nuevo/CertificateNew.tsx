'use client'
import type { Session } from "next-auth"
import CertificateForm from "../(components)/(form)/CertificateForm";
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { Icertificado } from "@/interfaces/certificado.interface";
import {initialValues, validationSchema} from "../(components)/(form)/validation.schema";
import dayjs from 'dayjs'
import CertificadosService, { Collection } from "@/services/certificados.service";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import BackButton from "@/components/BackButton";
import CertificateDetail from "../(components)/CertificateDetail";
import ButtonSave from "@/components/ButtonSave";
import ButtonAsignRequest from "../(components)/ButtonAsignRequest";
import { Isolicitud } from "@/interfaces/solicitud.interface";
import { PROGRAMAS } from "@/lib/constants";
import  LoadingDialog  from"@/components/MUI/Dialogs/DialogLoading"

export default function CertificateNew({ session }: { session: Session | null }) 
{
	//HOOKS *************************************************
    const [loading, setLoading] = React.useState<boolean>(false)
    const [reload, setReload] = React.useState<boolean>(false)
    const [dataRequest, setDataRequest] = React.useState<Isolicitud>()
    
	const [id, setId] = React.useState<string>('nuevo')
    const navigate = useRouter()

	const formik = useFormik<Icertificado>({
        initialValues:initialValues,
        validationSchema : validationSchema,
        onSubmit: async(values:Icertificado) =>{
            setLoading(true)
            values.alumno = values.alumno.toUpperCase()
            // Convert dayjs objects to JavaScript Date objects
            const formattedValues = {
                ...values,
                elaborador: session?.user?.email,
                fecha_emision: dayjs(values.fecha_emision).toDate(),
                fecha_conclusion: dayjs(values.fecha_conclusion).toDate()
            } as Icertificado;
            //alert(JSON.stringify(values,null, 2))
            const id = await CertificadosService.newItem(Collection.Certificados, formattedValues)
            setId(id as string)
            navigate.push(`./${id}`)
            setLoading(false)
        }
    })

    React.useEffect(() => {
        formik.setFieldValue('id_solicitud', dataRequest?.id)
        formik.setFieldValue('alumno', dataRequest?.nombres ?  dataRequest?.apellidos + ' ' +  dataRequest?.nombres  : '')
        formik.setFieldValue('idioma', dataRequest?.idioma)
        formik.setFieldValue('nivel', dataRequest?.nivel)
        formik.setFieldValue('elaborador', session?.user?.email)
        if(dataRequest?.idioma && dataRequest?.nivel){
            const horas = PROGRAMAS.find(programa => programa.id === `${dataRequest?.idioma}-${dataRequest?.nivel}`)?.horas
            formik.setFieldValue('horas', horas)
            if(dataRequest.nivel === 'BASICO'){
                formik.setFieldValue('numero_registro', 'B00 -Folio')
            }else{
                formik.setFieldValue('numero_registro', 'IA00 -Folio')
            }
        }
    }, [reload])
  
	return (
		<Box>
			<CertificateForm formik={formik} id={id} />
			<Grid container spacing={2} p={2} >
				<Grid size={{xs: 12, md: 4}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<BackButton fullWidth/>
				</Grid>
				<Grid size={{xs: 12, md: 4}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<ButtonAsignRequest
                        setReload={setReload}
                        setData={setDataRequest} 
                    />
				</Grid>
                <Grid size={{xs: 12, md: 4}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <ButtonSave fullWidth onClick={()=>formik.submitForm()}/>
				</Grid>
				<Grid size={{xs:12}}>
					<CertificateDetail id_certificado={id} /> 
				</Grid>
			</Grid>
            <LoadingDialog open={loading} message="Cargando..." />
		</Box>
	)
}
