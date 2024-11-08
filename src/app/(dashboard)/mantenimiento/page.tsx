import MyTabs, { PanelTab } from '@/components/MUI/MyTabs'
import { Box } from '@mui/material'
import React from 'react'
import ImgVouchers from './(components)/ImgVouchers'
import ImgTrabajador from './(components)/ImgTrabajador'
import SolEntregadas from './(components)/SolEntregadas'

export default function MaintenancePage() {
  const panels:PanelTab[] = [
    {
        label: "Imágenes de Vouchers",
        content: <ImgVouchers />
    },
    {
        label: 'Imágenes de Cert.Trabajador"',
        content: <ImgTrabajador />
    },
    {
        label: 'Solicitudes Entregadas',
        content: <SolEntregadas />
    },
]
return (
    <React.Fragment>
        <Box sx={{ width: '100%' }}>
            <MyTabs panels={panels} />
        </Box>
    </React.Fragment>
)
}
