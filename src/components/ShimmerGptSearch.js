import React from "react";

const ShimmerGptSearch = () => {
  return (
    <div className="min-h-screen relative mt-[25%] bg-black">
        <div className="grid grid-cols-7 flex-wrap overflow-x-scroll animate-pulse">
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div className="w-48 h-72 rounded-lg m-10 bg-slate-900"></div>
            ))}
        </div>
    </div>
  );
};

export default ShimmerGptSearch;
