'use client'
import React from 'react'
import { Icertificado } from '@/interfaces/certificado.interface'
import CertificadosService from '@/services/certificados.service'
import CertificateList from './(components)/CertificateList'


export default function CertificatesPage() 
{
	const [rows, setRows] = React.useState<Icertificado[]>([])
    const loadData = async () => {
        const data = await CertificadosService.fetchItems(false)
        setRows(data)
    }
    React.useEffect(()=> {
            loadData()
    },[])
    
    return (
        <CertificateList rows={rows} setRows={setRows} printed={false}/>
    )
}
