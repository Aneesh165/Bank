import React from 'react'
import Bank from '../assets/Bank.png'

const Register = () => {
  return (
    <section className='h-[100vh] flex'>
      <div className='h-[100%] w-[25%]'><img className='h-[100%] object-right' src={Bank} alt=""/></div>
      <div className='w-[75%] bg-white flex justify-around'>
        <div className='w-80% h-[80%] my-auto bg-sky-300'>
          <h1>Register</h1>
        </div>
      </div>
    </section>
  )
}

export default Register