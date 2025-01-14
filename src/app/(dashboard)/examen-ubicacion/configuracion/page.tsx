
import MyTabs, { PanelTab } from '@/components/MUI/MyTabs'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Classrooms from './(components)/Classrooms'
import Teachers from './(components)/Teachers'
import Qualifications from './(components)/Qualifications'
import { Iprofesor } from '@/interfaces/profesores.interface'
import ProfesoresService from '@/services/profesores.service'

async function loadData():Promise<Iprofesor[]> {
	return await ProfesoresService.fetchItems()
}

export default async function UbicationConfigPage() 
{
	const data = await loadData()

    const panels:PanelTab[] = [
        {
          label: 'Salas de Examen',
          content: <Classrooms />
        },
        {
          label: 'Calificaciones',
          content: <Qualifications />
        },
        {
          label: 'Profesores',
          content: <Teachers rows={data}/>
        },
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom>Configuración</Typography>
            <MyTabs panels={panels} />
        </Box>
    )
}
