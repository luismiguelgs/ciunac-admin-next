import RequestDetail from "@/modules/solicitud-becas/components/requestDetail"

export default function RequestsBecasDetail({params}:{params:{id:string}}) 
{
    const id = params.id
    return <RequestDetail id={id} />		
}

