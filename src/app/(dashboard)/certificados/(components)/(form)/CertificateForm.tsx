'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
import { IBaseData } from '@/interfaces/types.interface'
import { FormikProps } from 'formik'
import { Icertificado } from '@/interfaces/certificado.interface'
import { TextField } from '@mui/material'
import { MySelect, MySwitch } from '@/components/MUI'
import { NIVEL } from '@/lib/constants'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SelectSubjects from '@/components/SelectSubjects'

type Props = {
    formik: FormikProps<Icertificado>,
    id: string
}


export default function CertificateForm({formik, id}:Props)
{
    return (
        <Grid container spacing={2} p={2} component='form' onSubmit={formik.handleSubmit}>
            <Grid size={{xs: 12, sm: 6}}>
                <TextField
                    autoFocus
                    value={formik.values.alumno}
                    name='alumno'
                    label="Alumno"
                    error={formik.touched.alumno && Boolean(formik.errors.alumno)}
                    type="text"
                    fullWidth
                    disabled={id !== 'nuevo'}
                    variant="outlined"
                    onChange={formik.handleChange}
                    helperText={formik.touched.alumno && formik.errors.alumno}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <SelectSubjects 
                    error={formik.touched.idioma && Boolean(formik.errors.idioma)}
                    helperText={formik.touched.idioma && formik.errors.idioma}
                    value={formik.values.idioma}
                    handleChange={formik.handleChange}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <MySelect 
                    data={NIVEL}
                    handleChange={formik.handleChange}
                    label='Nivel'
                    name='nivel'
                    disabled={id !== 'nuevo'}
                    error={formik.touched.nivel && Boolean(formik.errors.nivel)}
                    value={formik.values.nivel}
                    helperText={formik.touched.nivel && formik.errors.nivel}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <TextField
                    autoFocus
                    value={formik.values.horas}
                    name='horas'
                    disabled={id !== 'nuevo'}
                    label="Cantidad de Horas"
                    error={formik.touched.horas && Boolean(formik.errors.horas)}
                    type="number"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    helperText={formik.touched.horas && formik.errors.horas}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                    <DatePicker 
                        label="Fecha Emisión"
                        value={dayjs(formik.values.fecha_emision)} 
                        onChange={(date)=>formik.setFieldValue('fecha_emision',date)} 
                        maxDate={dayjs(new Date())}
                        slotProps={{
                            textField:{
                                fullWidth:true,
                                error: Boolean(formik.touched.fecha_emision) && Boolean(formik.errors.fecha_emision),
                                helperText: (formik.touched.fecha_emision && formik.errors.fecha_emision) as string
                            }
                        }}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <TextField
                    autoFocus
                    value={formik.values.numero_registro}
                    name='numero_registro'
                    label="Número de Registro"
                    error={formik.touched.numero_registro && Boolean(formik.errors.numero_registro)}
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    helperText={formik.touched.numero_registro && formik.errors.numero_registro}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                    <DatePicker 
                        label="Fecha Concluido"
                        value={dayjs(formik.values.fecha_conclusion)} 
                        onChange={(date)=>formik.setFieldValue('fecha_conclusion',dayjs(date))} 
                        maxDate={dayjs(new Date())}
                        slotProps={{
                            textField:{
                                fullWidth:true,
                                error: Boolean(formik.touched.fecha_conclusion) && Boolean(formik.errors.fecha_conclusion),
                                helperText: (formik.touched.fecha_conclusion && formik.errors.fecha_conclusion) as string
                            }
                        }}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <MySwitch 
                    label='Curricula Antigua'
                    name='curricula_antigua'
                    checked={formik.values.curricula_antigua as boolean}
                    handleChange={formik.handleChange}
                    sx={{mt:1}}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <MySwitch 
                    label='Duplicado'
                    name='duplicado'
                    checked={formik.values.duplicado as boolean}
                    handleChange={formik.handleChange}
                    sx={{mt:1}}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <TextField
                    autoFocus
                    disabled={!formik.values.duplicado as boolean}
                    value={formik.values.certificado_anterior}
                    name='certificado_anterior'
                    label="Certificado Original"
                    error={formik.touched.certificado_anterior && Boolean(formik.errors.certificado_anterior)}
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    helperText={formik.touched.certificado_anterior && formik.errors.certificado_anterior}
                />
            </Grid>
            <Grid size={{xs: 12, sm: 3}}>
                <TextField
                    autoFocus
                    disabled
                    value={formik.values.elaborador}
                    name='elaborador'
                    label="Elaborado por"
                    error={formik.touched.elaborador && Boolean(formik.errors.elaborador)}
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    helperText={formik.touched.elaborador && formik.errors.elaborador}
                />
            </Grid>
        </Grid>
    )
}