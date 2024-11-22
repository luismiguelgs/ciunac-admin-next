import { firestore } from '@/lib/firebase';
import { collection, doc, updateDoc, serverTimestamp, addDoc, deleteDoc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { changeDate } from '@/lib/utils';
import { Iexamen, IexamenNotas } from '../interfaces/examen.interface';

export enum Collection{
    Examenes = 'examenes',
    Examenes_notas = 'notas_ubicacion'
}

export class ExamenesService
{
    // Funciones Generales *************************************
    private static db(collectionName: Collection){
        return collection(firestore, collectionName)
    }
    public static async newItem(collectionName:Collection, obj: Iexamen | IexamenNotas): Promise<string | undefined>
    {
        let data:Iexamen | IexamenNotas
        if('profesor' in obj){ //Examenes
            data = {
                ...obj,
                creado: serverTimestamp(),
                modificado: serverTimestamp()
            }
        }else{ //Examenes notas
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {id, ...newObj} = obj 
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
    public static async updateItem(collectionName: Collection, obj:Iexamen | IexamenNotas):Promise<void>
    {
        type UpdateDataType = Partial<Iexamen> & Partial<IexamenNotas> & { 
            modificado?: ReturnType<typeof serverTimestamp> 
        }
        let dataToUpdate:UpdateDataType
        if('profesor' in obj){ //Examenes
            dataToUpdate = {
                ...obj,
                modificado: serverTimestamp()
            }
        }else { //Examenes notas
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

    //Examenes - funciones ****************************************
    public static async fetchItems():Promise<Iexamen[]>{
        try{
            const snapShot = await getDocs(this.db(Collection.Examenes))
            const data = snapShot.docs.map((item)=>{
                return{
                    ...item.data(),
                    id: item.id,
                    fecha_examen: item.data().fecha_examen ? new Date(item.data().fecha_examen.seconds * 1000) : null,
                    fecha_final: item.data().fecha_final ? new Date(item.data().fecha_final.seconds * 1000) : null,
                    creado: item.data().creado ? changeDate(item.data().creado) : null,
                    modificado: item.data().modificado ? changeDate(item.data().modificado) : null
                } as Iexamen
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
    
    public static async selectItem(id:string):Promise<Iexamen | undefined>
    {
        const docRef = doc(firestore, Collection.Examenes, id)
        try{
            const snapShot = await getDoc(docRef)
            return {
                ...snapShot.data(),
                id: snapShot.id,
            } as Iexamen
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }
        }
    }
    public static async updateStatus(id:string, status:string):Promise<void>
    {
        try {
            const dataToUpdate = doc(firestore, Collection.Examenes, id);
            await updateDoc(dataToUpdate, {
                estado: status,
                modificado: serverTimestamp()
            });
            console.log('updateStatus');
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error al actualizar el elemento:', err.message);
            } else {
                console.error('Error desconocido al actualizar el elemento:', err);
            }    
        }
    }
    
    //Calificaciones Detalle - funciones ************************
    public static async fetchItemsDetail(itemId: string):Promise<IexamenNotas[]>{
        try{
            const q = query(this.db(Collection.Examenes_notas),where('examen_id','==',itemId))
            const snapShot = await getDocs(q)
            
            const data = snapShot.docs.map((item)=>{
                return{
                    ...item.data(),
                    id: item.id,
                } as IexamenNotas
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