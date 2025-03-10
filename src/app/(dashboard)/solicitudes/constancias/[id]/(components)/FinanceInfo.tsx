'use client'
import Grid from '@mui/material/Grid2';
import { Button, FormControlLabel,  InputAdornment, TextField, Checkbox } from '@mui/material'
import pdfLogo from '@/assets/pdf.png'
import dayjs from 'dayjs'
import  Link  from '@mui/material/Link'
import { useFormik } from 'formik'
import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import noImage from '@/assets/no_disponible.png'
import {validationSchemaFinance} from './validation.schema'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import useStore from '@/hooks/useStore';
import { useDocumentsStore, } from '@/store/types.stores';
import { MySelect } from '@/components/MUI';
import { ESTADO, NIVEL } from '@/lib/constants';
import SelectSubjects from '@/components/SelectSubjects';
import Image from 'next/image';
import MyDatePicker from '@/components/MyDatePicker';

type Props = {
    item: Isolicitud,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveItem:(values:any) => void
}

export default function FinanceInfo({item, saveItem}:Props) 
{
    let voucher = null

    if(item.voucher){
        voucher = item.voucher
    }else{
        voucher = item.img_voucher
    }
    
    const documents = useStore(useDocumentsStore, (state) => state.documents)
    const [edit, setEdit] = React.useState<boolean>(false)
    const isPdf = voucher?.split('?')[0].slice(-3) === 'pdf'
    const hasImage = Boolean(voucher)

    if (item.creado && item.creado.seconds) {
        item.creado = dayjs(new Date(item.creado.seconds * 1000 + (item.creado.nanoseconds || 0) / 1e6))
    }
    if (item.modificado && item.modificado.seconds) {
        item.modificado = dayjs(new Date(item.modificado.seconds * 1000 + (item.modificado.nanoseconds || 0) / 1e6))
    }

    const formik = useFormik<Isolicitud>({
        initialValues:{
            periodo: item.periodo,
            solicitud : item.solicitud,
            estado: item.estado,
            idioma: item.idioma,
            nivel: item.nivel,
            numero_voucher: item.numero_voucher,
            pago: item.pago,
            fecha_pago: dayjs(new Date(item.fecha_pago)),
            trabajador: item.trabajador,
        },
        validationSchema: validationSchemaFinance,
        onSubmit: (values)=>{
            saveItem(values)
            setEdit(false)
        }
    })

    //funciones
    const handleClickEdit = () =>{
        setEdit(true)
    }
    
    return (
        <Grid container spacing={2} p={1}>
            <Grid container spacing={2} size={{xs:12, md:8}} component='form' onSubmit={formik.handleSubmit}>
                {/**Tipo de Solicitud */}
                <Grid size={{xs:12, sm:6}}>
                    { documents && <MySelect 
                        name='solicitud'
                        disabled
                        label='Tipo de Solicitud'
                        handleChange={formik.handleChange}
                        value={formik.values.solicitud as string}
                        data={documents}
                    />}
                </Grid>
                {/**Estado */}
                <Grid size={{xs:12, sm:6}}>
                    <MySelect 
                        disabled={!edit} 
                        data={ESTADO} 
                        name="estado" 
                        error={formik.touched.estado && Boolean(formik.errors.estado)}
                        label="Estado" 
                        value={formik.values.estado as string} 
                        handleChange={formik.handleChange}
                        helperText={formik.touched.estado && formik.errors.estado}
                    />
                </Grid>
                {/**Idioma */}
                <Grid size={{xs:12, sm:6}}>
                    <SelectSubjects
                        handleChange={formik.handleChange}
                        value={formik.values.idioma as string}
                        error={formik.touched.idioma && Boolean(formik.errors.idioma)}
                        helperText={formik.touched.idioma && formik.errors.idioma}
                        disabled={!edit}
                    />
                </Grid>
                {/**Nivel */}
                <Grid size={{xs:12, sm:6}}>
                    <MySelect 
                        data={NIVEL}
                        disabled={!edit} 
                        error={formik.touched.nivel && Boolean(formik.errors.nivel)}
                        name='nivel'
                        label='Nivel'
                        value={formik.values.nivel as string}
                        handleChange={formik.handleChange}
                        helperText={formik.touched.nivel && formik.errors.nivel}
                    />
                </Grid>
                {/**Número Voucher */}
                <Grid size={{xs:12, sm:6}}>
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        error={formik.touched.numero_voucher && Boolean(formik.errors.numero_voucher)}
                        value={formik.values.numero_voucher}
                        onChange={formik.handleChange}
                        name="numero_voucher"
                        label="Número de voucher"
                        slotProps={{inputLabel: {shrink: true,}}}
                        helperText={formik.touched.numero_voucher && formik.errors.numero_voucher}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <TextField
                        type='number'
                        fullWidth
                        required
                        disabled={!edit}
                        error={formik.touched.pago && Boolean(formik.errors.pago)}
                        label='Monto pagado'
                        value={formik.values.pago}
                        slotProps={{
                            input:{startAdornment: <InputAdornment position="start">S/</InputAdornment>,},
                        }}
                        onChange={formik.handleChange}
                        name="pago"
                        helperText={formik.touched.pago && formik.errors.pago}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <MyDatePicker
                        label='Fecha de Pago'
                        name='fecha_pago'
                        edit={edit}
                        formik={formik}
                        value={formik.values.fecha_pago}
                        error={Boolean(formik.touched.fecha_pago) && Boolean(formik.errors.fecha_pago)}
                        helperText={(formik.touched.fecha_pago && formik.errors.fecha_pago) as React.ReactNode}
                    />  
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <TextField
                        disabled
                        fullWidth
                        value={formik.values.periodo}
                        onChange={formik.handleChange}
                        name="periodo"
                        label="Periodo"
                        slotProps={{inputLabel: {shrink: true,}}}
                        helperText={formik.touched.periodo && formik.errors.periodo}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <FormControlLabel disabled={!edit} control={<Checkbox checked={item.trabajador} />} label="Trabajador" />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                {   Boolean(voucher) ?
                        (<Link href={voucher} underline='always' target='_blank' rel="noopener">VER VOUCHER</Link>) 
                    :null
                }
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <MyDatePicker
                        label="Fecha de creación"
                        name="creado"
                        ampm={true}
                        value={dayjs(new Date(item.creado))}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <MyDatePicker
                        label="Fecha de última edición"
                        name="modificado"
                        ampm={true}
                        value={dayjs(new Date(item.modificado))}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <Button
                        variant="contained" 
                        color="primary" 
                        sx={{ml:0, mr:2}} 
                        fullWidth
                        onClick={handleClickEdit} 
                        endIcon={<EditNoteIcon />}
                        disabled={edit}>
                        Editar
                    </Button>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <Button 
                        variant="contained" 
                        color="success" 
                        type='submit'
                        fullWidth
                        sx={{ml:0, mr:2}} 
                        endIcon={<SaveIcon />}
                        disabled={!edit}>
                        Guardar
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1} size={{xs:12, md:4}}>
                    {/*Imagen*/}
                    <Grid size={{xs:12}} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    { 
                        isPdf ? 
                            (<Image src={pdfLogo.src} style={{width:'100%', height:'100%', objectFit: 'contain'}} alt='pdf' width={1000} height={1000} priority/>) :
                            hasImage ?
                                (<Image src={voucher as string} style={{width:'100%', height:'100%', objectFit: 'contain'}} alt='voucher' width={1000} height={1000} priority/>) : 
                                (<Image src={noImage.src} style={{width:'100%', height:'100%', objectFit: 'contain'}} alt='no image' width={1000} height={1000} priority/>)
                    }
                    </Grid>
                </Grid>
            </Grid>
    )
}
