import { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../assets/Images/login.jpg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Login!");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="bg-[#fca3b1] flex flex-col justify-center">
          <h2 className="text-2xl dark:text-white font-bold text-center mb-7">
            Welcome back to Dium
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
          >
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                required
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>
            <NavLink to="/product">
              <button
                type="submit"
                className="w-full my-7 py-2 bg-[#311180] shadow-lg shadow-[#311180]-500/50 hover:shadow-[#311180]-500/40 text-white font-semibold rounded-lg"
              >
                Login
              </button>
            </NavLink>
          </form>
        </div>

        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={login} alt="" />
        </div>
      </div>
    </>
  );
};
