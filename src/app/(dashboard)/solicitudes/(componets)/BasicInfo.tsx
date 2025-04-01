import { Button, TextField } from '@mui/material'
import noImage from '@/assets/no_disponible.png'
import Grid from '@mui/material/Grid2'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import React from 'react'
import { useFormik } from 'formik'
import { validationSchemaBasic } from './validation.schema'
import SelectFaculty from '@/components/SelectFaculty'
import Image from 'next/image'
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import { MySelect } from '@/components/MUI'

type Props = {
    item: Isolicitud,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveItem:(values:any) => void
}

export default function BasicInfo({item, saveItem}:Props) 
{
    const [edit, setEdit] = React.useState<boolean>(false)

    const formik = useFormik<Isolicitud>({
        initialValues:{
            apellidos: item.apellidos,
            nombres: item.nombres,
            dni: item.dni,
            celular: item.celular,
            email: item.email,
            facultad : item.facultad,
            codigo: item.codigo
        },
        validationSchema: validationSchemaBasic,
        onSubmit: (values)=>{
            saveItem(values)
            setEdit(false)
        }
    })
    return (
        <Grid container spacing={2} p={2}>
            <Grid container spacing={2} size={{xs: 12, md: 8}} component={'form'} onSubmit={formik.handleSubmit}>
                <Grid size={{xs: 12, sm: 6}} >
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
                        name="apellidos"
                        label="Apellidos"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.apellidos && formik.errors.apellidos}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        value={formik.values.nombres}
                        error={formik.touched.nombres && Boolean(formik.errors.nombres)}
                        onChange={formik.handleChange}
                        name="nombres"
                        label="Nombres"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.nombres && formik.errors.nombres}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        required
                        disabled={!edit}
                        error={formik.touched.dni && Boolean(formik.errors.dni)}
                        fullWidth
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                        name="dni"
                        label="DNI"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.dni && formik.errors.dni}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        error={formik.touched.celular && Boolean(formik.errors.celular)}
                        value={formik.values.celular}
                        onChange={formik.handleChange}
                        name="celular"
                        label="Celular"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.celular && formik.errors.celular}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <SelectFaculty
                        handleChange={formik.handleChange}
                        value={formik.values.facultad as string}
                        disabled={!edit}
                        error={formik.touched.facultad && Boolean(formik.errors.facultad)}
                        helperText={formik.touched.facultad && formik.errors.facultad}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        disabled={!edit}
                        fullWidth
                        error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                        value={formik.values.codigo}
                        onChange={formik.handleChange}
                        name="codigo"
                        label="Código"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.codigo && formik.errors.codigo}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <TextField
                        required
                        disabled={!edit}
                        fullWidth
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        name="email"
                        label="Email"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}}>
                    <MySelect 
                        data={[{value:'DOCENTE',label:'DOCENTE Y FAMILIARES'},{value:'ADMINISTRATIVO',label:'ADMINISTRATIVO CAS/NOMBRADO'}]}
                        name='tipo_trabajador'
                        disabled={!edit}
                        handleChange={()=>{}}
                        label='Tipo de Trabajador'
                        value={formik.values.tipo_trabajador as string}
                    />
                </Grid>
                <Grid size={{xs: 12, sm: 6}} alignContent='center'>
                   
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                    <Button
                        variant="contained" 
                        color="primary" 
                        sx={{ml:0, mr:2}} 
                        fullWidth
                        onClick={()=>setEdit(true)} 
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
            <Grid container spacing={1} size={{xs: 12, md: 4}}>
            <Image 
                src={noImage.src} 
                style={{width:'100%', height:'100%', objectFit: 'contain'}} 
                alt='no image' 
                width={1000} 
                height={1000} 
                priority/>
            </Grid>
        </Grid>
    )
}
