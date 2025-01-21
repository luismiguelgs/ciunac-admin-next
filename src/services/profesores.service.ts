import { Iprofesor } from '@/interfaces/profesores.interface';
import { firestore } from '@/lib/firebase';
import { collection, doc, updateDoc, serverTimestamp, addDoc, deleteDoc, getDocs, getDoc, Timestamp} from 'firebase/firestore'

export default class ProfesoresService
{
    /*
    public static async fetchItems(): Promise<Iprofesor[]>
    {
        const res = await fetch('https://api.q10.com/v1/docentes?Limit=50', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Api-Key': process.env.API_KEY_Q10 || ''
            }
        })
        let data:Iprofesor[] = await res.json()
        data = data.filter((profesor:Iprofesor)=>Number(profesor.Telefono) > 0)
        return data
    }

    */
    private static dataCollection = 'profesores'
    private static db = collection(firestore, this.dataCollection)

    public static async fetchItems(): Promise<Iprofesor[]>{
        const snapShot = await getDocs(this.db)
        const data = snapShot.docs.map((item)=>{
            //console.log(item.data());
            
            const firebaseTimestamp: Timestamp = item.data().fecha_nacimiento
            return {
                ...item.data(), 
                id: item.id, 
                fecha_nacimiento: firebaseTimestamp.toDate().toISOString().split('T')[0], 
                creado: firebaseTimestamp.toDate(), 
                modificado: firebaseTimestamp.toDate() } as Iprofesor
        })
        return data
    }
    public static async getItem(id:string):Promise<Iprofesor>{
        const docRef = doc(firestore, this.dataCollection, id)
        const snapShot = await getDoc(docRef)

        return {
            ...snapShot.data(),
            id: snapShot.id
        } as Iprofesor
    }
    public static async newItem(obj:Iprofesor) :Promise<void | string>{ 
        //delete obj.isNew
        //delete obj.id
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id , isNew , fecha_nacimiento, ...rest } = obj
        
        let fechaTimestamp:Date | null = null
        if(fecha_nacimiento){
            const fecha = new Date(fecha_nacimiento)
            if(!isNaN(fecha.getTime())){
                fechaTimestamp = fecha
            }else{
                console.error('Fecha de nacimiento no válida')
                throw new Error('Fecha de nacimiento no válida')
            }
        }

        const data = {
            ...rest,
            fecha_nacimiento: fechaTimestamp,
            creado: serverTimestamp(),
            modificado: serverTimestamp()
        }

        let docRef = null
        try{
            docRef = await addDoc(this.db, data)
            console.log('Elemento creado correctamente', docRef.id)
            return docRef.id
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    public static async updateItem(obj: Iprofesor): Promise<void> {
        delete obj.isNew
        // Convertir las fechas en cadena a timestamps, si aplica
        const { fecha_nacimiento, ...rest } = obj;
        let fechaTimestamp: Date | null = null;        

        if (fecha_nacimiento) {
            const fecha = new Date(fecha_nacimiento);
            if (!isNaN(fecha.getTime())) {
                fechaTimestamp = fecha; // Es una fecha válida
            } else {
                console.error('La fecha proporcionada no es válida:', fecha_nacimiento);
                throw new Error('Fecha inválida');
            }
        }

        const dataToUpdate = doc(firestore, this.dataCollection, obj.id as string);
      
        try {
            await updateDoc(dataToUpdate, {
                ...rest,
                fecha_nacimiento: fechaTimestamp, // Solo agrega fecha si es válida
                modificado: serverTimestamp(),
            });
            console.log('Elemento actualizado correctamente');
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    public static async deleteItem(id:string | undefined) : Promise<void>{
        try{
            await deleteDoc(
                doc(firestore,this.dataCollection,id as string)
            );
            console.log('registro borrado', id)
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
}