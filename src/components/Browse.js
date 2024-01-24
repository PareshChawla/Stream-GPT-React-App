import React from "react";
import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <div className="flex">
        <BrowseHeader />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
