import { Button } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';

type Props = {
    fullWidth?:boolean;
    onClick?:()=>void
}

export default function ButtonSave({fullWidth=false, onClick}:Props) {
    return (
        <Button
            fullWidth={fullWidth}
            onClick={onClick}
            variant="contained" 
            color="success" 
            startIcon={<SaveIcon />}>
                Guardar
        </Button>
    )
}
