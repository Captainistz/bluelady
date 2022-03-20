import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div className='main-bg'>
      <div className='flex min-h-screen flex-col items-center justify-center py-2 font-display'>
        <Head>
          <title>Home | -Bar</title>
        </Head>

        <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white'>
          <h1 className='text-6xl font-bold'>
            Welcome to <a className='text-70syellow'>-Bar</a>
          </h1>

          <p className='mt-3 text-2xl'>It's been a long day..</p>

          <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full text-white '>
            <Link href='/reserve'>
              <a className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-cream hover:border-cream focus:text-cream'>
                <h3 className='text-2xl font-bold'>Reserve &rarr;</h3>
                <p className='mt-4 text-xl'>ให้ผมเป็นสิ่งดีๆ ในวันของคุณ</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
