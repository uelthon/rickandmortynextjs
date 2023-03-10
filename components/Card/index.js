import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FavoritesToggle from './FavoritesToggle'

export default function Card ({ image, name, status, gender, id }) {
  return (
    <div className='card card-compact bg-base-100 shadow-xl'>
      <figure>
        <Image src={image} width={300} height={300} alt='Shoes' loading='lazy' />
      </figure>
      <div className='card-body'>
        <Link className='card-title' href={`/personaje/${id}`}>{name}</Link>
        <p>{gender}</p>
        <p>{status}</p>
        <div className='card-actions justify-end'>
          <FavoritesToggle person={id} />
        </div>
      </div>
    </div>
  )
}
