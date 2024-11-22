import RequestDetail from "./RequestDetail"

export default function RequestsCertificatesDetail({params}:{params:{id:string}}) 
{
	const id = params.id
	return <RequestDetail id={id} />		
}

