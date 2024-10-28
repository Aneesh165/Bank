import { useEffect, useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Viewhistory = () => {
  const navigate =useNavigate()
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [profile, setProfiile] = useState({ image: "" });

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if(!userId ){
          navigate('/')
        }

        const response = await axios.get(
          `http://localhost:8080/user/history/${userId}`
        );
        // console.log(response.data);
        setHistory(response.data.transaction || []);
        const res = await axios.get(`http://localhost:8080/user/${userId}`);
        setProfiile({ image: res.data.image });
        // console.log(profile);
      } catch (error) {
        setError("Failed to load transaction history");
        console.error(error);
      }
    };
    fetchUserHistory();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
};

  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300">
        <div className="rounded-full w-16 h-16">
          <Link to="/profile">
            <img
              className="rounded-full h-[100%] w-[100%] object-cover object-top"
              src={`http://localhost:8080/uploads/${profile.image}`}
              alt="profile picture"
            />
          </Link>
        </div>

        <div className="my-auto w-[20%] text-end">
          <Link to="/home">Home</Link>
        </div>

        <div className="my-auto flex justify-between w-[30%]">
          <IoMdNotificationsOutline size={25} />
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawl">Withdrawal</Link>
          <Link to="/" onClick={handleLogout}>
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
        <form className="w-[90%] ml-20 h-[90%] px-5 py-6 mt-9 bg-sky-300 rounded-3xl">
          <table className="w-[80%] mx-auto">
            <thead className="border-y-2 border-black">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Detail</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {history.length > 0 ? (
                history.map((transaction, index) => {
                  const transactionDate = new Date(transaction.date);
                  const formattedDate =
                    transactionDate.toLocaleDateString("en-GB");

                  return (
                    <tr key={index}>
                      <td>{formattedDate}</td>
                      <td>{transaction.time}</td>
                      <td>{transaction.transaction}</td>
                      <td>${transaction.amount}</td>
                      <td>${transaction.balance}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">No transactions found</td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
};

export default Viewhistory;
