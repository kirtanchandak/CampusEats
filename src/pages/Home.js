import React from "react";
import Layout from "../components/Layout";
import boy from "../assets/Take Away-cuate.png";
import bits from "../assets/bits.gif";
import vit from "../assets/vit.png";
import lmniit from "../assets/lmniit.png";
import lpu from "../assets/lpu.png";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import food from "../assets/food.png";
import subscribe from "../assets/Subscriber-bro.png";
import login from "../assets/Mobile login-pana.png";

function Home() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const college = localStorage.getItem("college");
  return (
    <>
      <Layout>
        <section class="">
          <div class="grid max-w-screen-xl px-4 pt-24 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-24 lg:pb-12">
            <div class="mr-auto place-self-center lg:col-span-7 mt-2">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Connecting locals <br />
                for affordable meals.
              </h1>
              <p class="max-w-2xl font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">
                CampusEats is the ultimate solution for students facing food
                insecurity. We partner with local businesses to provide
                exclusive discounts and deals on affordable meals, ensuring that
                no student goes hungry.
              </p>
              <div class="sm:flex sm:space-y-0 sm:space-x-4 flex pt-4 gap-5">
                <Link className="font-medium mt-2" to="/login">
                  Login
                </Link>
                {cookies.access_token ? (
                  <a
                    href={`deals/${college}`}
                    className="bg-[#D6FF79] px-2 py-2 rounded-md font-medium"
                  >
                    Explore Deals
                  </a>
                ) : (
                  <a
                    href={`deals/${college}`}
                    className="bg-[#D6FF79] px-2 py-2 rounded-md font-medium"
                  >
                    Explore Deals
                  </a>
                )}
              </div>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex pt-7">
              <img src={boy} alt="hero-img" />
            </div>
          </div>
          {/* Brands Section */}
          <section class="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">Our Patners:</h1>
            <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-11 pt-5">
              <div class="grid grid-cols-2 gap-8  sm:gap-12 sm:grid-cols-3 lg:grid-cols-4">
                <img src={bits} alt="bits" srcset="" className="md:w-48 w-32" />
                <img src={vit} alt="vit" srcset="" className="md:w-48 w-32" />
                <img
                  src={lmniit}
                  alt="lmniit"
                  srcset=""
                  className="md:w-48 w-32"
                />
                <img src={lpu} alt="lpu" srcset="" className="md:w-48 w-32" />
              </div>
            </div>
          </section>
        </section>
        {/* How it Works */}

        <div className="text-center py-4">
          <h1 className="text-3xl font-[700]">How it Works?</h1>
        </div>
        <div className="flex justify-center items-center md:pt-12 pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0 i9prqz1">
                <img
                  src={login}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">Register</h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Register yourself as a student on our platform and get acccess
                  to all the amazing deals and offers on your favorite food
                  items, and regular meals near your campus.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0">
                <img
                  src={food}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">Search for an food</h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Search for the food items, complete meals, or restaurants near
                  your campus and get amazing deals and offers on your favorite.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0 i9prqz1">
                <img
                  src={subscribe}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">
                    Subscribe for the best Deals
                  </h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Find amazing deals and offers on your favorite food items, and
                  regular lunch and dinner meals near your campus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Us */}
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl ">
              Trusted by over 10,000 students across India
            </h2>
            <p class="font-light text-gray-500 sm:text-xl ">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                class="w-10 h-10 mb-2 text-[#98da00] md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold ">10K+ Users</h3>
              <p class="font-light text-gray-500 ">
                Trusted by over 10K+ students across India
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-[#98da00] md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold ">100+ colleges</h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                We have covered almost all major colleges in India
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-[#98da00] md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold">1+ Lack</h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Orders Per Month
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
