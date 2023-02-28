import { create } from 'zustand'

const useFavoriteStore = create((set) => ({
  value: [],
  add: (person) => set((state) => ({ value: [person, ...state.value] })),
  remove: (person) => set((state) => ({
    value: state.value.filter(p => p !== person)
  }))
}))

export default function useFavorites () {
  const favorites = useFavoriteStore((state) => state.value)
  const add = useFavoriteStore((state) => state.add)
  const remove = useFavoriteStore((state) => state.remove)

  const mutation = (person) => {
    if (!favorites.includes(person)) {
      return add(person)
    }
    remove(person)
  }

  return {
    favorites,
    mutation
  }
}
