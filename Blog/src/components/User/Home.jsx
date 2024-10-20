import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
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
          Home
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
        className=" h-[667px] w-[100%] flex flex-col gap-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Bank})` }}
      >
        {/* bankname */}
        <div className="flex justify-evenly text-4xl mt-4 font-semibold text-stone-400">
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
          <h1>Horizone Bank</h1>
        </div>
        {/* Card */}
        <div className="w-[40%] ml-6 mt-10 h-[380px]  bg-sky-300 rounded-3xl flex justify-evenly items-center flex-col">
          <div>
            <h2 className="text-xl font-semibold">Account Number</h2>
            <h3 className="text-center text-lg">xxxxxxxxxxxxx</h3>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Available Balance</h2>
            <h3 className="text-center text-lg">$25000</h3>
          </div>
          <div className="flex justify-between w-[75%]">
            <h2 className="text-purple-500"><Link to='/viewhistory'>View History</Link></h2>
            <Link to='/more'><h3>More..</h3></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
