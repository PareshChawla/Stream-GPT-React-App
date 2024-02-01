import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import ShimmerBrowse from "./ShimmerBrowse";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const shimmerTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the duration as needed (in milliseconds)

    return () => clearTimeout(shimmerTimeout);
  }, []);

  if (loading) return <ShimmerBrowse />;

  if (!movies) return;

  const { title, overview, id, backdrop_path, genre_ids } = movies[0];

  return (
    <>
      <div>
        <VideoTitle movieID={id} title={title} overview={overview} genreIDS={genre_ids} />
        <VideoBackground movieID={id} backdropPath={backdrop_path} />
      </div>
    </>
  );
};

export default MainContainer;
