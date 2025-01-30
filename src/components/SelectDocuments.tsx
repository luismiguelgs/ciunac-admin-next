'use client'
import React from 'react'
import { MySelect } from './MUI'
import useStore from '@/hooks/useStore'
import { useDocumentsStore } from '@/store/types.stores'
import { Collection, OpcionesService } from '@/services/opciones.service'
import { Skeleton } from '@mui/material'
import { Icertificado } from '@/interfaces/types.interface'

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean | undefined
    value: string | number
    disabled?: boolean
    helperText?: React.ReactNode
}

export default function SelectDocuments({handleChange, error, value, helperText, disabled}:Props) 
{
    const [data, setData] = React.useState<Icertificado[] | undefined>(useStore(useDocumentsStore, (state) => state.documents)); 

    React.useEffect(() => {
        const getData = async () => {
            const subs = await OpcionesService.fetchItems<Icertificado>(Collection.Certificados);    
            useDocumentsStore.getState().setDocuments(subs);
            setData(subs)
        } 
        if(!data){
            getData();
        }   
    },[]);

    if(!data){
        return (
            <Skeleton variant="rectangular" height={55} />
        )
    }
    return (
        data && (
            <MySelect 
            data={data}
            handleChange={handleChange}
            error={error}
            label='Tipo de solicitud'
            disabled={disabled}
            name='solicitud'
            value={value}
            helperText={helperText}
        />)
    )
}
