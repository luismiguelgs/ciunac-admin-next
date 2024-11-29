'use client'
import { Isolicitud } from '@/interfaces/solicitud.interface';
import SolicitudesService from '@/services/solicitudes.service';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import useStore from '@/hooks/useStore';
import { useSubjectsStore } from '@/store/types.stores';

type Props = {
    setRequest: React.Dispatch<React.SetStateAction<Isolicitud | undefined>>,
    setReload: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenDialogFull : React.Dispatch<React.SetStateAction<boolean>>
}

export default function RequestList({setOpenDialogFull, setRequest, setReload}:Props) 
{
    const [data, setData] = React.useState<Isolicitud[]>([]);
    const [selectionModel, setSelectionModel] = React.useState<GridRowSelectionModel>([]);

    React.useEffect(() => {
        SolicitudesService.fetchItemQuery(setData, 'NUEVO', true)
    }, []);

    const handleSaveSelection = async() => {
        const selectedItems = data.filter(item => selectionModel.includes(item.id as string));
        console.log('Selected Items:', selectedItems);
        setRequest(selectedItems[0])
        setReload((oldValue)=> !oldValue)
        //SolicitudesService.updateStatus(selectedItems[0].id as string, 'ASIGNADO')
        setOpenDialogFull(false)
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
            field: 'periodo',
            headerName: 'PERIODO',
            type: 'string',
            width: 100
        },
        {
            field: 'creado',
            type: 'string',
            width: 200,
            renderHeader:() => (
                <strong>
                    {'FECHA '}
                    <span role='img' aria-label='date'>
                        📆
                    </span>
                </strong>
            ) 
        },
        { field: 'apellidos', type: 'string', headerName: 'APELLIDOS', width:250 },
        { field: 'nombres', type: 'string', headerName: 'NOMBRES', width:250 },
        { 
            field: 'idioma', 
            type: 'singleSelect', 
            headerName: 'IDIOMA',
            valueOptions: useStore(useSubjectsStore, (state) => state.subjects),
            editable: false,
            width: 150
        },
        { field: 'nivel', type: 'string', headerName: 'NIVEL', width:160  },
    ];
    
    return (
        <React.Fragment>
            <Box p={2}>
                <Box p={2} style={{ minHeight: 400, width: '100%' }}>
                        <DataGrid
                            rowHeight={25}
                            rows={data}
                            slots={{
                                toolbar: GridToolbar,}}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 25,
                                    },
                                }
                            }}
                            pageSizeOptions={[10, 25, 50,100]}
                            rowSelection={true}
                            onRowSelectionModelChange={(newSelectionModel) => {
                                setSelectionModel(newSelectionModel);
                            }}
                            rowSelectionModel={selectionModel}
                            slotProps={{
                                columnsManagement: {
                                    disableResetButton: true,
                                    disableShowHideToggle: true,
                                }
                            }}
                        />
                </Box>
                <Button variant="contained" color="primary" onClick={handleSaveSelection}>
                    Asignar Solicitud
                </Button>
            </Box>
        </React.Fragment>
    )
}
