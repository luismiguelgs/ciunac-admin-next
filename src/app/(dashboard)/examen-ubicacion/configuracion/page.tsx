import MyTabs, { PanelTab } from '@/components/MUI/MyTabs'
import { Box } from '@mui/material'
import React from 'react'
import Classrooms from './(components)/Classrooms'
import Teachers from './(components)/Teachers'
import Qualifications from './(components)/Qualifications'
import Cronograma from './(components)/Cronograma'

export default async function UbicationConfigPage() 
{
	//const data = await loadData()

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
          content: <Teachers />
        },
        {
          label: 'Cronograma',
          content: <Cronograma />
        }
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <MyTabs panels={panels} />
        </Box>
    )
}
