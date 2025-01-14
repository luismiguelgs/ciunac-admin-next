'use client'

import MyDataGrid from '@/components/MUI/MyDataGrid'
import { Iprofesor } from '@/interfaces/profesores.interface'
import { GridColDef } from '@mui/x-data-grid'
import React from 'react'
import Face2Icon from '@mui/icons-material/Face2';
import Face6Icon from '@mui/icons-material/Face6';

const cols:GridColDef[] = [
    {field: 'Primer_nombre', headerName: 'PRIMER NOMBRE', editable:false, width: 150},
    {field: 'Segundo_nombre', headerName: 'SEGUNDO NOMBRE', editable: false, width:150},
    {field: 'Primer_apellido', headerName: 'PRIMER APELLIDO', editable: false, width:160},
    {field: 'Segundo_apellido', headerName: 'SEGUNDO APELLIDO', editable: false, width:160},
    {
        field: 'Genero', 
        headerName: 'GENERO', 
        editable: false, width:100,
        renderCell: (params) => {
            return params.value === 'F' ? (
                <Face2Icon style={{ color: 'pink' }} />
              ) : params.value === 'M' ? (
                <Face6Icon style={{ color: 'blue' }} />
              ) : null;
        }
    },
    {field: 'Celular', headerName: 'TELEFONO', editable: false, width:120},
    {field: 'Email', headerName: 'CORREO', editable: false, width:150},
    {
        field: 'Fecha_nacimiento', 
        headerName: 'FECHA NACIMIENTO',
        width: 120,
        renderCell: (params) => {
            return new Date(params.value).toLocaleDateString('es-ES',{
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
        }
    }
]


export default function Teachers({rows}:{rows:Iprofesor[]}) 
{
    const data = rows.map((row:Iprofesor)=>({
        ...row,
        id: row.Codigo,
    }))

    return (
        <MyDataGrid 
            data={data} 
            cols={cols} 
            handleDelete={()=>{}} 
            handleDetails={()=>{}}  />
    )
}
