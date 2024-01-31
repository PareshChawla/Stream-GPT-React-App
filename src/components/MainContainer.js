import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const { title, overview, id, backdrop_path, genre_ids } = movies[0];

  return (
    <>
      <div>
        <VideoTitle title={title} overview={overview} genreIDS={genre_ids} />
        <VideoBackground movieID={id} backdropPath={backdrop_path} />
      </div>
    </>
  );
};

export default MainContainer;
