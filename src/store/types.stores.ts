import { IBaseData, Icertificado } from '@/interfaces/types.interface'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DocsState {
  documents: Icertificado[]
  setDocuments: (docs:Icertificado[]) => void
}

export const useDocumentsStore = create<DocsState>()(
  persist(
    (set) => ({
      documents: [],
      setDocuments: (docs) => set({ documents: docs }),//set({ bears: get().bears + 1 }),
    }),
    {
      name: 'documents-storage', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ documents: state.documents }),
    },
  ),
)

interface FacusState {
    faculties: IBaseData[]
    setFaculties: (docs:IBaseData[]) => void
  }
  
  export const useFacultiesStore = create<FacusState>()(
    persist(
      (set) => ({
        faculties: [],
        setFaculties: (facus) => set({ faculties: facus }),//set({ bears: get().bears + 1 }),
      }),
      {
        name: 'faculties-storage', // name of item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
        partialize: (state) => ({ documents: state.faculties }),
      },
    ),
)
interface SubjectsState {
    subjects: IBaseData[]
    setSubjects: (subs:IBaseData[]) => void
}
  
  export const useSubjectsStore = create<SubjectsState>()(
    persist(
      (set) => ({
        subjects: [],
        setSubjects: (subs) => set({ subjects: subs }),
      }),
      {
        name: 'faculties-storage', // name of item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
        partialize: (state) => ({ documents: state.subjects }),
      },
    ),
)