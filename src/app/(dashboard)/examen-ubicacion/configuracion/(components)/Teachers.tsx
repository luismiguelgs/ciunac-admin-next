'use client'
import { GridColDef, GridRowId, GridRowModel, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import { Iprofesor } from '@/interfaces/profesores.interface'
import React from 'react'
import Face2Icon from '@mui/icons-material/Face2';
import Face6Icon from '@mui/icons-material/Face6';
import ProfesoresService from '@/services/profesores.service'
import NewButton from '@/components/NewButton'
import { MyDialog } from '@/components/MUI';
import EditableDataGrid from '@/components/MUI/EditableDataGrid';

const cols:GridColDef[] = [
    {field: 'nombres', headerName: 'NOMBRES', editable:true, width: 150},
    {field: 'apellidos', headerName: 'APELLIDOS', editable: true, width:150},
    {
        field: 'genero', 
        headerName: 'GENERO', 
        editable: true, width:100,
        renderCell: (params) => {
            return params.value === 'F' ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop:10 }}><Face2Icon style={{ color: 'pink' }} /></div>
              ) : params.value === 'M' ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop:10 }}><Face6Icon style={{ color: 'blue' }} /></div>
              ) : null;
        }
    },
    {field: 'telefono', headerName: 'TELEFONO', editable: true, width:120},
    {field: 'email', headerName: 'CORREO', editable: true, width:160},
    {
        field: 'fecha_nacimiento', 
        editable: true,
        headerName: 'FECHA NACIMIENTO',
        width: 150,
        renderCell: (params) => {
            return new Date(params.value).toLocaleDateString('es-ES',{
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
        }
    }
]

export default function Teachers() 
{
    const [rows, setRows] = React.useState<Iprofesor[]>([])
    const [ openDialog, setOpenDialog ] = React.useState<boolean>(false)
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
    const [idToDelete, setIdToDelete] = React.useState<GridRowId | null>(null);

    React.useEffect(()=>{
        const fetchData = async () => {
            const data = await ProfesoresService.fetchItems()
            setRows(data)
        }
        fetchData()
    },[])

    //dialog ***
    const handleConfirmDelete = async () => {
        if (idToDelete) {
            await ProfesoresService.deleteItem(idToDelete as string)
            setRows(rows.filter((row) => row.id !== idToDelete));
            setIdToDelete(null);
            setOpenDialog(false);
        }
    }; 
    //datagrid ***
    const handleDeleteClick = (id: GridRowId) => () => {    
        setIdToDelete(id)
        setOpenDialog(true)
    };
    const processRowUpdate = async(newRow: GridRowModel) => {
        //New or Update in DB
        let id:string | undefined | void
        if(newRow.isNew){
            id = await ProfesoresService.newItem(newRow as Iprofesor)
        }else{
            await ProfesoresService.updateItem(newRow as Iprofesor)
        }
        console.log(newRow);
        
        const updatedRow:Iprofesor = {
            id:newRow.isNew ? id : newRow.id, 
            nombres: newRow.nombres,
            apellidos: newRow.apellidos,
            genero: newRow.genero,
            email: newRow.email,
            telefono: newRow.telefono,
            fecha_nacimiento: new Date(newRow.fecha_nacimiento),
            isNew: false 
        };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };
    const handleNewClick = () => {
        const id = Math.floor(Math.random()*100).toString();
        setRows((oldRows) => [...oldRows, {
            id, 
            nombres: '', 
            apellidos: '', 
            genero: 'M', 
            email: '',
            telefono: '',
            fecha_nacimiento: '',
            isNew: true 
        }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'nombres' },
        }));
    }

    return (
        <React.Fragment>
            <NewButton text='Nuevo Profesor' link={false} onClick={handleNewClick} />
            <EditableDataGrid 
                columns={cols}
                rows={rows}
                setRows={setRows}
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                handleDeleteClick={handleDeleteClick}
                processRowUpdate={processRowUpdate}
            />
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
