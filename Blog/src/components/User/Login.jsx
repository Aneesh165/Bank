import { useState } from "react";
import axios from "axios";
import Bank from "../../assets/Bank.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        console.log("Login successful!");
        navigate("/home");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <section className="h-[100vh] flex bg-stone-400">
        <div className="h-[100%] w-[25%]">
          <img className="h-[100%] object-right" src={Bank} alt="Bank Logo"/>
        </div>
        <form
          onSubmit={handleLogin}
          className="w-[80%] h-[100%] bg-white my-auto"
        >
          <div className="flex flex-col justify-evenly gap-4 bg-sky-300 w-[60%] mt-24 h-[75%] mx-auto">
            <h1 className="text-5xl font-semibold mx-auto">Login</h1>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-3/4 text-xl h-14 mx-auto bg-inherit border-b-2 border-black placeholder:text-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="px-9 rounded-3xl bg-white text-xl py-3 mx-auto "
            >
              Login
            </button>

            <div className="flex justify-evenly text-lg">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
