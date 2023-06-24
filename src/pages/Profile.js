import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const name = window.localStorage.getItem("name");
  const userID = window.localStorage.getItem("userID");
  const college = window.localStorage.getItem("college");
  const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);

  const handleLogout = () => {
    removeCookie("access_token");
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/saveSubscription/${userID}`
        );
        setSubscriptions(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSubscriptions();
  }, [userID]);

  return (
    <>
      <div>
        <h1>Profile Page</h1>
        <h2>Name: {name}</h2>
        <h2>College: {college}</h2>
        <button onClick={handleLogout}>Logout</button>

        <br />
        <br />
        <h1>Subscriptions</h1>
        <hr />
        {subscriptions.map((subscription) => (
          <div key={subscription._id}>
            <h3>{subscription.shop.name}</h3>
            <p>{subscription.shop.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;
