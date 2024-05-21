import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white">
        <div className="mt-28 md:mt-32 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-3xl">
            We're Delighted to Have you{" "}
            <span className="text-pink-500">here.! ❤</span>{" "}
          </h1>
          <p className="mt-6 text-lg ">
            Explore our curated selection of bookstore courses designed to
            elevate your literary knowledge and skills. From writing workshops
            to literature analysis, each course offers expert insights and
            practical techniques. Enroll today and embark on a transformative
            journey to literary mastery, enriching your reading and writing
            experience.
          </p>
          <a
            href="/"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md mt-6"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">BACK</span>
            </span>
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
