'use client'
import React from "react";
import { MyDialog, MyTabs } from "@/components/MUI";
import DialogFull from "@/components/MUI/Dialogs/DialogFull";
import { GridRowId } from "@mui/x-data-grid";
import SolicitudesService from "@/services/solicitudes.service";
import RequestStage from "@/modules/solicitud-becas/components/requestStage";
import RequestDetail from "@/modules/solicitud-becas/components/requestDetail";

export default function BecasPage() 
{
    //const facultades = useStore(useFacultiesStore, (state) => state.faculties);
    const [ID, setID] = React.useState<string| undefined>(''); //Dialog
    const [openDialogDelete, setOpenDialogDelete] = React.useState<boolean>(false);
    const [openDialogFullDetail, setOpenDialogFullDetail] = React.useState<boolean>(false);

    //FUNCTIONS ***********************************************
    const handleDelete = (id:GridRowId) =>{
        setID(id as string)
        setOpenDialogDelete(true)
    }
    const handleDetails = (id:GridRowId) =>{
        setOpenDialogFullDetail(true)
        setID(id as string)
    }
    const deleteFunc = () => {
        SolicitudesService.deleteItem(ID)
        setOpenDialogDelete(false)
    }


    return (
        <React.Fragment>
            <MyTabs 
                panels={[
                    {
                        label: 'Nuevas',
                        content: <RequestStage 
                            state="NUEVO"
                            handleDelete={handleDelete}
                            handleDetails={handleDetails}
                        />,
                        
                    },
                    {
                        label: 'Aprobadas',
                        content: <RequestStage 
                            state="APROBADO"
                            handleDelete={handleDelete}
                            handleDetails={handleDetails}
                        />,
                    },
                    {
                        label: 'Rechazadas',
                        content: <RequestStage 
                            state="RECHAZADO"
                            handleDelete={handleDelete}
                            handleDetails={handleDetails}
                        />,
                    }
                ]}
            />
            <MyDialog
				type="ALERT"
				title="Borrar Registro"
				open={openDialogDelete}
				content='Confirma borrar el registro?'
				setOpen={setOpenDialogDelete}
				actionFunc={deleteFunc}
        	/>
            
            <DialogFull 
                open={openDialogFullDetail} 
                setOpen={setOpenDialogFullDetail}
                title="Detalle de Solicitud"
                content={<RequestDetail
                    id={ID as string} 
                />}
            />
        </React.Fragment>
    )
}
