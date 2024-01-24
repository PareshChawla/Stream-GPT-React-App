import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAddMovieTrailer from "../hooks/useAddMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useAddMovieTrailer(movieID);

  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <iframe
          className="w-full aspect-video brightness-50"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
