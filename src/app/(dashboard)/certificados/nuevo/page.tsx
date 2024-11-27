'use client'
import useStore from "@/hooks/useStore";
import CertificateForm from "../(components)/(form)/CertificateForm";
import { useSubjectsStore } from "@/store/types.stores";
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
import ButtonSeeCertificate from "../(components)/ButtonSeeCertificate";
import ButtonSave from "@/components/ButtonSave";
import { useSession } from 'next-auth/react'
import ButtonAsignRequest from "../(components)/ButtonAsignRequest";
import { Isolicitud } from "@/interfaces/solicitud.interface";

export default function NewCertificatePage() 
{
    const { data: session, status } = useSession()
	//HOOKS *************************************************
    if(status === 'loading'){
        return <p>Loading ...</p>
    }
    if (status === "unauthenticated") {
        return <p>Please log in.</p>; // Handle unauthenticated state
    }

    const [reload, setReload] = React.useState<boolean>(false)
    const [dataRequest, setDataRequest] = React.useState<Isolicitud>()
    
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
	const [id, setId] = React.useState<string>('nuevo')
    const navigate = useRouter()

	const formik = useFormik<Icertificado>({
        initialValues:initialValues,
        validationSchema : validationSchema,
        onSubmit: async(values:Icertificado) =>{
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
        }
    })

    React.useEffect(() => {
        formik.setFieldValue('id_solicitud', dataRequest?.id)
        formik.setFieldValue('alumno', dataRequest?.nombres ? dataRequest?.nombres + ' ' + dataRequest?.apellidos : '')
        formik.setFieldValue('idioma', dataRequest?.idioma)
        formik.setFieldValue('nivel', dataRequest?.nivel)
        //console.log();
    }, [reload])

	return (
		<Box>
			<CertificateForm formik={formik} id={id} />
			<Grid container spacing={2} p={2} >
				<Grid size={{xs: 12, md: 3}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<BackButton fullWidth/>
				</Grid>
				<Grid size={{xs: 12, md: 3}} display={'flex'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
					<ButtonAsignRequest
                        setReload={setReload}
                        setData={setDataRequest} 
                    />
				</Grid>
                <Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <ButtonSave fullWidth onClick={()=>formik.submitForm()}/>
				</Grid>
                <Grid size={{xs: 12, md: 3}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
					<ButtonSeeCertificate formik={formik} id={id as string} data={[]} cursos={subjects}/>
				</Grid>
				<Grid size={{xs:12}}>
					<CertificateDetail id_certificado={id} /> 
				</Grid>
			</Grid>
            <p>{session?.user?.email}</p>
		</Box>
	)
}
