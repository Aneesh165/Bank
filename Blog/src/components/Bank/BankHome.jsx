import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Bank from '../../assets/Bank.png'
import logo from '../../assets/logo.png'
import { useState } from "react";

const BankHome = () => {
  const [users,setusers]=useState(18)
  return (
    <div>
      <div className="flex justify-end pr-12 py-4 bg-sky-300 gap-8">
        <h2 className="text-xl font-semibold"><Link to='/viewusers'>View Users</Link></h2>
        <button>
          <Link to="/">
            <FiLogOut size={28} />
          </Link>
        </button>
      </div>
      <div className="w-[100%] h-[688px] flex pl-20 pt-20 " style={{ backgroundImage: `url(${Bank})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="w-[300px] h-[250px] rounded-3xl relative">
          <img src={logo} className="w-[100%] h-[100%] rounded-3xl" alt="" />
        </div>
        <div className="bg-sky-300 z-10 w-[300px] h-[250px] flex flex-col rounded-3xl justify-center items-center absolute top-[230px] left-[210px]">
          <h1 className="text-2xl">No of Users :</h1>
          <h2 className="text-xl">{users}</h2>
        </div>
        <div className="w-[300px] h-[250px] rounded-3xl absolute bottom-40 left-[340px]">
          <img src={logo} className="w-[100%] h-[100%] rounded-3xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BankHome;
