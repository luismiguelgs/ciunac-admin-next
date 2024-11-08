import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface MyState {
  bears: number
  addABear: () => void
}

export const useBearStore = create<MyState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage', // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ bears: state.bears }),
    },
  ),
)