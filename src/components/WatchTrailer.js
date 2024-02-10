import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAddMovieTrailer from '../hooks/useAddMovieTrailer';
import { API_OPTIONS } from '../utils/constants';
import BrowseHeader from './BrowseHeader';

const WatchTrailer = () => {
  const { watchId } = useParams();
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/' +
          watchId +
          '/videos?language=en-US',
        API_OPTIONS
      );
      const videos = await data.json();

      const filterData = videos.results.filter(
        (video) => video.type === 'Trailer'
      );
      const trailer = filterData.length ? filterData[0] : videos.results[0];

      if (!trailer) {
        throw new Error('No trailer found');
      }

      const videoKey = trailer.key;
      setMovieTrailer(videoKey);
    } catch (error) {
      setError('No trailer found!!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, [watchId]);

  useAddMovieTrailer(watchId);


  if (error) {
    return <p className='text-6xl font-bold bg-gradient-to-b from-red-500 to-black flex justify-center pt-64 min-h-screen'>{error}</p>; // Display an error message or a placeholder image
  }

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowseHeader />
      <div className="w-full md:h-full overflow-x-hidden pt-16 md:pt-0">
        <iframe
          className="w-full aspect-square md:aspect-video"
          src={
            'https://www.youtube.com/embed/' +
            movieTrailer +
            '?autoplay=1&mute=1&loop=1'
          }
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchTrailer;
