import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../components/Layout";

function ShopListBySlug() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [shops, setShops] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/colleges/get`);
        const colleges = response.data;
        const college = colleges.find((col) => col.slug === slug);
        if (college) {
          setShops(college.shops);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      {cookies.access_token ? (
        <Layout>
          <div className="pt-20">
            <h2>Shops:</h2>
            <ul>
              {shops.map((shop) => (
                <li key={shop._id.$oid}>
                  <h3>{shop.name}</h3>
                  <p>{shop.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="py-36 text-center">
            <h1 className="text-2xl font-semibold">
              First Login to View Shops
            </h1>
            <button className="bg-[#D6FF79] px-2 py-1 rounded-md text-xl mt-3">
              Login
            </button>
          </div>
        </Layout>
      )}
    </>
  );
}

export default ShopListBySlug;
