import React, { useState } from "react";
import play from "../assets/images/playbtn.png";
import info from "../assets/images/info.png";
import useGenres from "../hooks/useGenres";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ movieID, title, overview, genreIDS }) => {
  const [showOverview, setShowOverview] = useState(true);
  const navigate = useNavigate();
  const genres = useGenres();

  const handleTitleClick = () => {
    setShowOverview(!showOverview);
  };

  const getGenreNames = () => {
    return genreIDS.map((genreID, index) => {
      const genre = genres.find((g) => g.id === genreID);
      const prefix = index === 0 ? "" : " • ";
      return genre ? `${prefix}${genre.name}` : `• Unknown Genre`;
    });
  };

  const handlePlayClick = () => {
    navigate("/watch/"+movieID);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full lg:w-[80%] lg:block pt-80 lg:pt-52 lg:ml-12 absolute z-10 text-white">
        <h1
          className="text-2xl lg:text-6xl lg:text-start font-bold lg:ml-0 w-[75%] lg:w-2/5 font-serif cursor-pointer lg:mb-3 text-center"
          onClick={handleTitleClick}
        >
          {title}
        </h1>
        {genres.length > 0 && (
          <p className="lg:hidden my-3 text-center">
            {getGenreNames().join(" ")}
          </p>
        )}
        {showOverview && (
          <p className="hidden lg:block text-lg w-2/5 my-4">{overview}</p>
        )}
        <div className="flex justify-center lg:justify-normal gap-2 lg:gap-2 mt-3 lg:mt-6">
          <button className="bg-white text-black font-semibold flex items-center justify-center gap-2 w-24  lg:w-28 px-4 py-2 rounded-lg hover:bg-gray-300"
          onClick={handlePlayClick}>
            <img className="h-4 w-4 lg:h-5 lg:w-5" src={play} alt="play-icon" />
            Play
          </button>
          <button className="flex items-center justify-center gap-2 w-32 lg:w-40 rounded-lg font-semibold bg-[#575551] text-white opacity-90">
            <img className="h-5 w-5 lg:h-6 lg:w-6" src={info} alt="play-icon" />
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
