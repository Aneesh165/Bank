import { useState, useEffect } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deposit = () => {

  const navigate=useNavigate()
  const [account, setAccount] = useState({
    accountNumber: "xxxxxxxxxxxxx",
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  });

  const [deposit, setDeposit] = useState({
    branch: "Branch Name",
    amount: "",
  });

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if(!userId && !token){
          navigate('/')
        }

        const response = await axios.get(
          `http://localhost:8080/user/deposit/${userId}`,
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

  const handleDeposit = async () => {
    if(deposit.amount === '') {
      return toast("Amount should be greater than '0' ")
    } 
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:8080/user/transaction/${userId}`,
        {
          amount: deposit.amount,
          transaction: "credit"
        }
      );

      toast.success(response.data.message);

      if(toast.success){
        setDeposit({
          branch: "Branch Name",
          amount: ""
        })
        setTimeout(() => {
          navigate('/home');
        }, 1600);
  
      }
      
    } catch (error) {
      console.error("Error during deposit:", error);
      toast.error("An error occurred during the deposit. Please try again."); 
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDeposit({ ...deposit, [e.target.name]: value ? Number(value) : 0 });
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
        <form
          className="w-[400px] ml-20 h-[540px] mt-16 bg-sky-300 rounded-3xl flex justify-evenly flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleDeposit();
          }}
        >
          <h2 className="text-2xl text-center font-semibold">Deposit</h2>

          <div>
            <h2 className="pl-10 text-xl font-semibold">Account no:</h2>
            <h3 className="ml-24 text-green-700 text-lg">
              {account.accountNumber}
            </h3>
          </div>

          <div>
            <h2 className="pl-10 text-xl font-semibold">Branch</h2>
            <h3 className="ml-24 text-green-700 text-lg">{deposit.branch}</h3>
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
              value={deposit.amount}
              onChange={handleChange}
              className="ml-24 text-lg rounded-lg bg-inherit py-1 placeholder:text-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto"
          >
            Deposit
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Deposit;
