import { MenuItem, TextField } from '@mui/material'
import React from 'react'

type Props = {
    disabled?:boolean,
    name:string,
    handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void,
    label:string,
    value: string | number
    helperText?: React.ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data:any[],
    error?:boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sx?:any
}

export default function MySelect({disabled=false,name,handleChange,label, helperText='', data,value,error=false, sx={}}:Props) {
  return (
    <React.Fragment>
        <TextField
            select
            disabled={disabled}
            fullWidth
            onChange={e=>handleChange(e)}
            name={name}
            label={label}
            value={value || ''}
            helperText={helperText}
            error={error}
            sx={sx}
        >
        {
            data && data.map((option,index)=>(
                <MenuItem key={index} value={option.value}>
                    {option.label}
                </MenuItem>
            ))
        }
        </TextField>
    </React.Fragment>
  )
}
