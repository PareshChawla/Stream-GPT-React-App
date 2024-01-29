import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="ml-12 -mt-64 relative">
        <h1 className="text-xl text-white font-semibold py-2">{title}</h1> 
      <div className="flex overflow-x-scroll scrollbar-hide pb-72">
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
