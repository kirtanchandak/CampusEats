import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Shops = () => {
  const { shop: shopID } = useParams();
  const collegeID = localStorage.getItem("college");
  const userID = localStorage.getItem("userID");
  const [shopData, setShopData] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubscription = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "https://lively-citizen-390711.de.r.appspot.com/saveSubscription",
        {
          shopID,
          userID,
          collegeID,
        }
      );
      alert("You are subscribed, check your subscription in profile page!");
    } catch (err) {
      console.log(err);
    }
    setIsButtonDisabled(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lively-citizen-390711.de.r.appspot.com/colleges/getShops/${collegeID}`
        );
        const shops = response.data.shops;
        console.log("The data is ", shops);
        const selectedShop = shops.find((shopItem) => shopItem._id === shopID);
        setShopData(selectedShop);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [shopID, collegeID]);

  const saveShop = async (e) => {};

  return (
    <>
      {shopData ? (
        <>
          <Layout>
            <div className="ml-4 py-4 border-b">
              <h1 className="text-3xl md:text-5xl font-[700]">
                {shopData.name}
              </h1>
              <div className="flex gap-3 pt-4">
                <img src={shopData.image} alt="shop-logo" className="w-10" />
                <h1 className="mt-1">{shopData.name}</h1>
              </div>
            </div>
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4">
                  <img
                    src={shopData.image}
                    alt="shop-img"
                    className="mb-4 rounded-md w-full"
                  />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h2 className="lg:text-5xl font-[700] hidden">
                    {shopData.name}
                  </h2>
                  <div className="text-sm w-72">
                    <div className="px-2 py-3 sm:pb-4.5 lg:py-5 bg-white lg:rounded-t-2xl lg:rounded-b-2xl border-b"></div>
                  </div>
                  <div className="pt-3">
                    <h1 className="text-xl font-semibold">Details:</h1>
                    <p className="text-gray-600 mt-3 font-medium">
                      {shopData.description}
                    </p>
                  </div>
                  <button
                    onClick={handleSubscription}
                    disabled={isButtonDisabled}
                    className="bg-blue-500 disabled:bg-slate-300 disabled:text-black hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded mt-3"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Layout>
        </>
      ) : (
        <Layout>
          <p>Loading shop details...</p>
        </Layout>
      )}
    </>
  );
};

export default Shops;
