import React from 'react'
import Bank from '../assets/Bank.png'

const Register = () => {
  return (
    <section className='h-[100vh] flex'>
      <div className='h-[100%] w-[25%]'><img className='h-[100%] object-right' src={Bank} alt=""/></div>
      <form className='w-[75%] h-[100%] bg-white flex justify-around'>
        <div className='w-80% px-2 w-[80%] h-[90%] my-auto bg-sky-300 '>  
          <h1 className='mt-2 text-5xl text-center'>Register</h1>
          <div className='flex justify-around mt-2 h-[70%] relative'>
          <div className='flex flex-col justify-evenly  h-[88%] '>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Name'/>
            <textarea className="w-[280px] text-lg h-28 mx-auto bg-inherit border-2 border-black placeholder:text-black resize-y"  placeholder='Address'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Phone Number'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Adhar Number'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Password'/>
            <div className='flex flex-col absolute  bottom-0'>
              <label htmlFor="">Upload image</label>
            <input type='file' accept='image/*' className=' w-30 ' />
            </div>
          </div>
          <div className='flex flex-col justify-evenly h-[100%]'>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='User Name'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Email'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Age'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='DOB'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Initial Amount'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Pancard no.'/>
            <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Confirm Password'/>
          </div>
          </div>
          <div className='flex flex-col mt-4 gap-3'>
          <button className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto">
              Register
            </button>
            <div className="flex justify-evenly mt-3 text-lg pr-32">
              <p>Already Have an Account?</p>
              <a href="">Login</a>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Register