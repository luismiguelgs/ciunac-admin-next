'use client'
import { MyDialog } from '@/components/MUI'
import EditableDataGrid from '@/components/MUI/EditableDataGrid'
import NewButton from '@/components/NewButton'
import useCronogramas from '@/hooks/useCronogramas'
import IcronogramaExam from '@/interfaces/cronogramaExam.interface'
import { obtenerPeriodo } from '@/lib/utils'
import CronogramaExamService from '@/services/cronogramaExam.service'
import { Box, Checkbox } from '@mui/material'
import { GridColDef, GridRowId, GridRowModel, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import React from 'react'


export default function Cronograma() 
{
    const [ openDialog, setOpenDialog ] = React.useState<boolean>(false)
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    const [idToDelete, setIdToDelete] = React.useState<GridRowId | null>(null);

    const {data, loading, setData} = useCronogramas();


    //dialog ***
    const handleConfirmDelete = async () => {
        if (idToDelete) {
            await CronogramaExamService.delete(idToDelete as string)
            setData(data.filter((row) => row.id !== idToDelete));
            setIdToDelete(null);
            setOpenDialog(false);
        }
    }; 

    //datagrid ***
    const handleDeleteClick = (id: GridRowId) => () => {    
        setIdToDelete(id)
        setOpenDialog(true)
    };

    const handleNewClick = () => {
        const id = Math.floor(Math.random()*100).toString();
        setData((oldRows) => [...oldRows, { id, period: obtenerPeriodo(), date: new Date(), createAt: '', updateAt: '', isNew: true, active: false }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'period' },
        }));
    }
    const processRowUpdate = async(newRow: GridRowModel) => {
            //New or Update in DB
            let id:string | undefined
            if(newRow.isNew){
                id = await CronogramaExamService.create(newRow as IcronogramaExam)
            }else{
                CronogramaExamService.update(newRow.id as string, newRow as IcronogramaExam)
            }
            const updatedRow:IcronogramaExam = {
                id:newRow.isNew ? id : newRow.id, 
                period:newRow.period, 
                date:newRow.date,
                createAt:new Date(newRow.createAt),
                updateAt:newRow.updateAt,
                active:newRow.active,
                isNew: false 
            };
            setData(data.map((row) => (row.id === newRow.id ? updatedRow : row)));
            return updatedRow;
    };

    const handleCheckboxChange = async (id:GridRowId, checked:boolean) => {
            setData((prevRows) =>
                prevRows.map((row) =>
                    row.id === id ? { ...row, active: checked } : row
                )
            );
            await CronogramaExamService.updateStatus(id as string, checked)
        }

    const cols:GridColDef[] = [
        {field: 'period',  headerName: 'PERIODO', editable: true, width:150},
        {
            field: 'date',  
            type: 'date', 
            headerName: 'FECHA DEL EXAMEN', 
            editable: true, 
            width:170,
            renderCell: (params) => {
                return new Date(params.value).toLocaleDateString('es-ES',{
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })
            }
        },
        {
            field: 'active',
            headerName: 'ACTIVO',
            editable: true,
            type: 'boolean',
            width: 100,
            renderCell: (params) => {
                return <Checkbox 
                    checked={params.value as boolean || false}
                    onChange={(e)=>{handleCheckboxChange(params.id as GridRowId, e.target.checked)}} 
                    inputProps={{'aria-label': 'Checkbox Activo'}}
                />
            }
        },
        {field: 'createAt', type:'string', headerName: 'CREADO', editable:false, width:160},
        {field: 'updateAt', type:'string', headerName: 'MODIFICADO', editable:false, width:160},
    ]

    return (
        <React.Fragment>
            <NewButton text='Nuevo Cronograma' onClick={handleNewClick} link={false}/>
            <Box sx={{ width: '100%' , mt:2}}>    
                {!loading && <EditableDataGrid 
                    columns={cols}
                    rows={data}
                    setRows={setData}
                    rowModesModel={rowModesModel}
                    setRowModesModel={setRowModesModel}
                    handleDeleteClick={handleDeleteClick}
                    processRowUpdate={processRowUpdate}
                />}         
            </Box>
            <MyDialog 
                type='ALERT'
                title='Borrar Registro'
                content="Confirma borrar el registro?"
                open={openDialog}
                setOpen={setOpenDialog}
                actionFunc={handleConfirmDelete} 
            />
        </React.Fragment>
    )
}
