'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
import NewButton from '@/components/NewButton'
import { Box, Chip } from '@mui/material'
import MyDataGrid from '@/components/MUI/MyDataGrid'
import { MyDialog } from '@/components/MUI'
import { GridColDef, GridRowId } from '@mui/x-data-grid'
import { Icertificado } from '@/interfaces/certificado.interface'
import useStore from '@/hooks/useStore'
import { useSubjectsStore } from '@/store/types.stores'
import { useRouter } from 'next/navigation'
import CertificadosService, { Collection } from '@/services/certificados.service'
import { NIVEL } from '@/lib/constants'

export default function CertificatesPage() 
{
	//Hooks ************************************************************
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
    const navigate = useRouter()
    const [ openDialog, setOpenDialog ] = React.useState<boolean>(false)
    const [rows, setRows] = React.useState<Icertificado[]>([])
    const [ID, setID] = React.useState<GridRowId | null>(null);

    const loadData = async () =>{
        const data = await CertificadosService.fetchItems()
        setRows(data)
    }
    React.useEffect(()=> {
        loadData()
    },[])
	//Funcions **********************************************************
    const handleConfirmDelete = async () => {
        if (ID) {
            //borrar su detalle
            const data = await CertificadosService.fetchItemsDetail(ID as string)
            for(const element of data){
                await CertificadosService.deleteItem(Collection.CertificadosDetalle, element.id as string)
            }
            //borrar el item
            await CertificadosService.deleteItem(Collection.Certificados,ID as string);
            setRows(rows.filter((row) => row.id !== ID));
            setID(null);
            setOpenDialog(false);
        }
    };
    const handleDetails = (id:GridRowId) => {
        setID(id)
        navigate.push(`./certificados/${id}`)
    }
    const handleDelete = async (id:GridRowId) => {
        setID(id)
        setOpenDialog(true)
    }
    
	//Columnas ***************
    const columns: GridColDef[] = [
        { field: 'numero_registro', headerName: 'N°REGISTRO', width: 150 },
        {
            field: 'tipo',
            headerName: 'MODALIDAD',
            width: 150,
            renderCell: (params) =>{
                switch(params.value){
                    case 'virtual':
                        return <Chip label='VIRTUAL' color="error" />
                    case 'fisico':
                        return <Chip label='FISICO' color="primary" />
                    default:
                        return <Chip label={params.value} />
                }
                
            }
        },
        { field: 'alumno', headerName: 'ALUMNO', width: 230 },
        { field: 'fecha_emision', headerName: 'FECHA EMISIÓN', type: 'date', width: 150 },
        { field: 'idioma', headerName: 'IDIOMA', type: 'singleSelect', valueOptions: subjects, width: 150 },
        { field: 'nivel', headerName: 'NIVEL', type: 'singleSelect', valueOptions: NIVEL, width:150},
    ]

    return (
      	<Grid container spacing={2}>
			<Grid size={{xs: 12, md:6}}>
				<NewButton text="Nuevo Certificado" url='./certificados/nuevo'/>
			</Grid>
			<Grid size={{xs: 12, md:6}}>
				<Box id='filter-panel' />
			</Grid>
			<Grid size={{xs: 12}} minHeight={300}>
				<MyDataGrid
					data={rows}
					cols={columns}
					handleDetails={handleDetails}
					handleDelete={handleDelete}
				/>
			</Grid>
			<MyDialog 
				type='ALERT'
				title='Borrar Registro'
				content='¿Desea borrar el registro?'
				open={openDialog}
				setOpen={setOpenDialog}
				actionFunc={handleConfirmDelete}
			/>
		</Grid>
    )
}
