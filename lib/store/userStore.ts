import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set:any, get:any) => ({
      coins: 0,
      token:"",
      setCoin: (a:number) => set({ coins: get().coins + a }),
      setToken: (a:string)=> set({token:a})
    }),
    {
      name: 'coin', // name of the item in the storage (must be unique)
  
    },
  ),
)