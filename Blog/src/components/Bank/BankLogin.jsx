import React, { useState } from 'react';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom'; 
import Bank from '../../assets/Bank.png'; 

const BankLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      
      const response = await axios.post('', {
        username,
        password
      });

      
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        navigate('/bankhome'); 
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      
    }
  };

  return (
    <div>
      <section className="h-[100vh] flex bg-stone-400">
        <div className="h-[100%] w-[45%]">
          <img className="h-[100%] object-right" src={Bank} alt="Bank" />
        </div>
        <form onSubmit={handleSubmit} className="w-[80%] h-[100%] bg-white my-auto">
          <div className="flex flex-col justify-evenly gap-4 bg-sky-300 w-[50%] mt-24 h-[75%] mx-auto">
            <h1 className="text-5xl font-semibold mx-auto">Login</h1>
            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black"
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <button
              type="submit" 
              className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BankLogin;
