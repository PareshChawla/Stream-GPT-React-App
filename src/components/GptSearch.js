import React, { useRef, useState } from "react";
import BrowseHeader from "./BrowseHeader";
import Search from "../assets/images/search.png";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult, removeGptMovieResult } from "../utils/gptSlice";
import Cross from "../assets/images/cross.png";
import ShimmerGptSearch from "./ShimmerGptSearch";

const GptSearch = () => {
  const[crossImg, setCrossImg] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [gptError, setGptError] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    const inputText = searchText.current.value.trim();

    if (inputText === "") {
      return;
    }

    setShowShimmer(true);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies  for the query " +
      inputText +
      ". Only give me name of 5 movies, comma separated like the example result given ahead. Example Result: Welcome, Hera Pheri, Bhagam Bhag, Dhamaal, Dhol";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "system", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      setGptError(true);
    }
    const gptMovies = gptResults.choices[0]?.message?.content.split(", ");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => {
      return searchMovieTMDB(movie);
    });

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    setTimeout(() => {
      setShowShimmer(false);
    }, 2000);
  };

  const handleInputChange = () => {
    const inputText = searchText.current.value.trim();

    if(inputText) {
      setCrossImg(true);
    }

    if (inputText === "") {
      dispatch(removeGptMovieResult());
      setCrossImg(false);
    }
  };

  const handleClearClick = () => {
    setCrossImg(false);
    dispatch(removeGptMovieResult());
    searchText.current.value = "";
  };

  return (
    <>
    <div className="absolute bg-gradient-to-b from-blue-600 via-black to-black w-full object-cover">
      <BrowseHeader />
      <div className="min-h-screen flex flex-col items-center pt-[8%]">
        <h1 className="text-white text-5xl font-bold">
          Unlock Cinematic Wonders with AI Magic!
        </h1>
        <p className="text-gray-400 text-lg py-3">
          Curated Selections for a Memorable Family Movie Night
        </p>
        <form
          className="flex py-5 w-full h-28 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className="w-[85%] ml-12 mr-6 rounded-md bg-gray-600 text-lg px-16 bg-contain bg-no-repeat text-white relative"
            placeholder="Search movies, shows and more"
            style={{
              backgroundImage: `url(${Search})`,
              backgroundSize: "25px",
              backgroundPosition: "20px center",
            }}
            onChange={handleInputChange}
          />
          {
            crossImg &&
            <img
              className="absolute h-6 w-6 left-[85%] top-[37%] cursor-pointer"
              src={Cross}
              alt="clear"
              onClick={handleClearClick}
            />
          }
          <button
            className="w-[6%] mr-12 rounded-md bg-red-800 text-white hover:bg-red-900"
            onClick={handleGptSearchClick}
          >
            Search
          </button>
        </form>
        {gptError && (
          <p className="text-red-500 text-lg">
            GPT API Failed!! Sorry for the inconvenience
          </p>
        )}
      </div>
    </div>
    {showShimmer && <div className="text-white text-7xl w-full h-full text-center mt-[25%] relative z-100">
        <ShimmerGptSearch />
      </div>}
  
    </>
  );
};

export default GptSearch;
