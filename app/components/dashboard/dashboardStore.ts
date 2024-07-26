import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set:any, get:any) => ({
      coins: 0,
      setCoin: (a:any) => set({ coins: get().coins + a }),
    }),
    {
      name: 'coin_key',
      storage: createJSONStorage(() => sessionStorage)
    },
  ),
)