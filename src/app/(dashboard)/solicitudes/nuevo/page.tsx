'use client'					
import { MyDialog } from '@/components/MUI'
import IProspecto from '@/interfaces/prospecto.interface'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import ProspectosService from '@/services/prospectos.service'
import SolicitudesService from '@/services/solicitudes.service'
import React from 'react'
import FormNuevaSolicitud from './(components)/FormNuevaSolicitud'
import LoadingDialog from '@/components/MUI/Dialogs/DialogLoading'

export default function NewRequestPage() 
{
     
	//dialogo
    const [open, setOpen] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)

    const onSubmit = async(values:Isolicitud)=> {
        setLoading(true)
        const prospecto:IProspecto = {
            dni: values.dni as string,
            nombres: (values.nombres as string).toLocaleUpperCase(),
            apellidos: (values.apellidos as string).toLocaleUpperCase(),
            telefono: values.celular as string,
            facultad: values.facultad as string,
            email: values.email || '', 
            codigo: values.codigo,
            trabajador: values.trabajador as boolean,
        }
        const idProspecto = await ProspectosService.newItem(prospecto)

        const solicitud:Isolicitud = {
            solicitud: values.solicitud,
            apellidos: values.apellidos?.toLocaleUpperCase(),
            dni: values.dni,
            nombres: values.nombres?.toLocaleUpperCase(),
            periodo: values.periodo,
            numero_voucher: values.numero_voucher,
            pago: values.pago?.toString(),
            idioma: values.idioma,
            nivel: values.nivel,
            fecha_pago: new Date(values.fecha_pago).toISOString().split('T')[0],
            trabajador: values.trabajador,
            tipo_trabajador: values.tipo_trabajador,
            alumno_id: idProspecto as string
        }

        await SolicitudesService.newItem(solicitud)
        setLoading(false)
        setOpen(true)
	}
	
    return (
        <>
			<FormNuevaSolicitud onSubmit={onSubmit}/>
            <LoadingDialog
                open={loading}
                message='Guardando Solicitud...'
            />
			<MyDialog 
                open={open}  
                setOpen={setOpen} 
                content='Solicitud Guardada !'
                title='Nueva Solicitud' 
                type='SIMPLE' />
        </>
    )
}
