import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

function Profile() {
  const name = window.localStorage.getItem("name");
  const userID = window.localStorage.getItem("userID");
  const college = window.localStorage.getItem("college");
  const [, , removeCookie] = useCookies(["access_token"]); // Update this line
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);

  const handleLogout = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
      <Layout>
        <div className="pt-20 pb-32">
          <h1 className="text-center font-medium text-lg">Profile Page</h1>
          <h2 className="text-center text-gray-600 text-sm">Name: {name}</h2>
          <h2 className="text-center text-gray-600 text-sm">
            College: {college}
          </h2>

          <div className="mt-8">
            <h1 className="text-lg font-medium">Subscriptions</h1>
            <hr className="mt-2 border-gray-300" />

            <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {subscriptions.map((subscription) => (
                <div
                  key={subscription._id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h3 className="text-lg font-medium">
                    {subscription.shop.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {subscription.shop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
