import { Portal } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId, GridRowParams, GridToolbar, GridToolbarProps, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[],
    cols: GridColDef[],
    handleDetails(id:GridRowId): void
    handleDelete(id:GridRowId): void
}

export default function MyDataGrid({data, cols, handleDetails, handleDelete}:Props) 
{
    const MyCustomToolbar = (props: GridToolbarProps)=> {
        return(
            <React.Fragment>
                <Portal container={()=>document.getElementById('filter-panel')!}>
                    <GridToolbarQuickFilter />
                </Portal>
                <GridToolbar {...props} />
            </React.Fragment>
        )
    }

    const columns:GridColDef[] = [
        ...cols,
        { 
            field: 'actions', 
            type: 'actions', 
            getActions: (params:GridRowParams) => [
                <GridActionsCellItem 
                    key={1}
                    icon={<VisibilityIcon />}
                    label='Detalles'
                    onClick={()=>handleDetails(params.id)}
                />,
                <GridActionsCellItem 
                    key={2}
                    showInMenu
                    icon={<DeleteIcon />}
                    label='Borrar'
                    onClick={()=>handleDelete(params.id)}
                />
            ]
        }
    ]
    return (
        <DataGrid 
            pageSizeOptions={[10,25,100]}
            rows={data}
            columns={columns}
            disableColumnMenu
                    slots={{toolbar: MyCustomToolbar}}
                    initialState={{
                        filter:{
                            filterModel:{
                                items: [],
                                quickFilterExcludeHiddenColumns:true
                            }
                        }
                    }}
                    slotProps={{
                        columnsManagement:{
                            disableResetButton:true,
                            disableShowHideToggle: true
                        }
            }}
        />
    )
}
