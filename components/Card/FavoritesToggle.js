import useFavorites from '@/stores/useFavorites'
import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export default function FavoritesToggle ({ person }) {
  const { favorites, mutation } = useFavorites()
  return (
    <button
      className='btn btn-primary'
      onClick={() => mutation(person)}
    >
      {favorites.includes(person)
        ? <AiFillHeart size='1.25rem' />
        : <AiOutlineHeart size='1.25rem' />}
    </button>
  )
}
