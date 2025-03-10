'use client'					
import { MyDialog } from '@/components/MUI'
import IProspecto from '@/interfaces/prospecto.interface'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import ProspectosService from '@/services/prospectos.service'
import SolicitudesService from '@/services/solicitudes.service'
import React from 'react'
import FormNuevaSolicitud from './(components)/FormNuevaSolicitud'

export default function NewRequestPage() 
{
     
	//dialogo
    const [open, setOpen] = React.useState<boolean>(false)

    const onSubmit = async(values:Isolicitud)=> {
        const prospecto:IProspecto = {
            dni: values.dni as string,
            nombres: values.nombres as string,
            apellidos: values.apellidos as string,
            telefono: values.celular as string,
            facultad: values.facultad as string,
            email: values.email || '', 
            codigo: values.codigo,
            trabajador: values.trabajador as boolean,
        }
        const idProspecto = await ProspectosService.newItem(prospecto)

        const solicitud:Isolicitud = {
            solicitud: values.solicitud,
            apellidos: values.apellidos,
            dni: values.dni,
            nombres: values.nombres,
            periodo: values.periodo,
            numero_voucher: values.numero_voucher,
            pago: values.pago?.toString(),
            idioma: values.idioma,
            nivel: values.nivel,
            fecha_pago: new Date(values.fecha_pago).toISOString().split('T')[0],
            trabajador: values.trabajador,
            alumno_id: idProspecto as string
        }

        await SolicitudesService.newItem(solicitud)
        setOpen(true)
	}
	
    return (
        <>
			<FormNuevaSolicitud onSubmit={onSubmit}/>
			<MyDialog 
                open={open}  
                setOpen={setOpen} 
                content='Solicitud Guardada !'
                title='Nueva Solicitud' 
                type='SIMPLE' />
        </>
    )
}
