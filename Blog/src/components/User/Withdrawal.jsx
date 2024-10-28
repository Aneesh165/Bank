import { useEffect, useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Withdrawal = () => {
 

  const navigate=useNavigate()
  const [account, setAccount] = useState({
    accountNumber: "xxxxxxxxxxxxx",
    image: "http://",
  });
  const [withdrawal, setWithdrawal] = useState({
    branch: "Branch Name",
    amount: "",
  });

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        if(!token && !userId){
          navigate('/')
        }

        const response = await axios.get(
          `http://localhost:8080/user/withdrawl/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAccount({
          accountNumber: response.data.AccountNumber,
          image: response.data.image,
        });
      } catch (error) {
        console.log("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);

  const handleWithdraw = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:8080/user/transaction/${userId}`,
        {
          amount: withdrawal.amount,
          transaction: "debit"
        }
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/home');
      }, 3600);
    } catch (error) {
      console.error("Error during withdrawal:", error);
      toast.error("An error occurred during the withdrawal. Please try again.");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setWithdrawal({
      ...withdrawal,
      [e.target.name]: value ? Number(value) : 0,
    });
  };
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
          <Link to="/home" onClick={handleLogout}>Home</Link>
        </div>

        <div className="my-auto flex justify-between w-[30%]">
          <IoMdNotificationsOutline size={25} />
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdrawl">Withdrawal</Link>
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
          className="w-[400px] ml-20 h-[540px] mt-16 bg-sky-300 rounded-3xl flex justify-evenly flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleWithdraw();
          }}
        >
          <h2 className="text-2xl text-center font-semibold">Withdrawal</h2>

          <div>
            <h2 className="pl-10 text-xl font-semibold">Account no:</h2>
            <h3 className="ml-24 text-green-700 text-lg">
              {account.accountNumber}
            </h3>
          </div>

          <div>
            <h2 className="pl-10 text-xl font-semibold">Branch</h2>
            <h3 className="ml-24 text-green-700 text-lg">
              {withdrawal.branch}
            </h3>
          </div>

          <div className="relative">
            <h2 className="pl-10 text-xl font-semibold">Amount</h2>

            <span className="ml-2 text-lg font-semibold absolute bottom-1 left-16">
              $
            </span>
            <input
              type="text"
              name="amount"
              placeholder="0"
              value={withdrawal.amount}
              onChange={handleChange}
              className="ml-24 text-lg  rounded-lg bg-inherit py-1 placeholder:text-black"
            />
          </div>

          <button
            type="submit"
            className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto"
          >
            Withdraw
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Withdrawal;
