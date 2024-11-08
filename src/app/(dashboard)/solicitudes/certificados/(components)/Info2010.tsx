import DataTable, { Column } from '@/components/MUI/DataTable';
import I2010 from '@/interfaces/i2010.interface';
import React from 'react'
import { collection, onSnapshot, query, where} from 'firebase/firestore';
import { firestore } from '@/lib/firebase';


const columns: Column[] = [
    { id: 'anno', label: 'Año', minWidth: 60 },
    { id: 'ciclo', label: 'Ciclo', minWidth: 60 },
    { id: 'mes', label: 'Mes', minWidth: 50, align: 'right' },
    { id: 'profesor', label: 'Profesor', minWidth: 90, align: 'right' },
];


export default function Info2010(props:{id:string}) 
{
    const [data, setData] = React.useState<I2010[]>([])
    const collectionRef = collection(firestore,'solicitudes_2010')
    const itemQuery = query(collectionRef, where('documento',"==",props.id))
    
    React.useEffect(() => {
        onSnapshot(itemQuery, (snapshot) => {
            setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as I2010)))
        })
    }, [props.id])

    return (
        <React.Fragment>
            {
                data && <DataTable
                    rows={data}
                    columns={columns}
                    action={false}
                />
            }
        </React.Fragment>
    )
}
