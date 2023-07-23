import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "../../api/axios";
const LOGIN_URL = "/login";

export const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;

      // Save the accessToken to local storage
      localStorage.setItem("accessToken", accessToken);
      console.log(localStorage);

      setAuth({ user, pwd, accessToken });
      console.log(setAuth);
      setUser("");
      setPwd("");
      navigate("/product");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="w-full flex justify-center items-center h-screen">
      <div className="w-1/2 min-h-400 flex flex-col justify-start p-4 bg-black bg-opacity-40">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form
          className="flex flex-col justify-evenly flex-grow pb-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          {/* <NavLink to="/product"> */}
          <button>Sign In</button>
          {/* </NavLink> */}
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <NavLink to="/register">Register</NavLink>
          </span>
          <span className="line px-5">
            <NavLink to="/logout">Log Out</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
};
