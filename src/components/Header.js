import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { useCookies } from "react-cookie";
import profile from "../assets/profile.png";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const college = localStorage.getItem("college");

  const username = localStorage.getItem("username");
  console.log(username);

  return (
    <div>
      <nav
        className="flex flex-col md:flex-row bg-[#D6FF79] 
      text-2xl justify-between fixed w-screen font-poppins"
      >
        <div className="flex items-center">
          <a href="/" className="pl-2 py-4 mr-auto md:mr-0 font-[600]">
            CampusEats🍽️
          </a>
          <div className="md:hidden mr-2 cursor-pointer" onClick={toggle}>
            {!cookies.access_token ? (
              <FaHamburger />
            ) : (
              <>
                <img src={profile} alt="profile-pic" className="w-8" />
              </>
            )}
          </div>
        </div>
        <div className="a-content hidden md:flex mt-4">
          <ul className="flex gap-10" id="nav">
            <li>
              <a href={`/deals/${college}`} className="">
                Shop
              </a>
            </li>
            {!cookies.access_token ? (
              <li>
                <a href="/login" className="mr-4">
                  Login
                </a>
              </li>
            ) : (
              <li>
                <a href={`/profile/${username}`}>
                  <img
                    src={profile}
                    alt="profile-pic"
                    className="w-8 pb-3 mr-6"
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
        {/*for mobile*/}
        <div
          className={
            isOpen
              ? "grid grid-rows-3 text-center items-center w-full"
              : "hidden"
          }
          onClick={toggle}
        >
          {!cookies.access_token ? (
            <a href="/login" className="px-6">
              Login
            </a>
          ) : (
            <a href={`/profile/${username}`} className="px-6">
              Profile
            </a>
          )}

          <a href="/" className="px-6">
            Shop
          </a>
          <a href="/cart" className="px-6">
            Cart 🛒
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
