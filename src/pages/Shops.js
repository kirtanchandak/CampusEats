import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Shops = () => {
  const { shop } = useParams();
  const slug = localStorage.getItem("slug");
  const [shopData, setShopData] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleSubscription = () => {
    setIsButtonDisabled(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(slug);
        const response = await axios.get(
          "http://localhost:5000/colleges/getShops",
          {
            slug,
          }
        );
        const shops = response.data;
        console.log("The data is ", shops);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="ml-4 py-4 border-b">
        <h1 className="text-3xl md:text-5xl font-[700]">{shop.name}</h1>
        <div className="flex gap-3 pt-4">
          <img src="{ShopLogo}" alt="ngologo" className="w-10" />
          <h1 className="mt-1">{shop.name}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <img src={shop.img} alt="img" className="mb-4 rounded-md w-full" />
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h2 className="lg:text-5xl font-[700] hidden">{shop.name}</h2>
            <div className="text-sm w-72">
              <div className="px-2 py-3 sm:pb-4.5 lg:py-5 bg-white lg:rounded-t-2xl lg:rounded-b-2xl border-b"></div>
            </div>
            <div className="pt-3">
              <h1 className="text-xl font-semibold">Details:</h1>
              <p className="text-gray-600 mt-3 font-medium">
                {shop.description}
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
    </>
  );
};
export default Shops;