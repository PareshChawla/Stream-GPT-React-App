import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="ml-4 -mt-24 lg:ml-12 lg:-mt-64 relative">
        <h1 className="text-lg lg:text-xl text-white font-semibold py-2">{title}</h1> 
      <div className="flex overflow-x-scroll scrollbar-hide pb-28 lg:pb-72">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
