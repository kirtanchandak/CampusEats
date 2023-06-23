import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className="flex flex-col md:flex-row bg-yellow-200 
      text-2xl justify-between fixed w-screen font-poppins"
      >
        <div className="flex items-center">
          <a href="/" className="pl-2 py-4 mr-auto md:mr-0 font-[600]">
            CampusEats🍽️
          </a>
          <div className="md:hidden mr-2 cursor-pointer" onClick={toggle}>
            <FaHamburger />
          </div>
        </div>
        <div className="a-content hidden md:flex mt-4">
          <ul className="flex gap-10" id="nav">
            <li>
              <a href="/cart" className="">
                Cart 🛒
              </a>
            </li>
            <li>
              <a href="/" className="">
                Shop
              </a>
            </li>
            <li>
              <a href="/login" className="mr-4">
                Login
              </a>
            </li>
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
          <a href="/login" className="px-6">
            Login
          </a>

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
