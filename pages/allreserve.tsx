import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const AllReserve: NextPage = () => {
  const [reserves, setReserves] = useState([])
  const router = useRouter()
  useEffect(() => {
    const fetchReserve = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + '/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `{
            reserves {
              name
              id
            }
          }
          `,
          }),
        })
        const data = await res.json()
        setReserves(data['data']['reserves'])
      } catch (e) {
        console.log(String(e))
      }
    }
    fetchReserve()
  }, [router.isReady])
  
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

export default AllReserve
