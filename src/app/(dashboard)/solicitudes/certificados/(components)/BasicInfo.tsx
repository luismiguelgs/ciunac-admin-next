'use client'
import useStore from '@/hooks/useStore'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import { useFacultiesStore, useSubjectsStore } from '@/store/types.stores'
import React from 'react'
import Grid from '@mui/material/Grid2'
import { Chip, TextField } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PowerIcon from '@mui/icons-material/Power';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { MySelect } from '@/components/MUI'
import { ESTADO, NIVEL } from '@/lib/constants'

type Props={
    item:Isolicitud
    handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void
    edit:boolean,
}

export default function BasicInfo({ item, edit, handleChange }:Props ) 
{
    //HOOKS **************************************************
    const faculties = useStore(useFacultiesStore, (state) => state.faculties)
    const subjects = useStore(useSubjectsStore, (state) => state.subjects)

    return (
        <Grid container spacing={2} p={2}>
            <Grid size={{xs: 12}}>
            {
                item.estado === 'NUEVO' ? 
                (<Chip icon={<MilitaryTechIcon />} label="Solicitud Nueva" sx={{m:1}} color="error"/>) : 
                item.estado === 'ELABORADO' ?
                (<Chip icon={<MilitaryTechIcon />} label="Solicitud Elaborada" sx={{m:1}} color="warning"/>) : 
                (<Chip icon={<MilitaryTechIcon />} label="Solicitud Terminada" sx={{m:1}} color="success"/>)
            }
            {
                item.facultad !== 'PAR' ? 
                (<Chip icon={<FaceIcon />} label="Alumno UNAC" sx={{m:1}} color="primary"/>) : 
                item.trabajador ? 
                (<Chip icon={<FaceIcon />} label="Trabajador UNAC" sx={{m:1}} color="primary" />) :
                (<Chip icon={<FaceIcon />} label="PARTICULAR" sx={{m:1}} color="primary"/>)
            }
            {
                item.antiguo ? 
                (<Chip icon={<TextSnippetIcon />} label="Matrícula Antigua" sx={{m:1}} color="secondary"/>) : 
                (<Chip icon={<TextSnippetIcon />} label="Matrícula en Sistema" sx={{m:1}} color="secondary"/>)
            }
            {
                item.manual === true ? 
                (<Chip icon={<PowerIcon />} label="Solicitud Manual" sx={{m:1}} />) : 
                (<Chip icon={<OnlinePredictionIcon />} label="Solicitud Online" sx={{m:1}} />)
            }
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <MySelect 
                    disabled={!edit} 
                    data={ESTADO} 
                    name="estado" 
                    label="Estado" 
                    value={item?.estado as string} 
                    handleChange={handleChange}
                    helperText={true && "Seleccionar estado"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    required
                    disabled={!edit}
                    fullWidth
                    value={item?.dni}
                    onChange={e=>handleChange(e)}
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
                    value={item?.apellidos}
                    onChange={e=>handleChange(e)}
                    name="apellidos"
                    label="Apellidos"
                    slotProps={{ inputLabel: { shrink: true, } }}
                    helperText={false && "Campo requerido, mínimo 8 dígitos"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    required
                    disabled={!edit}
                    fullWidth
                    value={item?.nombres}
                    onChange={e=>handleChange(e)}
                    name="nombres"
                    label="Nombres"
                    slotProps={{ inputLabel: { shrink: true, } }}
                    helperText={false && "Campo requerido, mínimo 8 dígitos"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    required
                    disabled={!edit}
                    fullWidth
                    value={item?.celular}
                    onChange={e=>handleChange(e)}
                    name="celular"
                    label="Celular"
                    slotProps={{ inputLabel: { shrink: true, } }}
                    helperText={false && "Campo requerido, mínimo 8 dígitos"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    required
                    disabled={!edit}
                    fullWidth
                    value={item?.email}
                    onChange={e=>handleChange(e)}
                    name="email"
                    label="Email"
                    slotProps={{ inputLabel: { shrink: true, } }}
                    helperText={false && "Campo requerido, mínimo 8 dígitos"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                { subjects &&  <MySelect 
                    disabled={!edit} 
                    data={subjects} 
                    name="idioma" 
                    label="Idioma" 
                    value={item?.idioma} 
                    handleChange={handleChange}
                    helperText={true && "Seleccionar el idioma"}
                />}
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <MySelect 
                    disabled={!edit} 
                    data={NIVEL} 
                    name="nivel" 
                    label="Nivel" 
                    value={item?.nivel} 
                    handleChange={handleChange}
                    helperText={true && "Seleccionar el nivel"}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                {faculties && <MySelect 
                    disabled={!edit} 
                    data={faculties} 
                    name="facultad" 
                    label="Facultad" 
                    value={item?.facultad as string} 
                    handleChange={handleChange}
                    helperText={true && "Seleccionar facultad"}
                />}
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    required
                    disabled={!edit}
                    fullWidth
                    value={item.codigo}
                    onChange={e=>handleChange(e)}
                    name="codigo"
                    label="Código de Alumno"
                    slotProps={{ inputLabel: { shrink: true, } }}
                    helperText={false && "Campo requerido, mínimo 8 dígitos"}
                />
            </Grid>
        </Grid>
    )
}
