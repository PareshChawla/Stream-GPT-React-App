import React from "react";
import MovieCards from "./MovieCards";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const MoviesList = ({ title, movies }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7, // Adjust the number of slidesToShow based on your design
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PrevArrow = ({ onClick, currentSlide }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`custom-prev-arrow left-0 top-28 lg:top-36 text-2xl lg:text-5xl text-white ${
          currentSlide === 0 ? "hidden" : ""
        }`}
      >
        <FaAngleLeft />
      </button>
    );
  };

  const NextArrow = ({ onClick, currentSlide, slideCount }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`custom-next-arrow right-3 lg:right-5 top-28 lg:top-36 text-2xl lg:text-5xl text-white ${
          currentSlide === slideCount - 1 ? "hidden" : ""
        }`}
      >
        <FaAngleRight />
      </button>
    );
  };

  return (
    <div className="ml-4 -mt-24 lg:ml-12 lg:-mt-64 relative">
      <h1 className="text-lg lg:text-xl text-white font-semibold py-2">
        {title}
      </h1>
      <Slider
        {...settings}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        className="slider-container"
      >
        {movies.map((movie) => (
          <div className="pb-28 lg:pb-72" key={movie.id}>
            <Link to={"/watch/" + movie.id}>
              <MovieCards posterPath={movie?.poster_path} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesList;
