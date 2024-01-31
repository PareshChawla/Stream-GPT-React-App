import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAddMovieTrailer from "../hooks/useAddMovieTrailer";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ movieID, backdropPath }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useAddMovieTrailer(movieID);

  return (
    <>
      <div className="hidden lg:block lg:w-full lg:h-full lg:overflow-x-hidden">
        <iframe
          className="lg:w-full lg:aspect-video lg:brightness-50"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          }
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="lg:hidden w-full h-[680px] flex justify-center bg-gradient-to-b from-blue-500 via-blue-600 to-black">
        <img src={IMG_CDN_URL+backdropPath} className="w-[90%] h-[450px] object-cover rounded-lg mt-[72px] brightness-75" alt="backdrop-img" />
      </div>
    </>
  );
};

export default VideoBackground;
