import Bank from '../../assets/Bank.png'
import {FiLogOut} from 'react-icons/fi'
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className='flex flex-col'>
      {/* Navbar */}
      <div className='flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300'>
        <a href="" className='my-auto ml-20 text-end'><Link to='/home'>Home</Link></a>
        <div className='my-auto flex justify-between w-[30%]'>
          <a href=""><IoMdNotificationsOutline size={25}/></a>
          <Link to='/deposit'><a href="">Deposit</a></Link>
          <Link to='/withdrawl'><a href="">Withdrawal</a></Link>
          <Link to='/'><a href=""><FiLogOut size={25}/></a></Link>
        </div>
      </div>
      {/* Body */}
      <div className=' h-[667px] w-[100%]  bg-cover bg-center' style={{backgroundImage:`url(${Bank})`}}>
        {/* Card */}
        <div className='w-[500px] ml-20 h-[550px] mt-16 bg-sky-300 rounded-3xl flex items-center flex-col relative'>
            <Link to='/editprofile'><div className='absolute top-2 right-4'><FaRegEdit  size={28}/></div></Link>
          <div className='h-[170px] w-[150px] mt-4'>
          <img
              className="rounded-full w-[100%] h-[150px] object-cover object-top"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile picture"
            />
            <h1 className='text-xl text-center mt-2'>Name</h1>
          </div>
          <div className='h-[320px] w-[430px] flex justify-between mt-8'>
            <div className='flex flex-col justify-evenly'>
                <div>
                    <h2 className='text-lg font-semibold'>Email</h2>
                    <h3 className='text-green-800 pl-9 text-md'>email address</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Address</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Address</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Age</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Age</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Aadhar</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Aadhar </h3>
                </div>
            </div>
            <div className='flex flex-col justify-evenly'>
                <div>
                    <h2 className='text-lg font-semibold'>User Name</h2>
                    <h3 className='text-green-800 pl-9 text-md'>User Name</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Dob</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Dob</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Phone Number</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Phone Number</h3>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Pan no.</h2>
                    <h3 className='text-green-800 pl-9 text-md'>Pan no. </h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile