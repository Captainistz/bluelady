import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import fetchData from '../api/utils/fetch'

const Cocktails: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blue Lady Cocktails</title>
      </Head>

      <main className='flex min-h-screen flex-col items-center mt-4 py-2 font-display'>
        <div className='flex w-3/4 flex-1 flex-col px-20 items-center mt-16'>
          <h1 className='text-xl'>Available Cocktails :D</h1>
          <div className='w-full'>
            <div className='flex flex-wrap -mx-3 mt-16'>
              <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
                <div className='bg-white rounded-lg shadow-lg'>
                  <img
                    src='https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
                    alt=''
                    className='rounded-t-lg'
                  />
                  <div className='p-6'>
                    <h2 className='font-bold mb-2 text-xl'>Old fashioned</h2>
                    <p className=' mb-2'>
                      This is a little bit better of a card! asdasd asd as dsd as s &rarr;
                    </p>
                  </div>
                </div>

                <div className='bg-white rounded-lg shadow-lg'>
                  <img
                    src='https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
                    alt=''
                    className='rounded-t-lg '
                  />

                  <div className='p-6 flex flex-col justify-between'>
                    <h2 className='font-bold mb-2 text-xl'>Old fashioned</h2>
                    <p className=' mb-2'>This is a little bit better of a card! &rarr;</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cocktails
