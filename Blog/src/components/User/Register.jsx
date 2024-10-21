import { useState } from 'react';
import axios from 'axios';
import Bank from '../../assets/Bank.png';
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
    email: '',
    age: '',
    phone: '',
    dob: '',
    adhar: '',
    initialamount: '',
    pancard: '',
    password: '',
    confirmPassword: '',
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setImage(file);
      } else {
        alert("Please upload a valid image file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.username || !formData.address || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }

    if (formData.password.length < 4) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const initialamount = parseFloat(formData.initialamount);
    if (isNaN(initialamount) || initialamount <= 0) {
      alert("Please enter a valid initial amount greater than zero.");
      return;
    }
    if(!image){
      alert("please choose a image")
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:8080/user/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); 
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.error); 
      } else {
        console.error('Error:', error.response ? error.response.data : error.message);
      }    }
  };

  return (
    <section className='h-[100vh] flex'>
      <div className='h-[100%] w-[25%]'>
        <img className='h-[100%] object-right' src={Bank} alt="Bank" />
      </div>
      <form className='w-[75%] h-[100%] bg-white flex justify-around' onSubmit={handleSubmit}>
        <div className='w-[80%] h-[93%] my-auto bg-sky-300'>  
          <h1 className='mt-2 text-5xl text-center'>Register</h1>
          <div className='flex justify-around mt-2 h-[70%] relative'>
            <div className='flex flex-col justify-evenly h-[88%]'>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Name' />
              <textarea name="address" value={formData.address} onChange={handleChange} className="w-[280px] text-lg h-28 mx-auto bg-inherit border-2 border-black placeholder:text-black resize-y" placeholder='Address' />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Phone Number' />
              <input type="text" name="adhar" value={formData.adhar} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Adhar Number' />
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Password' />
              <div className='flex flex-col absolute bottom-0'>
                <label htmlFor="">Upload image</label>
                <input type='file' accept='image/*' className='w-30' onChange={handleFileChange} />
              </div>
            </div>
            <div className='flex flex-col justify-evenly h-[100%]'>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='User Name' />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Email' />
              <input type="text" name="age" value={formData.age} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Age' />
              <div>
                <label>DOB </label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" />
              </div>
              <input type="text" name="initialamount" value={formData.initialamount} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Initial Amount' />
              <input type="text" name="pancard" value={formData.pancard} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Pancard no.' />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black" placeholder='Confirm Password' />
            </div>
          </div>
          <div className='flex flex-col mt-4 gap-3'>
            <button type="submit" className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto">
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
  );
}

export default Register;






























// import Bank from '../../assets/Bank.png'

// const Register = () => {
//   return (
//     <section className='h-[100vh] flex'>
//       <div className='h-[100%] w-[25%]'><img className='h-[100%] object-right' src={Bank} alt=""/></div>
//       <form className='w-[75%] h-[100%] bg-white flex justify-around'>
//         <div className='w-80% px-2 w-[80%] h-[93%] my-auto bg-sky-300 '>  
//           <h1 className='mt-2 text-5xl text-center'>Register</h1>
//           <div className='flex justify-around mt-2 h-[70%] relative'>
//           <div className='flex flex-col justify-evenly  h-[88%] '>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Name'/>
//             <textarea className="w-[280px] text-lg h-28 mx-auto bg-inherit border-2 border-black placeholder:text-black resize-y"  placeholder='Address'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Phone Number'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Adhar Number'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Password'/>
//             <div className='flex flex-col absolute  bottom-0'>
//               <label htmlFor="">Upload image</label>
//             <input type='file' accept='image/*' className=' w-30 ' />
//             </div>
//           </div>
//           <div className='flex flex-col justify-evenly h-[100%]'>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='User Name'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Email'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Age'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='DOB'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Initial Amount'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Pancard no.'/>
//             <input type="text" className="w-30 text-lg h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black " placeholder='Confirm Password'/>
//           </div>
//           </div>
//           <div className='flex flex-col mt-4 gap-3'>
//           <button className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto">
//               Register
//             </button>
//             <div className="flex justify-evenly mt-3 text-lg pr-32">
//               <p>Already Have an Account?</p>
//               <a href="">Login</a>
//             </div>
//           </div>
//         </div>
//       </form>
//     </section>
//   )
// }

// export default Register