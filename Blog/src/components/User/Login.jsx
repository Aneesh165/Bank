import Bank from '../../assets/Bank.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className=" h-[100vh] flex bg-stone-400">
        <div className="h-[100%] w-[25%]"><img className='h-[100%] object-right' src={Bank} alt="" /></div>
        <form className="w-[80%] h-[100%] bg-white my-auto">
          <div className="flex flex-col justify-evenly  gap-4 bg-sky-300 w-[60%] mt-24 h-[75%] mx-auto">
            <h1 className=" text-5xl font-semibold mx-auto font-">Login</h1>
            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black "
              type="text"
              placeholder="Username"
            />
            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black "
              type="text"
              placeholder="Password"
            />
            <button className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto">
              Login
            </button>
            <div className="flex justify-evenly text-lg">
              <p>Don't have an account?</p>
              <Link to='/Register'>Register</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
