'use client'
import React from 'react'
import { MySelect } from './MUI'
import useStore from '@/hooks/useStore'
import { useSubjectsStore } from '@/store/types.stores'
import { Collection, OpcionesService } from '@/services/opciones.service'
import { IBaseData } from '@/interfaces/types.interface'
import { Skeleton } from '@mui/material'

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean | undefined
    value: string | number
    disabled?: boolean
    helperText: React.ReactNode
}

export default function SelectSubjects({handleChange, error, value, helperText, disabled}:Props) 
{
    const [data, setData] = React.useState<IBaseData[] | undefined>(useStore(useSubjectsStore, (state) => state.subjects)); 

    React.useEffect(() => {
        const getData = async () => {
            const subs = await OpcionesService.fetchItems<IBaseData>(Collection.Cursos);    
            useSubjectsStore.getState().setSubjects(subs);
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
            label='Idioma'
            disabled={disabled}
            name='idioma'
            value={value}
            helperText={helperText}
        />)
    )
}
