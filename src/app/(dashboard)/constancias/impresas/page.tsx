'use client'
import React from 'react'
import useConstancias from '@/hooks/useConstancias'
import ConstanciasList from '../(components)/ConstanciasList'
import { Skeleton } from '@mui/material'

export default function ConstanciasPrintedPage() 
{
    const {data, setData} = useConstancias(true)

    const ConstanciasListSkeleton = () => {
        return (
            <div>
                <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" height={400} />
            </div>
        )
    }

    return (
        <React.Suspense fallback={<ConstanciasListSkeleton />}>
            <ConstanciasList rows={data} setRows={setData} printed={true} />
        </React.Suspense>
        
    )
}
