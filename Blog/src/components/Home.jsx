import React from 'react'
import Bank from '../assets/Bank.png'

const Home = () => {
  return (
    <section className='flex flex-col'>
      {/* Navbar */}
      <div className='flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300'>
        <div className=' rounded-full w-16 h-16 bg-purple-500'>
          <img src=""  alt="" />
        </div>
        <a href="" className='my-auto w-[20%] text-end'>Home</a>
        <div className='my-auto flex justify-between w-[30%]'>
          <a href="">Notify</a>
          <a href="">Deposit</a>
          <a href="">Withdrawal</a>
          <a href="">Exit</a>
        </div>
      </div>
      {/* Body */}
      <div className=' h-[667px] w-[100%] flex flex-col gap-5 bg-cover bg-center' style={{backgroundImage:`url(${Bank})`}}>
        {/* bankname */}
        <div className='flex justify-evenly text-4xl mt-2 font-semibold text-stone-400'>
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
        </div>
        {/* Card */}
        <div className='w-[50%] ml-6 h-[380px]  bg-sky-300 rounded-3xl'>
          hb
        </div>
      </div>
    </section>
  )
}

export default Home