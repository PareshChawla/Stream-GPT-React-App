import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAddMovieTrailer from '../hooks/useAddMovieTrailer';
import { API_OPTIONS } from '../utils/constants';
import BrowseHeader from "./BrowseHeader";


const WatchTrailer = () => {
    const {watchId} = useParams();
    const [movieTrailer, setMovieTrailer] = useState(null);


    const getMovieVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            watchId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const videos = await data.json();
    
        const filterData = videos.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : videos.results[0];
        const videoKey = trailer.key;
        setMovieTrailer(videoKey);
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);

    useAddMovieTrailer(watchId);
  return (
    <div className='bg-[#141414] min-h-screen'>
    <BrowseHeader />
    <div className="w-full md:h-full overflow-x-hidden pt-16 md:pt-0">
    <iframe
      className="w-full aspect-square md:aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        movieTrailer +
        "?autoplay=1&mute=1&loop=1"
      }
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
  </div>
  )
}

export default WatchTrailer