'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
import NewButton from '@/components/NewButton'
import { Box, Checkbox, Chip } from '@mui/material'
import MyDataGrid from '@/components/MUI/MyDataGrid'
import { MyDialog } from '@/components/MUI'
import { GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid'
import { Icertificado } from '@/interfaces/certificado.interface'
import useStore from '@/hooks/useStore'
import { useSubjectsStore } from '@/store/types.stores'
import { useRouter } from 'next/navigation'
import CertificadosService, { Collection } from '@/services/certificados.service'
import { NIVEL } from '@/lib/constants'
import PrintIcon from '@mui/icons-material/Print';
import { PDFViewer } from '@react-pdf/renderer'
import CertificateFormat from './(formats)/CertificateFormat'
import dayjs from 'dayjs'

type Props = {
	rows: Icertificado[],
	setRows: React.Dispatch<React.SetStateAction<Icertificado[]>>
	printed: boolean
}

export default function CertificateList({rows, setRows, printed}:Props) 
{
	//Hooks ************************************************************
	const subjects = useStore(useSubjectsStore, (state) => state.subjects)
    const navigate = useRouter()
    const [ openDialog, setOpenDialog ] = React.useState<boolean>(false)
    const [ openPrint, setOpenPrint ] = React.useState<boolean>(false)
    const [ selectData, setSelectData ] = React.useState<Icertificado | undefined>()
    const [ID, setID] = React.useState<GridRowId | null>(null);

    
	//Funcions **********************************************************
    const handleCheckboxChange = async (id:GridRowId, checked:boolean) => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === id ? { ...row, impreso: checked } : row
            )
        );
        await CertificadosService.updateStatus(Collection.Certificados,id as string, checked)
    }
    const handleConfirmDelete = async () => {
        if (ID) {
            //borrar su detalle
            const data = await CertificadosService.fetchItemsDetail(ID as string)
            for(const element of data){
                await CertificadosService.deleteItem(Collection.CertificadosDetalle, element.id as string)
            }
            //borrar el item
            await CertificadosService.deleteItem(Collection.Certificados,ID as string);
            setRows(rows.filter((row) => row.id !== ID));
            setID(null);
            setOpenDialog(false);
        }
    };
    const handleDetails = (id:GridRowId) => {
        setID(id)
		if(printed){
			navigate.push(`./${id}`)
		}else{
			navigate.push(`./certificados/${id}`)
		}
    }
    const handleDelete = async (id:GridRowId) => {
        setID(id)
        setOpenDialog(true)
    }
    const handlePrint = async (id:GridRowId) => {
        const info = rows.find((row) => row.id === id)
        setSelectData(info)
        setOpenPrint(true)
        //alert(JSON.stringify(selectData))
    }
    
	//Columnas ***************
    const columns: GridColDef[] = [
        { field: 'numero_registro', headerName: 'N°REGISTRO', width: 150 },
        {
            field: 'tipo',
            headerName: 'MODALIDAD',
            width: 120,
            renderCell: (params) =>{
                switch(params.value){
                    case 'virtual':
                        return <Chip label='VIRTUAL' color="secondary" />
                    case 'fisico':
                        return <Chip label='FISICO' color="primary" />
                    default:
                        return <Chip label={params.value} />
                }
                
            }
        },
        { field: 'alumno', headerName: 'ALUMNO', width: 230 },
        { field: 'fecha_emision', headerName: 'FECHA EMISIÓN', type: 'date', width: 140 },
        { field: 'idioma', headerName: 'IDIOMA', type: 'singleSelect', valueOptions: subjects, width: 130 },
        { field: 'nivel', headerName: 'NIVEL', type: 'singleSelect', valueOptions: NIVEL, width:130},
        {
            field: 'impreso',
            headerName: 'IMPRESO',
            width: 100,
            renderCell: (params) => {
                return <Checkbox 
                    checked={params.value as boolean}
                    onChange={(e)=>{handleCheckboxChange(params.id as GridRowId, e.target.checked)}} 
                    inputProps={{'aria-label': 'Checkbox Impreso'}}
                />
            }
        }
    ]

	return (
		<Grid container spacing={2}>
			<Grid size={{xs: 12, md:6}}>
				<NewButton text="Nuevo Certificado" url='./certificados/nuevo'/>
			</Grid>
			<Grid size={{xs: 12, md:6}}>
				<Box id='filter-panel' />
			</Grid>
			<Grid size={{xs: 12}} minHeight={300}>
			{
				printed ? <MyDataGrid
					data={rows} 
					cols={columns}
					handleDetails={handleDetails}
					handleDelete={handleDelete}
				/> :
				<MyDataGrid
					data={rows}
					cols={columns}
					handleDetails={handleDetails}
					handleDelete={handleDelete}
                    extraActions={(id:GridRowId) => [
                        <GridActionsCellItem
                            key='print'
                            icon={<PrintIcon />}
                            label='Imprimir'
                            onClick={() => handlePrint(id)}
                        />
                    ]}
				/>
			}
			</Grid>
			<MyDialog 
				type='ALERT'
				title='Borrar Registro'
				content='¿Desea borrar el registro?'
				open={openDialog}
				setOpen={setOpenDialog}
				actionFunc={handleConfirmDelete}
			/>
            <MyDialog
                open={openPrint}
                type='SIMPLE'
                title='CERTIFICADO'
                setOpen={setOpenPrint}
                content={<>
                    <PDFViewer width={800} height={500}>
                        <CertificateFormat
                            duplicado={selectData?.duplicado as boolean}
                            curricula_antigua={selectData?.curricula_antigua as boolean}
                            certificado_anterior={selectData?.certificado_anterior}
                            id={selectData?.id as string}
                            formato={selectData?.idioma === 'INGLES' && selectData.nivel === 'BASICO' ? 1 : 0}
                            fecha_emision={dayjs(selectData?.fecha_emision).format('D [de] MMMM [de] YYYY' )}
                            fecha_conclusion={dayjs(selectData?.fecha_conclusion).format('D [de] MMMM [de] YYYY' )} 
                            idioma={subjects?.filter(item=>item.value === selectData?.idioma)[0]?.label}
                            nivel={NIVEL.filter(item=>item.value === selectData?.nivel)[0]?.label} 
                            url={`https://ciunac.unac.edu.pe/validacion-certificado/?url=${selectData?.id}`}
                            alumno={selectData?.alumno as string} 
                            horas={selectData?.horas as number}
                            elaborador={selectData?.elaborador}
                            numero_folio={selectData?.numero_registro as string}/>
                    </PDFViewer>
                </>}
            />
		</Grid>
	)
}
