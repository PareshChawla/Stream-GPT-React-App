import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="relative mt-[100%] lg:mt-[41%] min-h-screen bg-black">
      <div className="lg:p-5">
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
