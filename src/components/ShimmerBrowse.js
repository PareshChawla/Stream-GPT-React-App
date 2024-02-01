import React from "react";
import BrowseHeader from "./BrowseHeader";

const ShimmerBrowse = () => {
  return (
    <>
      <BrowseHeader />
      <div className="hidden lg:block h-[200vh] bg-[rgb(20,20,20)] relative">
        <div className="absolute bg-[#1d1d1e] w-2/6 h-24 top-52 ml-12 animate-pulse"></div>
        <div className="absolute bg-[#1d1d1e] w-[28%] h-6 ml-12 top-[23%] animate-pulse"></div>
        <div className="absolute bg-[#1d1d1e] w-[26%] h-6 ml-12 top-[25%] animate-pulse"></div>
        <div className="absolute bg-[#1d1d1e] w-[25%] h-6 ml-12 top-[27%] animate-pulse"></div>
        <div className="absolute bg-[#1d1d1e] w-[27%] h-6 ml-12 top-[29%] animate-pulse"></div>
        <div className="flex flex-row w-full absolute top-[32%] h-24">
          <div className="relative bg-[#1d1d1e] w-28 h-10 ml-12 top-5 animate-pulse"></div>
          <div className="relative bg-[#1d1d1e] w-40 h-10 ml-4 top-5 animate-pulse"></div>
        </div>
        <div className="absolute top-[41%] grid grid-cols-7 w-full m-5">
          {Array(14)
            .fill("")
            .map((e, index) => (
              <div className=" h-72 w-48 bg-[#1d1d1e] m-3 md:m-0 md:my-4 justify-between p-2 rounded-lg animate-pulse"></div>
            ))}
        </div>
      </div>
      <div className="flex justify-center lg:hidden h-[200vh] bg-[rgb(20,20,20)] relative">
        <div className="absolute flex flex-col justify-center items-center bg-[#1d1d1e] w-[90%] h-[450px] mt-[72px] animate-pulse">
          <div className="absolute bg-[#262628] w-[75%] h-16 top-[55%] animate-pulse"></div>
          <div className="absolute bg-[#262628] w-[70%] h-6 my-6 top-[70%] animate-pulse"></div>
          <div className="flex flex-row w-full absolute top-[79%] h-20">
            <div className="absolute bg-[#262628] w-24 h-10 ml-12 top-[28%] animate-pulse"></div>
            <div className="absolute bg-[#262628] w-32 h-10 ml-40 top-[28%] animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-[41%] grid grid-cols-2 w-full m-5">
          {Array(6)
            .fill("")
            .map((e, index) => (
              <div className="w-36 h-56 bg-[#1d1d1e] m-3 justify-between p-2 rounded-lg animate-pulse"></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShimmerBrowse;
