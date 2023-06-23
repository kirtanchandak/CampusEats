import React from "react";
import Layout from "./Layout";
import boy from "../assets/Take Away-cuate.png";
import bits from "../assets/bits.gif";
import vit from "../assets/vit.png";
import lmniit from "../assets/lmniit.png";
import lpu from "../assets/lpu.png";

function Home() {
  return (
    <>
      <Layout>
        <section class="">
          <div class="grid max-w-screen-xl px-4 pt-24 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-24">
            <div class="mr-auto place-self-center lg:col-span-7 mt-2">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                Building digital <br />
                products & brands.
              </h1>
              <p class="max-w-2xl font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">
                This free and open-source landing page template was built using
                the utility classes from Tailwind CSS and based on the
                components from the Flowbite Library Blocks System .
              </p>
              <div class="sm:flex sm:space-y-0 sm:space-x-4 flex gap-5 pt-4">
                <button className="font-medium">Login</button>
                <button className="bg-[#D6FF79] px-2 py-2 rounded-md font-medium">
                  Register as a Business
                </button>
              </div>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex pt-7">
              <img src={boy} alt="hero-img" />
            </div>
          </div>
          {/* Brands Section */}
          <section class="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">Our Patners:</h1>
            <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 pt-5">
              <div class="grid grid-cols-2 gap-8  sm:gap-12 sm:grid-cols-3 lg:grid-cols-4">
                <a href="#" class="flex items-center lg:justify-center">
                  <img src={bits} alt="" srcset="" className="md:w-48 w-32" />
                </a>
                <a href="#" class="flex items-center lg:justify-center">
                  <img src={vit} alt="" srcset="" className="md:w-48 w-32" />
                </a>
                <a href="#" class="flex items-center lg:justify-center">
                  <img src={lmniit} alt="" srcset="" className="md:w-48 w-32" />
                </a>

                <a href="#" class="flex items-center lg:justify-center">
                  <img src={lpu} alt="" srcset="" className="md:w-48 w-32" />
                </a>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default Home;
