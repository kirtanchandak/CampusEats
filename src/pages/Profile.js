import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Profile() {
  const name = window.localStorage.getItem("name");
  const college = window.localStorage.getItem("college");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies(["access_token"], "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };
  return (
    <>
      <div>
        <h1>Profile Page</h1>
        <h2>Name: {name}</h2>
        <h2>College: {college}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Profile;
