import { Link, TextField } from '@mui/material'
//import React from 'react'
import pdfLogo from '@/assets/pdf.png'
import noImage from '@/assets/no_disponible.png'
import IProspecto from '@/interfaces/prospecto.interface'
import { MySelect } from '@/components/MUI'
import Grid from '@mui/material/Grid2'
import useStore from '@/hooks/useStore';
import {  useFacultiesStore } from '@/store/types.stores';

type Props = {
    item: IProspecto
    tipoTrabajador: string
    imagen_dni: string
    edit:boolean
}

export default function BasicInfo({item, tipoTrabajador, edit, imagen_dni}:Props) 
{
    const faculties = useStore(useFacultiesStore, (state) => state.faculties)
    const isPdf = imagen_dni?.split('?')[0].slice(-3) === 'pdf'
    const hasImage = Boolean(imagen_dni)

    return (
        <Grid container spacing={2} p={2}>
            <Grid container spacing={2} size={{xs: 12, md: 8}}>
                <Grid size={{xs: 12, sm: 6}} >
                    <TextField
                        disabled={!edit}
                        fullWidth
                        value={item?.apellidos}
                        //onChange={e=>handleChange(e)}
                        name="apellidos"
                        label="Apellidos"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        disabled={!edit}
                        fullWidth
                        value={item?.nombres}
                        //onChange={e=>handleChange(e)}
                        name="nombres"
                        label="Nombres"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        //required
                        disabled={!edit}
                        fullWidth
                        value={item?.dni}
                        //onChange={e=>handleChange(e)}
                        name="dni"
                        label="DNI"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        value={item?.telefono}
                        //onChange={e=>handleChange(e)}
                        name="celular"
                        label="Celular"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    { faculties && <MySelect
                        disabled={!edit} 
                        data={faculties} 
                        name="facultad" 
                        label="Facultad" 
                        value={item?.facultad} 
                        handleChange={()=>{}}
                        //helperText={true && "Seleccionar facultad"}
                    />}
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    {
                        item && (
                            <TextField
                                //required
                                disabled={!edit}
                                fullWidth
                                value={item.codigo}
                                //onChange={e=>handleChange(e)}
                                name="codigo"
                                label="Código de Alumno"
                                slotProps={{ inputLabel: { shrink: true, } }}
                                helperText={false && "Campo requerido, mínimo 8 dígitos"}
                            />
                        )
                    }
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        //required
                        disabled={!edit}
                        fullWidth
                        value={item?.email}
                        //onChange={e=>handleChange(e)}
                        name="email"
                        label="Email"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <MySelect 
                        data={[{value:'DOCENTE',label:'DOCENTE Y FAMILIARES'},{value:'ADMINISTRATIVO',label:'ADMINISTRATIVO CAS/NOMBRADO'}]}
                        name='tipo_trabajador'
                        disabled={!edit}
                        handleChange={()=>{}}
                        label='Tipo de Trabajador'
                        value={tipoTrabajador}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}} alignContent='center'>
                    {   Boolean(imagen_dni) ?
                            (<Link href={imagen_dni} underline='always' target='_blank' rel="noopener">VER DNI</Link>) 
                        :null
                    }
                </Grid>
            </Grid>
            <Grid container spacing={1} size={{xs: 12, md: 4}}>
            { 
                isPdf ? 
                    (<img src={pdfLogo.src} width='100%' />):
                    hasImage ? 
                       (<img src={imagen_dni} width='100%'/>) :
                       (<img src={noImage.src} width='100%'/>)
            }
            </Grid>
        </Grid>
    )
}
