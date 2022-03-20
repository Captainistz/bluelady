import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
// import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';

const FriendShipDetails: NextPage = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState('')
  const [nickname, setNickname] = useState('')
  const [invalidDate, setInvalidDate] = useState(false)
  const [invalidTime, setInvalidTime] = useState(false)
  const [missing, setMissing] = useState({
    nickname: false,
    phone: false,
    date: false,
    time: false,
  })

  const inputstyle =
    'appearance-none block w-full bg-new_gray text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'

  // const datePickerEl = document.getElementById('_datepicker')
  // new Datepicker(datePickerEl)

  const nicknameHandler = (e: any) => {
    setNickname(e.target.value)
    setInvalidDate(false)
    setInvalidTime(false)
    setMissing({
      nickname: false,
      phone: false,
      date: false,
      time: false,
    })
  }

  const phoneHandler = (e: any) => {
    if (String(e.target.value).length == 10 && String(e.target.value).search(/[0][0-9]{9}/g)) {
      return setPhone('')
    }
    setPhone(e.target.value)
    setInvalidDate(false)
    setInvalidTime(false)
    setMissing({
      nickname: false,
      phone: false,
      date: false,
      time: false,
    })
  }

  const dateHandler = (e: any) => {
    setInvalidDate(false)
    setInvalidTime(false)

    if (
      e.target.value &&
      !String(e.target.value)[String(e.target.value).length - 1].search(/[a-zA-Z]/)
    ) {
      e.target.value = String(e.target.value).slice(0, -1)
    }

    if (String(e.target.value).length == 2) {
      if (date.length < String(e.target.value).length) {
        if (e.target.value > 31 || e.target.value == 0) {
          e.target.value = ''
        } else {
          e.target.value += '/'
        }
      } else {
        e.target.value = String(e.target.value).slice(0, -1)
      }
    }
    if (String(e.target.value).length == 5) {
      if (String(e.target.value).search(/[0-9]{2}\/[0-9]{2}/g)) {
        return setDate('')
      }
      const dd = parseInt(String(e.target.value).split('/')[0])
      const mm = parseInt(String(e.target.value).split('/')[1])
      const yy = new Date().getFullYear() % 4
      const m_max_date = [0, 31, 28 + (yy == 0 ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      if (mm > 12 || mm == 0 || dd > m_max_date[mm]) {
        e.target.value = String(e.target.value).slice(0, -2)
      }
    }
    setDate(e.target.value)
    setMissing({
      nickname: false,
      phone: false,
      date: false,
      time: false,
    })
  }

  const timeHandler = (e: any) => {
    setInvalidTime(false)
    setInvalidDate(false)

    if (
      e.target.value &&
      !String(e.target.value)[String(e.target.value).length - 1].search(/[a-zA-Z]/)
    ) {
      e.target.value = String(e.target.value).slice(0, -1)
    }

    if (String(e.target.value).length == 2) {
      if (time.length < String(e.target.value).length) {
        if (e.target.value > 24 || e.target.value == 0) {
          e.target.value = ''
        } else {
          e.target.value += ':'
        }
      } else {
        e.target.value = String(e.target.value).slice(0, -1)
      }
    }

    if (String(e.target.value).length == 5) {
      if (String(e.target.value).search(/[0-9]{2}:[0-9]{2}/g)) {
        return setTime('')
      }
      const minute = parseInt(String(e.target.value).split(':')[1])
      if (minute > 60) {
        e.target.value = String(e.target.value).slice(0, -2)
      }
    }
    setTime(e.target.value)
    setMissing({
      nickname: false,
      phone: false,
      date: false,
      time: false,
    })
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    setMissing({
      nickname: nickname == '',
      phone: phone == '',
      date: date == '',
      time: time==''
    })
    if (date.length != 5) {
      setInvalidDate(true)
    }
    if (time.length != 5) {
      setInvalidTime(true)
    }
  }

  return (
    <div className='main-bg'>
      <Head>
        <title>Book your table</title>
      </Head>
      <div className='flex min-h-screen flex-col items-center justify-center py-2 font-display text-white'>
        <main className='flex w-4/5 flex-1 flex-col px-20 items-center justify-center '>
          <h1 className='mb-4 text-xl'>Book your happiness :D</h1>
          <form className='w-full max-w-lg mt-3'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-xs font-bold mb-2'>
                  How can I call u ?
                </label>
                <input
                  className={missing.nickname ? inputstyle + ' border border-coral' : inputstyle}
                  id='grid-nickname'
                  type='text'
                  placeholder='นายหญิง'
                  maxLength={20}
                  value={nickname}
                  onChange={nicknameHandler}
                />

                {missing.nickname ? (
                  <p className='text-red-400 text-xs italic'>It's still empty</p>
                ) : (
                  <p className='text-xs italic'>Make sure it's cute</p>
                )}
              </div>
              <div className='w-full sm:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-xs font-bold mb-2'>
                  Phone
                </label>
                <input
                  className={missing.phone ? inputstyle + ' border border-coral' : inputstyle}
                  id='grid-phone'
                  placeholder='0910653682'
                  maxLength={10}
                  value={phone}
                  onChange={phoneHandler}
                />

                {missing.phone && <p className='text-red-400 text-xs italic'>Empty!!</p>}
              </div>
              <div className='w-full sm:w-1/2 px-3 mt-4'>
                <label className='block uppercase tracking-wide text-xs font-bold mb-2'>Date</label>
                <input
                  className={missing.date ? inputstyle + ' border border-coral' : inputstyle}
                  id='grid-date'
                  type='text'
                  placeholder='23/03'
                  maxLength={5}
                  value={date}
                  onChange={dateHandler}
                />
                {missing.date ? (
                  <p className='text-red-400 text-xs italic'>Choose date please 😣</p>
                ) : invalidDate ? (
                  <p className='text-red-400 text-xs italic'>Fill please 😣</p>
                ) : (
                  <p className='text-xs italic'>Done it right</p>
                )}
              </div>
              <div className='w-full sm:w-1/2 px-3 mt-4'>
                <label className='block uppercase tracking-wide text-xs font-bold mb-2'>What time is it ?</label>
                <input
                  className={missing.time ? inputstyle + ' border border-coral' : inputstyle}
                  id='grid-time'
                  type='text'
                  placeholder='21:30'
                  maxLength={5}
                  value={time}
                  onChange={timeHandler}
                />
                {missing.time ? (
                  <p className='text-red-400 text-xs italic'>Type in time please 😣</p>
                ) : invalidTime ? (
                  <p className='text-red-400 text-xs italic'>Fill please 😣</p>
                ) : (
                  <p className='text-xs italic'>ehhehe</p>
                )}
              </div>
            </div>
          </form>
          <button
            className='btn btn-sm sm:btn-md gap-2 bg-70sblue hover:bg-70slblue border-transparent'
            onClick={submitHandler}>
            Reserve
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 sm:h-6 w-5 sm:w-6'
              fill='none'
              viewBox='0 0 26 26'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </button>
        </main>
      </div>
    </div>
  )
}

export default FriendShipDetails
