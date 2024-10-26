import axios from "axios";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";


const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    aadhar: "",
    username: "",
    dob: "",
    phoneNumber: "",
    pan: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isEmpty = Object.values(formData).every((value) => value === "" || value === null);
    if (isEmpty) {
      console.log("No data provided. Please fill at least one field.");
      return; 
    }
  
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      if (formData[key] !== "" && formData[key] !== null) { 
        formDataToSubmit.append(key, formData[key]);
      }
    }
  
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.put(
        `http://localhost:8080/user/profile/${userId}`,
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("User updated successfully:", response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300">
        <Link to="/home" className="my-auto ml-20 text-end">
          Home
        </Link>
        <div className="my-auto flex justify-between w-[30%]">
          <IoMdNotificationsOutline size={25} />
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawal">Withdrawal</Link>
          <Link to="/">
            <FiLogOut size={25} />
          </Link>
        </div>
      </div>
      {/* Body */}
      <div
        className="h-[667px] w-[100%] bg-cover bg-center"
        style={{ backgroundImage: `url(${Bank})` }}
      >
        {/* Card */}
        <form
          className="w-[580px] ml-20 h-[550px] mt-16 bg-sky-300 rounded-3xl flex items-center flex-col"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl mt-6">Edit Profile</h1>
          <div className="flex justify-between gap-3 w-[95%] h-[400px] py-2">
            <div className="flex flex-col justify-evenly pl-5">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="w-5/6 h-16"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  name="age"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="aadhar">Aadhar</label>
                <input
                  id="aadhar"
                  name="adhar"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-evenly mr-3">
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dob">DOB</label>
                <input
                  id="dob"
                  name="dob"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phone"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pan">PAN No.</label>
                <input
                  id="pan"
                  name="pancard"
                  className="w-5/6 h-9"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  name="image"
                  className="w-64"
                  accept="image/*"
                  type="file"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <button className="px-9 rounded-3xl bg-white text-xl py-3 mt-4">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
