'use client'
import useStore from '@/hooks/useStore'
import { Collection, OpcionesService } from '@/services/opciones.service'
import { useFacultiesStore } from '@/store/types.stores'
import React from 'react'
import { MySelect } from './MUI'
import { Skeleton } from '@mui/material'
import { IBaseData } from '@/interfaces/types.interface'

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean | undefined
    value: string | number
    disabled?: boolean
    helperText?: React.ReactNode,
}
export default function SelectFaculty({handleChange, error, value, helperText, disabled}:Props) 
{
    const init = useStore(useFacultiesStore, (state) => state.faculties)
    const [data, setData] = React.useState<IBaseData[] | undefined>(init);

    React.useEffect(() => {
        const getData = async () => {
            const subs = await OpcionesService.fetchItems<IBaseData>(Collection.Facultades);
            useFacultiesStore.setState({ faculties: subs })
            setData(subs)
        }
        if(!data) getData()
    }, []);

    if(!data) return (<Skeleton variant='rectangular' height={55} sx={{mt:1}}/>)
    
    return (
        data && (
            <MySelect
                data={data}
                handleChange={handleChange}
                error={error}
                label='Facultad'
                name='facultad'
                value={value}
                
                disabled={disabled}
                helperText={helperText}
            />
        )
    )
}
