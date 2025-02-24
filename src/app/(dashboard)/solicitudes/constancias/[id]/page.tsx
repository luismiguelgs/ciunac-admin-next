import RequestDetail from "./RequestDetail"

export default function RequestsConstanciasDetail({params}:{params:{id:string}}) 
{
    const id = params.id
    return <RequestDetail id={id} />		
}

