import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import axios from "axios";
import Bank from "../../assets/Bank.png";

const ViewUserProfile = () => {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if(!token){
          navigate('/banklogin')
        }
        const response = await axios.get(
          `http://localhost:8080/admin/viewusers/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <section className="h-[100vh] flex">
        <div className="h-[100%] w-[35%]">
          <img className="h-[100%] object-right" src={Bank} alt="Bank" />
        </div>

        <div className="w-[580px] ml-20 h-[590px] pt-7 mt-16 bg-sky-300 rounded-3xl flex items-center flex-col">
          <div className="h-[170px] w-[150px] mt-4">
            <img
              className="rounded-full w-[100%] h-[150px] object-cover object-top"
              src={`http://localhost:8080/uploads/${user.image}` || "https://via.placeholder.com/150"}
              alt="profile"
            />
            <h1 className="text-xl text-center mt-2">{user.name}</h1>
          </div>

          <div className="h-[320px] w-[480px] flex justify-between mt-8">
            <div className="flex flex-col justify-evenly w-[50%]">
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
                <h3 className="text-green-800 pl-9 text-md">{user.adhar}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-evenly pl-6 w-[40%]">
              <div>
                <h2 className="text-lg font-semibold">User Name</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.name}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">DOB</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.dob}</h3>
              </div>
              <div >
                <h2 className="text-lg font-semibold">Phone No.</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.phone}</h3>
              </div>
              <div>
                <h2 className="text-lg font-semibold">PAN No.</h2>
                <h3 className="text-green-800 pl-9 text-md">{user.pancard}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewUserProfile;
