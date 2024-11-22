'use client'
import React from 'react'
import { MyAccordion, MyDialog, MySnackBar } from '@/components/MUI'
import SolicitudesService from '@/services/solicitudes.service'
import Grid from '@mui/material/Grid2'
import { Button } from '@mui/material'
import { PanelData } from '@/components/MUI/MyAccordion'
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import { Isolicitud } from '@/interfaces/solicitud.interface'
import BasicInfo from '../(components)/BasicInfo'
import FinInfo from '../(components)/FinInfo'
import Info2010 from '../(components)/Info2010'
import BackButton from '@/components/BackButton'

export default function RequestDetail(props:{id:string}) 
{
    const {id} = props
    //Hooks *************************************************
    const [openS, setOpenS] = React.useState(false); 
	const [openD, setOpenD] = React.useState<boolean>(false);
	const [edit, setEdit] = React.useState<boolean>(false)

	//datos de solicitud
    const [item, setItem] = React.useState<Isolicitud>({id:'', solicitud:'', antiguo:false, apellidos:'', nombres:'', celular:'', certificado_trabajo:'', codigo:'', 
        dni:'', email:'', idioma:'', nivel:'', numero_voucher:'',facultad:'', fecha_pago:'', timestamp:'', trabajador:false, voucher:'', estado:'', pago:'', periodo: ''})
    
	React.useEffect(()=>{
		const getItem = async(id :string) =>{
			const solicitud = await SolicitudesService.getItem(id as string) as Isolicitud
			setItem(solicitud)
		}
		getItem(id as string)
	},[])

	//Functions *************************************************
	const saveItem = ():void => {
		SolicitudesService.updateItem(item)
		setEdit(false)
		setOpenD(false)
	}	
	const handleClickEdit = () =>{
        setEdit(true)
    }
	const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target
        setItem((prevFormData)=>({...prevFormData, [name]:value}))
    }
	const handleClickSave = () =>{
		/*
        if(validateForm(item)){
             setOpenD(true)
        }else{
            setOpenS(true)
        }
		*/
    }
	
	const panels:PanelData[] = [
        {
            title: 'Información de Alumno',
            content: <BasicInfo item={item} handleChange={handleChange} edit={edit} />,
            disabled: false
        },
        {
            title: 'Información de solicitud',
            content: <FinInfo item={item} handleChange={handleChange} edit={edit} />,
            disabled: false
        },
        {
            title: 'Información de trabajador',
            content: <img src={item?.certificado_trabajo} width={280}/>,
            disabled: !item.trabajador
        },
        {
            title: 'Información de cursos anteriores al 2009',
            content: <Info2010 id={item.id as string}/>,
            disabled: !item.antiguo
        }
    ]
	return (
		<React.Fragment>
			<Grid container spacing={2} p={2}>
				<Grid size={{xs: 12}}>
					<MyAccordion panels={panels} />
				</Grid>
				<Grid size={{xs: 12}}>
					<BackButton />
					<Button 
						variant="contained" 
						color="primary" 
						sx={{ml:2}} 
						onClick={handleClickEdit} 
						endIcon={<EditNoteIcon />}
						disabled={edit}>
						Editar
                	</Button>
					<Button 
						variant="contained" 
						color="success" 
						onClick={handleClickSave}
						sx={{ml:2}} 
						endIcon={<SaveIcon />}
						disabled={!edit}>
						Guardar
					</Button>
				</Grid>
			</Grid>
			<MySnackBar open={openS} setOpen={setOpenS} content='Verificar que todos los datos esten ingresados' />
			<MyDialog
				type='ALERT' 
				title='Guardar Registro' 
				content='¿Confirma guardar los datos actuales?' 
				open={openD} 
				setOpen={setOpenD} 
				actionFunc={saveItem} />
		</React.Fragment>
	)
}
