import React, { useState } from "react";
import axios from "axios";
import loginImg from "../assets/coke.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [name, setName] = useState("");
  console.log(college);

  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://lively-citizen-390711.de.r.appspot.com/auth/register",
        {
          username,
          password,
          college,
          name,
        }
      );

      navigate("/login");
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
              <h1 className="text-3xl text-center font-semibold">Register</h1>
              <form action="" onSubmit={handleSumbit}>
                <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="outline-none bg-transparent"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="flex mt-5 mb-4 bg-gray-200 rounded-md p-3 items-center space-x-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-none w-full bg-transparent"
                    placeholder="Password"
                  />
                </div>
                <div className="pb-2">
                  <select
                    name="college"
                    id="college"
                    placeholder="College"
                    onChange={(e) => setCollege(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled selected>
                      Select College
                    </option>
                    <option value="649622bda1cabe2562d48023">
                      BITS Pliani
                    </option>
                    <option value="649622bda1cabe2562d48028">
                      LMNIIT Jaipur
                    </option>
                    <option value="649622bda1cabe2562d4802d">
                      VIT Vellore
                    </option>
                    <option value="649622bda1cabe2562d48032">LPU Punjab</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full font-medium flex justify-between p-3 items-center  bg-[#D6FF79] text-center py-3 rounded bg-green text-white focus:outline-none my-1"
                >
                  <h2 className="text-black">Create Account</h2>
                </button>
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

export default SignUp;
