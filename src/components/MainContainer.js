import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const { title, overview, id } = movies[0];

  return (
    <>
      <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieID={id} />
      </div>
    </>
  );
};

export default MainContainer;
