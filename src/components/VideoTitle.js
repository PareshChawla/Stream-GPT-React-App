import React, { useState } from "react";
import play from "../assets/images/playbtn.png";
import info from "../assets/images/info.png";

const VideoTitle = ({ title, overview }) => {
  const [showOverview, setShowOverview] = useState(true);

  const handleTitleClick = () => {
    setShowOverview(!showOverview);
  };
  return (
    <>
      <div className="pt-52 ml-12 absolute z-10 text-white">
        <h1
          className="text-6xl font-bold w-2/5 font-serif cursor-pointer mb-3"
          onClick={handleTitleClick}
        >
          {title}
        </h1>
        {showOverview && <p className="text-md w-2/5 my-4">{overview}</p>}
        <div className="flex gap-2 mt-6">
          <button className="bg-white text-black font-semibold flex items-center justify-center gap-2 w-28 px-4 py-2 rounded-md hover:bg-gray-300">
            <img className="h-5 w-5" src={play} alt="play-icon" />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 w-40 rounded-md font-semibold bg-[#575551] text-white opacity-90">
          <img className="h-6 w-6" src={info} alt="play-icon" />
          More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
