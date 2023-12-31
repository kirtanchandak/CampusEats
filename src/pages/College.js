import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../components/Layout";

function ShopListByID() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [shops, setShops] = useState([]);
  const collegeID = localStorage.getItem("college");

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lively-citizen-390711.de.r.appspot.com/colleges/getShops/${collegeID}`
        );
        const shopsie = response.data.shops;
        console.log("The data is ", shops);
        setShops(shopsie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {cookies.access_token ? (
        <Layout>
          <div className="pt-20 pb-32">
            <div className="text-center p-2 pb-14">
              <h1 className="text-5xl font-[700]">Shops Near You</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {shops.map((shop) => (
                <Link to={`/deals/${collegeID}/${shop._id}`}>
                  <div class="flex flex-col items-center space-y-2 px-6 shadow-md">
                    <div class="mt-3 md:mt-0">
                      <img
                        class="rounded-t-lg"
                        src={shop.image}
                        alt="eventimg"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div class="flex flex-col justify-between w-full h-full p-3">
                      <div class="text-xl font-semibold">{shop.title}</div>
                      <p
                        className="font-medium text-xl
                    "
                      >
                        {shop.name}
                      </p>

                      <p class="text-gray-700 font-medium text-base pt-0 pb-1 line-clamp-3">
                        {shop.description}
                      </p>
                      <Link to={`/deals/${id}/${shop._id}`}>
                        <button class="bg-[#576CBC] rounded-lg btn px-2 py-1 mt-2 text-white">
                          View Shop
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="py-36 text-center">
            <h1 className="text-2xl font-semibold">
              First Login to View Shops
            </h1>
            <a
              href="/login"
              className="bg-[#D6FF79] px-2 py-1 rounded-md text-xl mt-3"
            >
              Login
            </a>
          </div>
        </Layout>
      )}
    </>
  );
}

export default ShopListByID;
