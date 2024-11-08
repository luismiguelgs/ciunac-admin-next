'use client';
import { MyDialog } from '@/components/MUI'
import MyDataGrid from '@/components/MUI/MyDataGrid';
import NewButton from '@/components/NewButton'
import useStore from '@/hooks/useStore';
import { Isolicitud } from '@/interfaces/solicitud.interface';
import { useSubjectsStore } from '@/store/types.stores';
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { GridColDef, GridRowId } from '@mui/x-data-grid';
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/navigation';
import SolicitudesService from '@/services/solicitudes.service';

export default function RequestsUbicationPage() 
{
	//Hooks *****************************************************************
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
	const navigate = useRouter()
	const [ open, setOpen ] = React.useState<boolean>(false)
	const [data, setData] = React.useState<Isolicitud[]>([])
	const [idToDelete, setIdToDelete] = React.useState<GridRowId | null>(null);

	React.useEffect(()=>{
        SolicitudesService.fetchItemQuery(setData, null, false)
    },[]);

	//Functions**************************************************************
    //Dialog
    const handleConfirmDelete = async () => {
        if (idToDelete) {
            await SolicitudesService.deleteItem(idToDelete as string);
            setData(data.filter((row) => row.id !== idToDelete));
            setIdToDelete(null);
            setOpen(false);
        }
    };
    const handleDetails = (id:GridRowId) => {
        navigate.push(`/solicitudes/ubicacion/${id}`)
    }
    const handleDelete = async (id:GridRowId) => {
        setIdToDelete(id)
        setOpen(true)
    }

	const columns: GridColDef[] = [
        {
            field: 'manual',
            type: 'boolean',
            headerName: '',
            renderCell(params) {
                if(params.value){
                    return <KeyboardIcon color="secondary"/>
                }else{
                    return <LanguageIcon color="primary"/>
                }
            },
        },
        { 
            field: 'estado', 
            headerName: 'ESTADO' ,
            width: 130,
            renderCell: (params) =>{
                switch(params.value){
                    case 'NUEVO':
                        return <Chip label={params.value} color="error" />
                    case 'ELABORADO':
                        return <Chip label='ASIGNADO' color="primary" />
                    default:
                        return <Chip label='TERMINADO' />
                }
                
            }
        },
        {
            field: 'creado',
            type: 'date',
            renderHeader:() => (
                <strong>
                    {'FECHA '}
                    <span role='img' aria-label='date'>
                        📆
                    </span>
                </strong>
            ) 
        },
        { field: 'apellidos', type: 'string', headerName: 'APELLIDOS', width:200 },
        { field: 'nombres', type: 'string', headerName: 'NOMBRES', width:200 },
        { 
            field: 'idioma', 
            type: 'singleSelect', 
            headerName: 'IDIOMA',
            valueOptions: subjects,
            editable: false,
            width: 150
        },
        { field: 'nivel', type: 'string', headerName: 'NIVEL'  },
    ]


    return (
      	<Grid container spacing={2}>
			<Grid size={{ xs: 12, sm:6}}>
				<NewButton text='Nueva Solicitud' url='/solicitudes/nuevo'/>
			</Grid>
			<Grid size={{ xs: 12, sm:6}} sx={{display:'flex', justifyContent:'flex-end'}}>
                <Box id='filter-panel' />
            </Grid>
			<Grid size={{ xs: 12, }} minHeight={300}>
				<MyDataGrid 
					data={data}
					cols={columns}
					handleDetails={handleDetails}
					handleDelete={handleDelete}
				/>
			</Grid>
			<MyDialog
                type='ALERT'
                title='Borrar Registro'
                content="Confirma borrar el registro?"
                open={open}
                setOpen={setOpen}
                actionFunc={handleConfirmDelete}
            /> 
		</Grid>
    )
}
