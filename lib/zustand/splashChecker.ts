import { create } from 'zustand'

type TState = {
  splashed: boolean
}

type TActions = {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

export const useSplashCheckerStore = create<TState & TActions>((set) => ({
  splashed: false,
  toggle: () => set((prev) => ({ splashed: !prev.splashed })),
  setTrue: () => set((prev) => ({ splashed: true })),
  setFalse: () => set((prev) => ({ splashed: false })),
}))
