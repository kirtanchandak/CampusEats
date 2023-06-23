import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [name, setName] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
        college,
        name,
      });

      alert("Account created successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSumbit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 border-black"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="border-2 border-black"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="border-2 border-black"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          name="college"
          id="college"
          placeholder="College"
          onChange={(e) => setCollege(e.target.value)}
          value={college}
        >
          <option value="" disabled selected>
            Select College
          </option>
          <option>BITS, Pliani</option>
          <option>LMNIIT, Jaipur</option>
          <option>VIT, Vellore</option>
          <option>LPU, Punjab</option>
        </select>
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;
