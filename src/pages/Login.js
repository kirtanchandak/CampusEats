import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginImg from "../assets/coke.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lively-citizen-390711.de.r.appspot.com/auth/login",
        {
          username,
          password,
        }
      );
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("slug", response.data.slug);
      window.localStorage.setItem("username", response.data.username);
      window.localStorage.setItem("name", response.data.name);
      window.localStorage.setItem("college", response.data.college);
      navigate("/");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-[#D6FF79] flex flex-col lg:flex-row h-screen p-3">
        <div className=" w-full lg:w-1/2 bg-grey-lighter flex rounded flex-col order-2 lg:order-1 bg-white">
          <div className="container w-full lg:w-4/6 mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded text-black w-full">
              <h1 className="text-3xl text-center font-semibold">
                Welcome Back
              </h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="outline-none bg-transparent"
                    placeholder="Username"
                  />
                </div>
                <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-none w-full bg-transparent"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-medium flex justify-between p-3 items-center  bg-[#D6FF79] text-center py-3 rounded bg-green text-white focus:outline-none my-1"
                >
                  <h2 className="text-black">Login</h2>
                </button>
                <div className=" my-4 flex w-full justify-between">
                  <h2>Don't have account?</h2>
                  <Link
                    to="/signup"
                    className="flex text-lg font-medium text-black items-center space-x-2"
                  >
                    <h2>Register</h2>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 flex items-center lg:order-2 justify-center">
          <img src={loginImg} className=" w-48 my-5 lg:w-96" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Login;
