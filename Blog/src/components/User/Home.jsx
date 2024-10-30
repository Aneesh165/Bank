import { useEffect, useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [account, setAccount] = useState({
    accountNumber: "xxxxxxxxxxxxxx",
    balance: 0,
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  });

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {

        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        // console.log("Token:", token, "UserID:", userId);

        if(!userId && !token){
          navigate('/')
        }

        const response = await axios.get(
          `http://localhost:8080/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // console.log("API Response:", response.data);

        setAccount({
          accountNumber: response.data.AccountNumber,
          balance: response.data.balance,
          image: response.data.image,
        });
      } catch (error) {
        console.log("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
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
              src={`http://localhost:8080/uploads/${account.image}`}
              alt="profile picture"
            />
          </Link>
        </div>
        <div className="my-auto w-[20%] text-end">
          <span>Home</span>
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
        className="h-[667px] w-[100%] flex flex-col gap-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Bank})` }}
      >
        {/* Bank Name Section */}
        <div className="flex justify-evenly text-4xl mt-4 font-semibold text-stone-400">
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
        </div>

        {/* Account Info Card */}
        <div className="w-[40%] ml-6 mt-10 h-[380px] bg-sky-300 rounded-3xl flex justify-evenly items-center flex-col">
          <div>
            <h2 className="text-xl font-semibold">Account Number</h2>
            <h3 className="text-center text-lg">{account.accountNumber}</h3>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Available Balance</h2>
            <h3 className="text-center text-lg">${account.balance}</h3>
          </div>
          <div className="flex justify-between w-[75%]">
            <h2 className="text-purple-500">
              <Link to="/viewhistory">View History</Link>
            </h2>
            <h3>
              {/* <Link to="/more">More..</Link> */}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
