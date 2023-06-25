import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../components/Layout";

function ShopListByID() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [shops, setShops] = useState([]);
  const college = localStorage.getItem("college");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/colleges/get`);
        const colleges = response.data;
        const college = colleges.find((col) => col.college === id);
        if (college) {
          setShops(college.shops);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
                <Link to={`/deals/${college}/${shop._id}`}>
                  <div class="flex flex-col items-center space-y-2 px-6 shadow-md">
                    <div class="mt-3 md:mt-0">
                      <img
                        class="rounded-t-lg"
                        src={shop.img}
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
