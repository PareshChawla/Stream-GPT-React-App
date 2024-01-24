import React from "react";
import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import BrowseFooter from "./BrowseFooter";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <div>
        <BrowseHeader />
        <MainContainer />
        <SecondaryContainer />
        <BrowseFooter />
      </div>
    </>
  );
};

export default Browse;
