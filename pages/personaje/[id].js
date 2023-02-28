import Head from 'next/head'
import React from 'react'

export default function Personaje ({ data }) {
  return (
    <>
      <Head>
        <title>Personaje - {data.name}</title>
      </Head>
      {data &&
        <div className='flex flex-col justify-start items-center'>
          <img src={data.image} />
        </div>}
    </>
  )
}

export async function getServerSideProps (context) {
  const id = context.params.id
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()

    return {
      props: {
        data
      }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
