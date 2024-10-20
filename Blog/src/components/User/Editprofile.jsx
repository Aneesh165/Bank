import Bank from "../../assets/Bank.png";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Editprofile = () => {
  return (
    <section className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between px-6 pt-2 h-20 w-[100%] bg-sky-300">
        <a href="" className="my-auto ml-20 text-end">
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
        <form className="w-[580px] ml-20 h-[550px] mt-16 bg-sky-300 rounded-3xl flex items-center flex-col">
          <div>
            <h1 className="text-3xl mt-6">Edit Profile</h1>
          </div>
          <div className="flex justify-between gap-3 w-[95%] h-[400px] py-2">
            <div className="flex flex-col justify-evenly pl-5">
              <div className="flex flex-col">
                <label>Name</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Address</label>
                <textarea className="w-5/6 h-16" name="address" id=""></textarea>
              </div>
              <div className="flex flex-col">
                <label>Age</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Aadhar</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly mr-3">
              <div className="flex flex-col ">
                <label>User name</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Dob</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Phone number</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>PANno.</label>
                <input className="w-5/6 h-9" type="text" />
              </div>
              <div className="flex flex-col">
                <label>Image</label>
                <input className="w-64" accept="image/*" type="file" alt="" />
              </div>
            </div>
          </div>
          <div>
            <button className="px-9 rounded-3xl bg-white text-xl py-3 mt-4">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Editprofile;
