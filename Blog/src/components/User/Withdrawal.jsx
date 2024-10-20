import { useState } from "react";
import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Withdrawal = () => {
  const [withdrawalInfo, setWithdrawalInfo] = useState({
    accountNumber: "xxxxxxxxxxxxx",
    branch: "Branch Name",
    amount: 2000,
  });

  const handleWithdraw = () => {
    alert(
      `Withdrawing $${withdrawalInfo.amount} from account ${withdrawalInfo.accountNumber}`
    );
  };
  const handleChange = (e) => {
    setWithdrawalInfo({ ...withdrawalInfo, [e.target.name]: e.target.value });
  };

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
              {withdrawalInfo.accountNumber}
            </h3>
          </div>

          <div>
            <h2 className="pl-10 text-xl font-semibold">Branch</h2>
            <h3 className="ml-24 text-green-700 text-lg">
              {withdrawalInfo.branch}
            </h3>
          </div>

          <div className="relative">
            <h2 className="pl-10 text-xl font-semibold">Amount</h2>

            <span className="ml-2 text-lg font-semibold absolute bottom-1 left-16">
              $
            </span>
            <input
              type="number"
              name="amount"
              value={withdrawalInfo.amount}
              onChange={handleChange}
              className="ml-24 text-lg  rounded-lg bg-inherit py-1"
            />
          </div>


          <button
            type="submit"
            className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto"
          >
            Withdraw
          </button>
        </form>
      </div>
    </section>
  );
};

export default Withdrawal;
