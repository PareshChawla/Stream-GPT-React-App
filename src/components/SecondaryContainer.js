import React from "react";
import MoviesList from "./MoviesList";
import MovieCards from "./MovieCards";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store?.movies);

  return movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies && (
    <>
      <div className="bg-[#141414] min-h-screen">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MoviesList title={"Popular"} movies={movies?.popularMovies}/>
        <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies}/>
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
    </>
  );
};

export default SecondaryContainer;
