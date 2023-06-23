import React from "react";
import Layout from "./Layout";
import boy from "../assets/Take Away-cuate.png";

function Home() {
  return (
    <>
      <Layout>
        <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-24">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Building digital <br />
                products & brands.
              </h1>
              <p class="max-w-2xl font-light text-gray-500 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">
                This free and open-source landing page template was built using
                the utility classes from Tailwind CSS and based on the
                components from the Flowbite Library Blocks System .
              </p>
              <div class="sm:flex sm:space-y-0 sm:space-x-4 flex gap-5 pt-3">
                <button className="font-medium">Login</button>
                <button className="bg-[#D6FF79] px-2 py-2 rounded-md font-medium">
                  Register as a Business
                </button>
              </div>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex pt-4">
              <img src={boy} alt="hero image" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
