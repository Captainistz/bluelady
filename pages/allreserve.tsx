import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import fetchData from './api/utils/fetch'

const AllReserve: NextPage = ({ reserves }: any) => {
  return (
    <div className='main-bg'>
      <Head>
        <title>Book your table</title>
      </Head>

      <main className='flex min-h-screen flex-col items-center justify-center py-2 font-display text-white'>
        {reserves && reserves.map((e) => <div key={e.id}>{e.name}</div>)}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const reserves = await fetchData({
    query: `{
    reserves {
      name
      id
    }
  }
  `,
  })
  return {
    props: {
      reserves: reserves['data']['reserves'],
    },
  }
}

export default AllReserve
