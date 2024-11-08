'use client'
import MyTabs, { PanelTab } from '@/components/MUI/MyTabs'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Classrooms from './(components)/Classrooms'
import Teachers from './(components)/Teachers'
import Qualifications from './(components)/Qualifications'

export default function UbicationConfigPage() {
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
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom>Configuración</Typography>
            <MyTabs panels={panels} />
        </Box>
    )
}
