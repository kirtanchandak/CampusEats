import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
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
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
