import React from "react";
import BrowseHeader from "./BrowseHeader";
import Search from "../assets/images/search.png";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-black to-black">
      <BrowseHeader />
      <div className="min-h-screen flex flex-col items-center pt-[8%]">
      <h1 className="text-white text-5xl font-bold">Unlock Cinematic Wonders with AI Magic!</h1>
      <p className="text-gray-400 text-lg py-3">Curated Selections for a Memorable Family Movie Night</p>
        <form className="flex py-5 w-full h-28 justify-center">
          <input type="text" 
            className="w-[85%] ml-12 mr-6 rounded-md bg-gray-600 text-lg px-16 bg-contain bg-no-repeat text-white"
            placeholder="Search movies, shows and more"
            style={{
                backgroundImage: `url(${Search})`,
                backgroundSize: '25px',
                backgroundPosition: '20px center',
              }}
          />
          <button className="w-[6%] mr-12 rounded-md bg-red-800 text-white">Search</button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
