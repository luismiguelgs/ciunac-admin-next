'use client'
import React from 'react'
import { TextField, Paper,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { ITexto } from '@/interfaces/types.interface';
import TextosService from '@/services/textos.service';
import Grid from '@mui/material/Grid2'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function OptText() 
{
    const [data,setData] = React.useState<ITexto[]>([])
  const [editingItemId, setEditingItemId] = React.useState<string | undefined>(undefined)

  //get db data textos
  React.useEffect(()=>{
    TextosService.getItems(setData)
  },[])
 
  const handleClick = (item:ITexto) =>{
    TextosService.updateItem(item)
  }
  const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {id, value} = event.target
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, texto: value } : item
      )
    );
  }
    return (
        <React.Fragment>
            <Grid container spacing={2} sx={{mt:2}}>
            {
                data.map((item)=>(
                <Grid size={{xs: 12, md: 6}} key={item.id}>
                    <Item sx={{p:2}}>
                    <TextField
                        disabled={editingItemId !== item.id}
                        sx={{width:'95%', mb:1}}
                        id={item.id}
                        label={item.titulo}
                        name={item.titulo}
                        multiline
                        value={item.texto}
                        rows={6}
                        onChange={(e)=>handleChange(e)}
                        variant="outlined"
                    />
                    <Button 
                        sx={{mr:2}} 
                        disabled={editingItemId !== item.id} 
                        variant="outlined" 
                        onClick={()=>handleClick(item)}
                        startIcon={<SaveIcon />}
                    >
                        Guardar
                    </Button>
                    <Button 
                        disabled={editingItemId === item.id} 
                        variant="outlined" 
                        onClick={()=>setEditingItemId(item.id)} 
                        color='secondary' 
                        startIcon={<EditIcon />}
                    >
                        Editar
                    </Button>
                    </Item>
                </Grid>
                ))
            }
            </Grid>
        </React.Fragment>
    )
}
