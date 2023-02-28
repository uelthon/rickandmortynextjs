import Link from 'next/link'
import React from 'react'
import { BiFirstPage, BiLastPage } from 'react-icons/bi'

export default function BtnPage ({ page = 1, total = 42 }) {
  page = Number(page)
  return (
    <div className='btn-group'>
      <Link
        className='btn'
        href='/personajes?page=1'
      >
        <BiFirstPage size='1.25rem' />
      </Link>
      <Link
        className='btn btn-disabled'
        href='/'
      >
        ...
      </Link>
      <Link
        className={`btn ${page - 2 < 1 && 'hidden'}`}
        href={`/personajes?page=${page - 2}`}
      >
        {page - 2}
      </Link>
      <Link
        className={`btn ${page < 2 && 'hidden'}`}
        href={`/personajes?page=${page - 1}`}
      >
        {page - 1}
      </Link>
      <Link
        className='btn  btn-active'
        href={`/personajes?page=${page}`}
      >
        {page}
      </Link>
      <Link
        className={`btn ${page === total && 'hidden'}`}
        href={`/personajes?page=${page + 1}`}
      >
        {page + 1}
      </Link>
      <Link
        className={`btn ${page + 2 > total && 'hidden'}`}
        href={`/personajes?page=${page + 2}`}
      >
        {page + 2}
      </Link>
      <Link
        className='btn btn-disabled' href='/'
      >
        ...
      </Link>
      <Link className='btn' href={`/personajes?page=${total}`}><BiLastPage size='1.25rem' /></Link>
    </div>
  )
}
