import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShopListBySlug() {
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
    <div>
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
  );
}

export default ShopListBySlug;
