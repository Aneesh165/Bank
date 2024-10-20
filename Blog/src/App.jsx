import React from 'react'
import Login from './components/User/Login'
import './Style.css'
import Register from './components/User/Register'
import Home from './components/User/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Deposit from './components/User/Deposit'
import Withdrawal from './components/User/Withdrawal'
import Profile from './components/User/Profile'
import Editprofile from './components/User/Editprofile'
import Viewhistory from './components/User/Viewhistory'
import More from './components/User/More'


const App = () => {
  return (
    <div className='inknut-antiqua-regular'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/deposit' element={<Deposit/>}></Route>
          <Route path='/withdrawl' element={<Withdrawal/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/editprofile' element={<Editprofile/>}></Route>
          <Route path='/viewhistory' element={<Viewhistory/>}></Route>
          <Route path='/more' element={<More/>}></Route>
         
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App