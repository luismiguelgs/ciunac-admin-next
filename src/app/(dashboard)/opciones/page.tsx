import MyTabs, { PanelTab } from '@/components/MUI/MyTabs'
import { Box } from '@mui/material'
import React from 'react'
import OptText from './(components)/OptText'
import OptDocuments from './(components)/OptDocuments'
import OptSubjects from './(components)/OptSubjects'
import OptFaculties from './(components)/OptFaculties'

export default function OptionsPage() 
{
	const panels:PanelTab[] = [
        {
          label: 'Solicitudes',
          content: <OptDocuments />
        },
        {
          label: 'Textos',
          content: <OptText />
        },
        {
          label: 'Cursos',
          content: <OptSubjects />
        },
        {
          label: 'Facultades',
          content: <OptFaculties />
        }
    ]
	return (
		<React.Fragment>
            <Box sx={{ width: '100%' }}>
                <MyTabs panels={panels} />
            </Box>
        </React.Fragment>
	)
}
