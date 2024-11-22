import { Icalificacion, IcalificacionDetalle } from '@/interfaces/calificacion.interface';
import { firestore } from '@/lib/firebase';
import { collection, doc, updateDoc, serverTimestamp, addDoc, deleteDoc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { changeDate } from '@/lib/utils';

export enum Collection{
    Calificaciones = 'calificaciones',
    Calificaciones_Detalle = 'calificaciones_detalle'
}

export class CalificacionesService
{
    // Funciones Generales *************************************
    private static db(collectionName: Collection){
        return collection(firestore, collectionName)
    }
    public static async newItem(collectionName:Collection, obj: Icalificacion | IcalificacionDetalle): Promise<string | undefined>
    {
        type DataType = Partial<Icalificacion> & Partial<IcalificacionDetalle> & { 
            creado?: ReturnType<typeof serverTimestamp>;
            modificado?: ReturnType<typeof serverTimestamp>;
        }
        let data:DataType
        if('idioma' in obj){ //Calificaciones
            data = {
                ...obj,
                creado: serverTimestamp(),
                modificado: serverTimestamp()
            }
        }else{ //Calificaciones detalles
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {isNew, id, ...newObj} = obj 
            data = newObj
        }
        
        let docRef = null
        try{
            docRef = await addDoc(this.db(collectionName), data)
            return docRef.id
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    public static async updateItem(collectionName: Collection, obj:Icalificacion | IcalificacionDetalle):Promise<void>
    {
        type UpdateDataType = Partial<Icalificacion> & Partial<IcalificacionDetalle> & { 
            modificado?: ReturnType<typeof serverTimestamp> 
        }
        let dataToUpdate:UpdateDataType
        if('idioma' in obj){ //Calificaciones
            dataToUpdate = {
                ...obj,
                modificado: serverTimestamp()
            }
        }else { //Calificaciones Detalle
            dataToUpdate = obj
        }
                
        const docRef = doc(firestore, collectionName, obj.id as string)

        try{
            await updateDoc(docRef, dataToUpdate)
            console.log('update',docRef.id);
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    
    public static async deleteItem(collectionName: Collection, id:string)
    {
        try{
            await deleteDoc(doc(firestore, collectionName, id))
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }

    //Calificaciones - funciones ****************************************
    public static async fetchItems():Promise<Icalificacion[]>{
        try{
            const snapShot = await getDocs(this.db(Collection.Calificaciones))
            const data = snapShot.docs.map((item)=>{
                return{
                    ...item.data(),
                    id: item.id,
                    creado: item.data().creado ? changeDate(item.data().creado) : null,
                    modificado: item.data().modificado ? changeDate(item.data().modificado) : null
                } as Icalificacion
            })
            return data
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
            throw err
        }
    }
    
    public static async selectItem(id:string):Promise<Icalificacion | undefined>
    {
        const docRef = doc(firestore, Collection.Calificaciones, id)
        try{
            const snapShot = await getDoc(docRef)
            return {
                ...snapShot.data(),
                id: snapShot.id
            } as Icalificacion
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    
    //Calificaciones Detalle - funciones ************************
    public static async fetchItemsDetail(itemId: string):Promise<IcalificacionDetalle[]>{
        try{
            const q = query(this.db(Collection.Calificaciones_Detalle),where('id_calificacion','==',itemId))
            const snapShot = await getDocs(q)
            
            const data = snapShot.docs.map((item)=>{
                return{
                    ...item.data(),
                    id: item.id,
                } as IcalificacionDetalle
            })
            return data
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
            throw err
        }
    }
}