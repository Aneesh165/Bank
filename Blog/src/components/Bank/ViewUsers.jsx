import { useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiSearch } from "react-icons/fi";

const ViewUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="h-[100vh] flex bg-stone-400">
        <div className="h-[100%] w-[35%]">
          <img className="h-[100%] object-cover" src={Bank} alt="Bank" />
        </div>
        <div className="w-[65%] h-[100%] bg-white flex flex-col">
          <div className="bg-sky-300 w-[900px] p-4 mt-4 flex items-center shadow-md rounded-3xl mx-auto">
            <FiSearch className="text-black mr-2" size={28} />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search User By Name"
              className="px-4 py-2 placeholder:text-stone-700 flex-1 bg-inherit"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <table className="mt-4 mx-auto w-[900px]">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Users Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="border-b border-black">
                  <td>
                    <img
                      src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="w-16 h-16 rounded-full object-cover"
                      alt={user.name}
                    />
                  </td>
                  <td>
                    <h2>{user.name}</h2>
                  </td>
                  <td className="flex justify-evenly my-5">
                    <button className="bg-sky-300 px-5 py-2 rounded-3xl">View</button>
                    <button className="bg-sky-300 px-5 py-2 rounded-3xl">History</button>
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
