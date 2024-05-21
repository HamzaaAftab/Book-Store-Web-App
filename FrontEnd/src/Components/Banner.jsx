import React from "react";
import banner from "../../public/Banner.png"
import '../Components/Banner.css'

function Banner() {
  return (
    <>
      {/* Parent Div */}
      <div className="max-w-screen-2xl dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4 flex flex-col md:flex-row md: mt-16 mb-8 ">
        {/* LEFT SIDE DIV */}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex md:mt-16 mt-7">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold ">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-600">new Everyday!!!</span>
            </h1>
            <p className="text-xl">
              Discover new worlds on every page. From classics to bestsellers,
              find your next favorite read at our bookstore today!
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:text-white dark:bg-transparent dark:border dark:grow dark:outline outline-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow px-2"
                placeholder="Enter your email to login"
              />
            </label>
            {/* BUTTON */}
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-pink-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-pink-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                SECONDARY
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE DIV */}
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} alt="" className=""/>
        </div>

      </div>
    </>
  );
}

export default Banner;
