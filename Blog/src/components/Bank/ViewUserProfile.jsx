import { useState } from "react";
import Bank from "../../assets/Bank.png";

const ViewUserProfile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Cityville",
    age: "29",
    aadhar: "1234-5678-9123",
    dob: "1995-05-21",
    phoneNumber: "+123 456 7890",
    pan: "ABCDE1234F",
  });

  return (
    <div>
      <section className="h-[100vh] flex">
        <div className="h-[100%] w-[35%]">
          <img className="h-[100%] object-right" src={Bank} alt="Bank" />
        </div>

        <div className="w-[550px] ml-20 h-[580px] mt-16 bg-sky-300 rounded-3xl flex items-center flex-col">
          <div className="h-[170px] w-[150px] mt-4">
            <img
              className="rounded-full w-[100%] h-[150px] object-cover object-top"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
            />
            <h1 className="text-xl text-center mt-2">{user.name}</h1>
          </div>

          <div className="h-[320px] w-[430px] flex justify-between mt-8">
            
            <div className="flex flex-col justify-evenly">
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.email}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Address</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.address}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Age</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.age}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Aadhar</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.aadhar}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-evenly">
              <div>
                <h2 className="text-lg font-semibold">User Name</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.name}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">DOB</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.dob}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Phone Number</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.phoneNumber}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">PAN No.</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.pan}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewUserProfile;
