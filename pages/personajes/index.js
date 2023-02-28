import Head from 'next/head'
import React from 'react'

import Card from '@/components/Card'
import styles from './Person.module.css'
import BtnPage from '@/components/BtnPage'

export default function Personajes ({ data, pages, page }) {
  return (
    <>
      <Head>
        <title>Personajes</title>
      </Head>
      {data &&
        <div className='flex flex-col justify-start items-center gap-8'>
          <BtnPage page={page} total={pages} />
          <div className={styles.container}>
            {data.map(e =>
              <Card
                key={e.id}
                gender={e.gender}
                image={e.image}
                name={e.name}
                status={e.status}
                id={e.id}
              />
            )}
          </div>
        </div>}
    </>
  )
}

export async function getServerSideProps (context) {
  const page = context.query.page || 1
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await res.json()
    return {
      props: {
        data: data.results,
        pages: data.info.pages,
        page
      }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
