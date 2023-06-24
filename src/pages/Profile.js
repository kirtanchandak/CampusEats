import React from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const name = window.localStorage.getItem("name");
  const userID = window.localStorage.getItem("userID");
  const college = window.localStorage.getItem("college");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies("");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/saveSubscription/${userID}`
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSubscriptions();
  });

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
