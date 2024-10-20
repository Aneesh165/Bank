import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Withdrawal = () => {
  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300">
        <div className=" rounded-full w-16 h-16 ">
          <Link to="/profile">
            <img
              className="rounded-full h-[100%] w-[100%] object-cover object-top"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile picture"
            />
          </Link>
        </div>
        <a href="" className="my-auto w-[20%] text-end">
          <Link to="/home">Home</Link>
        </a>
        <div className="my-auto flex justify-between w-[30%]">
          <a href="">
            <IoMdNotificationsOutline size={25} />
          </a>
          <Link to="/deposit">
            <a href="">Deposit</a>
          </Link>
          <Link to="/withdrawl">
            <a href="">Withdrawal</a>
          </Link>
          <Link to="/">
            <a href="">
              <FiLogOut size={25} />
            </a>
          </Link>
        </div>
      </div>
      {/* Body */}
      <div
        className=" h-[667px] w-[100%]  bg-cover bg-center"
        style={{ backgroundImage: `url(${Bank})` }}
      >
        {/* Card */}
        <form className="w-[400px] ml-20 h-[540px] mt-16 bg-sky-300 rounded-3xl flex justify-evenly flex-col">
          <h2 className="text-2xl text-center font-semibold">Withdrawal</h2>
          <div>
            <h2 className="pl-10 text-xl font-semibold">Account no:</h2>
            <h3 className="ml-24 text-green-700 text-lg">xxxxxxxxxxxxx</h3>
          </div>
          <div>
            <h2 className="pl-10 text-xl font-semibold">Branch</h2>
            <h3 className="ml-24 text-green-700 text-lg">Branch Name</h3>
          </div>
          <div>
            <h2 className="pl-10 text-xl font-semibold">Amount</h2>
            <h3 className="ml-24 text-green-700 text-lg">$1000</h3>
          </div>
          <button className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto">
            Withdraw
          </button>
        </form>
      </div>
    </section>
  );
};

export default Withdrawal;
