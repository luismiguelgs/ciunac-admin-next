'use client'
import { MySelect } from '@/components/MUI'
import useStore from '@/hooks/useStore'
import { Isolicitud } from '@/interfaces/solicitud.interface'
import { useDocumentsStore } from '@/store/types.stores'
import { InputAdornment, TextField } from '@mui/material'
import  Grid  from '@mui/material/Grid2'
import React from 'react'
import pdfLogo from '@/assets/pdf.png'
import Link from 'next/link'

type Props={
    item:Isolicitud
    handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void
    edit:boolean,
}

export default function FinInfo({item, handleChange, edit}:Props) 
{
    //HOOKS **************************************************
    const documents = useStore(useDocumentsStore, (state) => state.documents)

    const archivo = item.voucher?.split('?')[0].slice(-3);

    if (item.creado && item.creado.seconds) {
        const fechaC = new Date(item.creado.seconds * 1000 + (item.creado.nanoseconds || 0) / 1e6);
        item.creado = fechaC.toISOString().split('T')[0]
    }

    if (item.modificado && item.modificado.seconds) {
        const fechaM = new Date(item.modificado.seconds * 1000 + (item.modificado.nanoseconds || 0) / 1e6);
        item.modificado = fechaM.toLocaleString()
    }

    console.log(item)

    return (
        <Grid container spacing={2} p={2}>
            <Grid size={{xs: 12, md: 6}}>
                <Grid size={{xs: 12}}>
                { documents && <MySelect
                        name='solicitud'
                        disabled={!edit}
                        sx={{mb:2}}
                        label='Tipo de Solicitud'
                        handleChange={handleChange}
                        value={item.solicitud as string}
                        data={documents}
                />}
                </Grid>
                <Grid size={{xs: 12}}>
                    <MySelect 
                        data={[{value:'DOCENTE',label:'DOCENTE Y FAMILIARES'},{value:'ADMINISTRATIVO',label:'ADMINISTRATIVO CAS/NOMBRADO'}]}
                        name='tipo_trabajador'
                        sx={{mb:2}}
                        disabled={!edit}
                        label='Tipo de Trabajador'
                        value={item.tipo_trabajador as string}
                        handleChange={handleChange}
                        
                    />
                </Grid>
                <Grid size={{xs: 12}}>
                    <TextField
                        required
                        disabled={!edit}
                        sx={{ mb:2}}
                        fullWidth
                        error={false}
                        value={item?.numero_voucher}
                        onChange={e=>handleChange(e)}
                        name="numero_voucher"
                        label="Número de voucher"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Campo requerido, mínimo 8 dígitos"}
                    />
                </Grid>
                <Grid size={{xs: 12}}>
                    <TextField
                        type='number'
                        sx={{mb:2}}
                        required
                        disabled={!edit}
                        fullWidth
                        error={false}
                        label='Monto pagado'
                        value={item?.pago}
                        slotProps={{input:{startAdornment: <InputAdornment position="start">S/</InputAdornment>,}}}
                        onChange={e=>handleChange(e)}
                        name="pago"
                        helperText={false && "Ingrese monto válido"}
                    />
                </Grid>
                <Grid size={{xs: 12}}>
                    <TextField
                        type='date'
                        sx={{mb:2}}
                        fullWidth
                        required
                        disabled={!edit}
                        error={false}
                        label='Fecha de pago'
                        value={item?.fecha_pago}
                        onChange={e=>handleChange(e)}
                        name="fecha"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Ingrese la fecha de pago válida"}
                    />
                </Grid>
                <Grid size={{xs: 12}}>
                    <TextField
                        variant="standard"
                        type='date'
                        sx={{mb:2 }}
                        fullWidth
                        required
                        disabled={true}
                        error={false}
                        label='Fecha creado'
                        value={item?.creado}
                        onChange={e=>handleChange(e)}
                        name="creado"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Ingrese la fecha válida"}
                    />
                </Grid>
                <Grid size={{xs: 12}}>
                    <TextField
                        variant="standard"
                        sx={{mb:2, }}
                        fullWidth
                        disabled={true}
                        error={false}
                        label='Fecha modificado'
                        value={item?.modificado}
                        onChange={e=>handleChange(e)}
                        name="modificado"
                        slotProps={{ inputLabel: { shrink: true, } }}
                        helperText={false && "Ingrese la fecha de pago válida"}
                    />
                </Grid>
                <Grid size={{xs: 12, }}>
                {   item.voucher !== '' ?
                        (<Link href={item?.voucher as string || ''} style={{textDecoration:'underline'}} target='_blank' rel="noopener">VER VOUCHER</Link>) 
                    :null
                }
                </Grid>
            </Grid>
           
            <Grid size={{xs: 12, md: 6}}>
                {
                    archivo === 'pdf' || item.voucher ? 
                        (<img src={pdfLogo.src} width={290} style={{margin:'0 auto', display:'block'}}/>) : 
                        (<img src={item.voucher} width={290} style={{margin:'0 auto', display:'block'}}/>)
                }
            </Grid>
        </Grid>
    )
}
