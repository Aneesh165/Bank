import { useState, useEffect } from "react";
import Bank from "../../assets/Bank.png";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate =useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if(!token){
          navigate('/banklogin')
        }
        const response = await axios.get(
          "http://localhost:8080/admin/viewusers",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.Users) setUsers(response.data.Users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="h-[100vh] flex bg-stone-400">
        <div className="h-[100%] w-[35%]">
          <img className="h-[100%] object-right" src={Bank} alt="Bank" />
        </div>
        <div className="w-[65%] h-[100%] bg-white flex flex-col">
          <div className="bg-sky-300 w-[900px] p-4 mt-4 flex items-center shadow-md rounded-3xl mx-auto">
            <FiSearch className="text-black mr-2" size={28} />
            <input
              type="search"
              placeholder="Search User By Name"
              className="px-4 py-2 placeholder:text-stone-700 flex-1 bg-inherit"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <table className="mt-4 mx-auto w-[900px]">
            <thead>
              <tr>
                <th className="text-left pr-6">Profile</th>
                <th className="text-left">Users Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id} className="border-b border-black">
                  <td>
                    <img
                      src={
                        `http://localhost:8080/uploads/${user.image}` ||
                        "https://via.placeholder.com/150"
                      }
                      className="w-16 h-16 rounded-full object-cover"
                      alt={user.name}
                    />
                  </td>
                  <td>
                    <h2>{user.name}</h2>
                  </td>
                  <td className="flex justify-evenly my-5">
                    <button className="bg-sky-300 px-5 py-2 rounded-3xl">
                      <Link to={`/viewuserprofile/${user._id}`}>View</Link>
                    </button>
                    <button className="bg-sky-300 px-5 py-2 rounded-3xl">
                      <Link to={`/viewusertansactions/${user._id}`}>
                        History
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ViewUsers;
