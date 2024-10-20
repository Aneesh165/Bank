import { useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Viewhistory = () => {
  const [history, setHistory] = useState([
    {
      date: "12/5/2024",
      time: "02:20 PM",
      detail: "Debit",
      amount: 2000,
      balance: 22000,
    },
    {
      date: "13/5/2024",
      time: "03:45 PM",
      detail: "Credit",
      amount: 1000,
      balance: 23000,
    },
    {
      date: "14/5/2024",
      time: "10:10 AM",
      detail: "Debit",
      amount: 500,
      balance: 22500,
    },
  ]);

  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300">
        <div className="rounded-full w-16 h-16">
          <Link to="/profile">
            <img
              className="rounded-full h-[100%] w-[100%] object-cover object-top"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
              {history.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.time}</td>
                  <td>{transaction.detail}</td>
                  <td>${transaction.amount}</td>
                  <td>${transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </section>
  );
};

export default Viewhistory;
