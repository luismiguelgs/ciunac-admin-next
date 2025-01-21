import { firestore } from '@/lib/firebase';
import { changeDate } from '@/lib/utils';
import { collection, doc, updateDoc, serverTimestamp, addDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore'

type IcronogramaExam = {
    id?: string;
    period: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    date: any;
    createAt: string;
    updateAt: string;
    isNew?: boolean;
}

export default class CronogramaExamService
{
    
    private static dataCollection = 'examenes/cronograma'
    private static db = collection(firestore, this.dataCollection)

    public static async getAll(): Promise<IcronogramaExam[]> 
    {
        try{
            const snapShot = await getDocs(this.db)
            const data = snapShot.docs.map((item)=>{
                return{
                    ...item.data(),
                    id: item.id,
                    date: item.data().date ? changeDate(item.data().date) : null,
                    createAt: item.data().createdAt ? changeDate(item.data().createdAt) : null,
                    updateAt: item.data().updatedAt ? changeDate(item.data().modificado) : null
                } as IcronogramaExam
            })
            return data
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al cargar elementos:', err.message);
            } else {
                console.error('Error desconocido al cargar elementos:', err);
            }
            throw err
        }
    }

    public static async getById(id: string): Promise<IcronogramaExam | null> 
    {
        try{
            const docRef = doc(firestore, this.dataCollection, id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return { ...docSnap.data(), id: docSnap.id } as IcronogramaExam;
            }
            return null;
        }
        catch(err){
            if (err instanceof Error) {
                console.error('Error al carga elemento:', err.message);
            } else {
                console.error('Error desconocido al carga elemento:', err);
            }
            throw err
        }
    }

    public static async create(obj: IcronogramaExam): Promise<void | string> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id , isNew , date, ...rest } = obj
        
        let fechaTimestamp:Date | null = null
        if(date){
            const fecha = new Date(date)
            if(!isNaN(fecha.getTime())){
                fechaTimestamp = fecha
            }else{
                console.error('Fecha no válida')
                throw new Error('Fecha no válida')
            }
        }

        const data = {
            ...rest,
            date: fechaTimestamp,
            createAt: serverTimestamp(),
            updateAt: serverTimestamp()
        }

        let docRef = null
        try{
            docRef = await addDoc(this.db, data)
            console.log('Elemento creado correctamente', docRef.id)
            return docRef.id
        }catch(err){
            if (err instanceof Error) {
                console.error('Error al crear elemento:', err.message);
            } else {
                console.error('Error desconocido al crear elemento:', err);
            }
        }
    }

    public static async update(id: string, obj: Partial<IcronogramaExam>): Promise<void> {
        delete obj.isNew
        // Convertir las fechas en cadena a timestamps, si aplica
        const { date, ...rest } = obj;
        let fechaTimestamp: Date | null = null;        

        if (date) {
            const fecha = new Date(date);
            if (!isNaN(fecha.getTime())) {
                fechaTimestamp = fecha; // Es una fecha válida
            } else {
                console.error('La fecha proporcionada no es válida:', date);
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

    public static async delete(id: string): Promise<void> {
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
