import React from "react";

const ShimmerGptSearch = () => {
  return (
    <div className="min-h-screen relative mt-[90%] lg:mt-[25%] bg-black">
        <div className="grid grid-cols-2 lg:grid-cols-7 overflow-x-scroll animate-pulse">
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div key={index} className="w-36 h-56 lg:w-48 lg:h-72 rounded-lg m-4 lg:m-10 bg-slate-900"></div>
            ))}
        </div>
    </div>
  );
};

export default ShimmerGptSearch;
