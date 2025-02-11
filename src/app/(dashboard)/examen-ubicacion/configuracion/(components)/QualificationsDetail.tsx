'use client'
import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { Icalificacion } from '@/interfaces/calificacion.interface';
import { CalificacionesService, Collection } from '@/services/calificaciones.service';
import { MySelect } from '@/components/MUI';
import { NIVEL } from '@/lib/constants';
import QualificationsRange from './QualificationsRange';
import SelectSubjects from '@/components/SelectSubjects';


type Props = {
    id?: string | undefined
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    setReload:React.Dispatch<React.SetStateAction<boolean>>
}

const msgReq = 'Campo requerido'

const validationSchema = yup.object<Icalificacion>({
    codigo: yup.string().required(msgReq).trim(),
    idioma: yup.string().trim().required(msgReq),
    nivel: yup.string().trim().required(msgReq)
})


export default function QualificationsDetail({id, setOpen, setReload}:Props) 
{
    //hooks
    const [ID, setID] = React.useState<string | undefined>(id)
    const [data, setData] = React.useState<Icalificacion>()
    const [editar, setEditar] = React.useState<boolean>(false)

    const loadData = async (id:string | null) =>{
        const d = await CalificacionesService.selectItem(id as string)
        setData(d)
        console.log(d);
        
        formik.setValues({
            codigo: d?.codigo || '',
            idioma: d?.idioma || '',
            nivel: d?.nivel || ''
        })
    }

    React.useEffect(()=>{
        if(id) loadData(id)
    },[])

    const formik = useFormik<Icalificacion>({
        initialValues:{
            codigo: '' ,
            idioma: '' ,
            nivel:  ''
        },
        validationSchema,
        onSubmit: async(values) => {
            if(ID === null){
                const id_nuevo = await CalificacionesService.newItem(Collection.Calificaciones,values)
                setID(id_nuevo as string)
            }
            else{
                await CalificacionesService.updateItem(Collection.Calificaciones, {id:id,...values})
                //setEditar(false)
            }
            setReload((oldValue)=>!oldValue)
            setEditar(false)
        }
    })

    // useEffect to update codigo when idioma or nivel changes
    React.useEffect(() => {
        if (formik.values.idioma && formik.values.nivel) {
            formik.setFieldValue('codigo', `EXAMEN-UBICACION-${formik.values.idioma}-${formik.values.nivel}`);
        }
    }, [formik.values.idioma, formik.values.nivel]);
    
    return (
        <Box>
            <Grid container spacing={2} p={3} component='form' onSubmit={formik.handleSubmit}>
                <Grid size={{xs: 12, md: 4}}>
                    <SelectSubjects
                        handleChange={formik.handleChange}
                        error={formik.touched.idioma && Boolean(formik.errors.idioma)}
                        disabled={ID !== null && !editar}
                        value={formik.values.idioma}
                        helperText={formik.touched.idioma && formik.errors.idioma} 
                    />
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                    <MySelect 
                        data={NIVEL}
                        handleChange={formik.handleChange}
                        label='Nivel'
                        name='nivel'
                        disabled={ID !== null && !editar}
                        error={formik.touched.nivel && Boolean(formik.errors.nivel)}
                        value={formik.values.nivel}
                        helperText={formik.touched.nivel && formik.errors.nivel}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 4}}>
                    <TextField
                        value={formik.values.codigo}
                        name='codigo'
                        disabled
                        label="Código"
                        error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={formik.handleChange}
                        helperText={formik.touched.codigo && formik.errors.codigo}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 4}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <Button 
                        sx={{color:'white'}} 
                        fullWidth 
                        onClick={()=>{setOpen(false)}} 
                        variant="contained" 
                        color="secondary" 
                        startIcon={<ArrowBackIcon />}>
                        Atras
                    </Button>
                </Grid>
                <Grid size={{xs: 12, md: 4}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <Button 
                        fullWidth 
                        disabled={ID === null || editar}
                        onClick={()=>{setEditar(true)}} 
                        variant="contained" 
                        color="primary" 
                        startIcon={<EditNoteIcon />}>
                        Editar
                    </Button>
                </Grid>
                <Grid size={{xs: 12, md: 4}} display='flex' alignItems='center' justifyContent='center' alignContent='center'>
                    <Button
                        fullWidth 
                        type='submit'
                        variant="contained" 
                        color="success" 
                        disabled={ID !== null && !editar}
                        startIcon={<SaveIcon />}>
                        Guardar
                    </Button>
                </Grid>
                <Grid size={{xs: 12}} >
                    { data && <QualificationsRange id={data?.codigo as string}/> }                  
                </Grid>
            </Grid>
        </Box>
    )
}
