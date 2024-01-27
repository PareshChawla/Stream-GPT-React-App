import React from "react";
import BrowseHeader from "./BrowseHeader";

const GptSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-700 to-red-700">
      <BrowseHeader />
      <div className="min-h-screen flex items-center justify-center">
        <form className="">
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
