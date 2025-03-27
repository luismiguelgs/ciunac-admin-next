'use client';
import React from 'react'
import { MySelect, MySwitch } from '@/components/MUI'
import { useMask } from '@react-input/mask'
import { useFormik } from 'formik'
import { Box, Button, InputAdornment, TextField, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { Isolicitud } from '@/interfaces/solicitud.interface'
import { NIVEL } from '@/lib/constants'
import SaveIcon from '@mui/icons-material/Save';
import dayjs, { Dayjs } from 'dayjs'
import {validationSchema, initialValues} from './form.schema';
import BackButton from '@/components/BackButton';
import 'dayjs/locale/es';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';   
import SelectSubjects from '@/components/SelectSubjects';
import SelectDocuments from '@/components/SelectDocuments';
import SelectFaculty from '@/components/SelectFaculty';
import DateInput from '@/components/MyDatePicker';

type Props = {
    onSubmit(values:Isolicitud) : void
    ubicacion?: boolean
}

export default function FormNuevaSolicitud({onSubmit}:Props) 
{
    const [fechaCreacion, setFechaCreacion] = React.useState(false)

    const apellidoRef = useMask({ mask: '________________________________________', replacement: { _: /^[a-zA-Z \u00C0-\u00FF]*$/ } })
    const nombreRef = useMask({ mask: '________________________________________', replacement: { _: /^[a-zA-Z \u00C0-\u00FF]*$/ } })
    const celularRef = useMask({ mask: '___-___-___', replacement: { _: /\d/ } });
    const codigoRef = useMask({ mask: '__________', replacement: { _: /^[a-zA-Z0-9_]*$/ } });
    const dniRef = useMask({ mask: '________', replacement: { _: /\d/ } });
    const voucherRef = useMask({ mask: '_______________', replacement: { _: /\d/ } });
    const pagoRef = useMask({ mask: '_____', replacement: { _: /^[0-9.]*$/ } });

    const formik = useFormik<Isolicitud>({
        initialValues,
        validationSchema,
        onSubmit: async(values, {resetForm}) => {
            onSubmit(values)
            resetForm()
        }
    })

    const handleDocumentChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(e)
        const documentType = e.target.value
        let amout = '0'
        switch (documentType) {
            case 'CERTIFICADO_DE_ESTUDIO':
            case 'DUPLICADO_DE_CERTIFICADO':
                amout = '50'
                break;
            case 'CONSTANCIA_DE_MATRICULA':
                amout = '20'
                break;
            default:
                amout = '30'
                break;
        }        
        formik.setFieldValue('pago', amout)
    }

    return (
        <Box sx={{p: 1, maxWidth: '1200px', mx: 'auto'}} component='form' onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
                {/* Basic Information Section */}
                <Grid size={{xs:12}}>
                    <Paper elevation={2} sx={{ p: 3, mb: 3, width: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                            Información Básica
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <SelectDocuments 
                                    handleChange={handleDocumentChange}
                                    value={formik.values.solicitud as string}
                                    error={formik.touched.solicitud && Boolean(formik.errors.solicitud)}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:3}}>
                                <TextField
                                    inputRef={dniRef}
                                    fullWidth
                                    autoComplete='off'
                                    error={formik.touched.dni && Boolean(formik.errors.dni)}
                                    value={formik.values.dni}
                                    onChange={formik.handleChange}
                                    name="dni"
                                    id="dni"
                                    label="DNI"
                                    helperText={formik.touched.dni && formik.errors.dni}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:3}}>
                                <TextField
                                    inputRef={celularRef}
                                    fullWidth
                                    autoComplete='off'
                                    error={formik.touched.celular && Boolean(formik.errors.celular)}
                                    value={formik.values.celular}
                                    onChange={formik.handleChange}
                                    name="celular"
                                    id="celular"
                                    label="Celular"
                                    helperText={formik.touched.celular && formik.errors.celular}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    inputRef={apellidoRef}
                                    fullWidth
                                    autoComplete='off'
                                    error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
                                    value={formik.values.apellidos}
                                    onChange={formik.handleChange}
                                    name="apellidos"
                                    id="apellidos"
                                    label="Apellidos"
                                    helperText={formik.touched.apellidos && formik.errors.apellidos}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    inputRef={nombreRef}
                                    fullWidth
                                    autoComplete='off'
                                    error={formik.touched.nombres && Boolean(formik.errors.nombres)}
                                    value={formik.values.nombres}
                                    onChange={formik.handleChange}
                                    name="nombres"
                                    id="nombres"
                                    label="Nombres"
                                    helperText={formik.touched.nombres && formik.errors.nombres}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <SelectSubjects 
                                    handleChange={formik.handleChange}
                                    value={formik.values.idioma as string}
                                    error={formik.touched.idioma && Boolean(formik.errors.idioma)}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <MySelect 
                                    data={NIVEL}
                                    error={formik.touched.nivel && Boolean(formik.errors.nivel)}
                                    name='nivel'
                                    label='Nivel'
                                    value={formik.values.nivel as string}
                                    handleChange={formik.handleChange}
                                    helperText={formik.touched.nivel && formik.errors.nivel}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* UNAC Student Information Section */}
                <Grid size={{xs:12}}>
                    <Paper elevation={2} sx={{ p: 3, mb: 3, width: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                            Información de Estudiante UNAC
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <SelectFaculty 
                                    handleChange={formik.handleChange}
                                    value={formik.values.facultad as string}
                                    error={formik.touched.facultad && Boolean(formik.errors.facultad)}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    value={formik.values.codigo}
                                    error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                                    autoComplete='off'
                                    disabled={formik.values.facultad === 'PAR'}
                                    inputRef={codigoRef}
                                    onChange={formik.handleChange}
                                    name="codigo"
                                    label="Código de Alumno"
                                    helperText={formik.touched.codigo && formik.errors.codigo}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Payment Information Section */}
                <Grid size={{xs:12}}>
                    <Paper elevation={2} sx={{ p: 3, mb: 3, width: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                            Información de Pago
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:4}}>
                                <TextField
                                    fullWidth
                                    inputRef={voucherRef}
                                    error={formik.touched.numero_voucher && Boolean(formik.errors.numero_voucher)}
                                    value={formik.values.numero_voucher}
                                    autoComplete='off'
                                    onChange={formik.handleChange}
                                    name="numero_voucher"
                                    label="Número de voucher"
                                    helperText={formik.touched.numero_voucher && formik.errors.numero_voucher}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:4}}>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    inputRef={pagoRef}
                                    label='Monto pagado'
                                    error={formik.touched.pago && Boolean(formik.errors.pago)}
                                    value={formik.values.pago}
                                    slotProps={{
                                        input:{
                                            startAdornment: <InputAdornment position="start">S/</InputAdornment>,
                                        }
                                    }}
                                    onChange={formik.handleChange}
                                    name="pago"
                                    helperText={formik.touched.pago && formik.errors.pago}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:4}}>
                                <DateInput 
                                    label='Fecha de Pago'
                                    value={formik.values.fecha_pago as Dayjs | null}
                                    name='fecha_pago'
                                    edit={true}
                                    formik={formik}
                                    error={formik.touched.fecha_pago && Boolean(formik.errors.fecha_pago)}
                                    helperText={(formik.touched.fecha_pago && formik.errors.fecha_pago) as string}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Worker Information Section */}
                <Grid size={{xs:12, md:6}}>
                    <Paper elevation={2} sx={{ p: 3, mb: 3, width: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                            Información de Trabajador
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <MySwitch 
                                    label='Trabajador UNAC'
                                    checked={formik.values.trabajador as boolean}
                                    name='trabajador'
                                    handleChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <MySelect 
                                    data={[{value:'DOCENTE',label:'DOCENTE Y FAMILIARES'},{value:'ADMINISTRATIVO',label:'ADMINISTRATIVO CAS/NOMBRADO'}]}
                                    error={formik.touched.tipo_trabajador && Boolean(formik.errors.tipo_trabajador)}
                                    name='tipo_trabajador'
                                    disabled={!formik.values.trabajador}
                                    label='Tipo de Trabajador'
                                    value={formik.values.tipo_trabajador as string}
                                    handleChange={formik.handleChange}
                                    helperText={formik.touched.tipo_trabajador && formik.errors.tipo_trabajador}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {/* Extra Information Section */}
                <Grid size={{xs:12, md:6}}>
                    <Paper elevation={2} sx={{ p: 3, mb: 3, width: '100%' }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                            Información Adicional
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{xs:12, md:6}}>
                                <MySwitch
                                    label='Ingresar Fecha de solicitud'
                                    checked={fechaCreacion}
                                    name='fecha_creacion'
                                    handleChange={()=> setFechaCreacion(!fechaCreacion)}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                                    <DatePicker 
                                        label="Fecha de Ingreso"
                                        disabled={!fechaCreacion}
                                        value={formik.values.creado} 
                                        onChange={(date)=>formik.setFieldValue('creado',date)} 
                                        maxDate={dayjs(new Date())}
                                        slotProps={{
                                            textField:{
                                                fullWidth:true,
                                                error: Boolean(formik.touched.creado) && Boolean(formik.errors.creado)
                                            }
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            <Box display='flex' m={2} justifyContent='flex-end'>
                <BackButton sx={{ fontSize: '1.1rem', py: 1, px: 2 }} />
                <Button 
                    sx={{
                        ml: 2,
                        fontSize: '1.1rem',
                        py: 1,
                        px: 3
                    }} 
                    type="submit" 
                    variant="contained" 
                    color="success" 
                    endIcon={<SaveIcon />}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )
}
