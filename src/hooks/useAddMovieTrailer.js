import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddMovieTrailer = (movieID) => {
        const dispatch = useDispatch();
        const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
      
        const getMovieVideo = async () => {
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              movieID +
              "/videos?language=en-US",
            API_OPTIONS
          );
          const videos = await data.json();
          console.log(videos);
      
          const filterData = videos.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = filterData.length ? filterData[0] : videos.results[0];
          console.log(trailer);
          dispatch(addTrailerVideo(trailer));
        };
      
        useEffect(() => {
          getMovieVideo();
        }, []);
}

export default useAddMovieTrailer;