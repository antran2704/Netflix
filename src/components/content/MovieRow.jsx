import { memo } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import * as types from "../store/actions";
import "./content.scss";
import Next from "./Next";
import Prev from "./Prev";
function MovieRow({ movies, title, isNetflix, idSection}) {
  const dispatch = useDispatch()
  var settings = {
    dots: false,
    infinite: true,
    touchMove: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <Next isNetflix={isNetflix} />,
    prevArrow: <Prev isNetflix={isNetflix} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  function handleSetMovie(movie) {
    dispatch(types.getMoviesDetail(movie))
  }
  return (
    <div className="movie-row" id= {idSection}>
      <h1 className="title-content">{title}</h1>
      <Slider {...settings} className="content-list">
        {
          movies &&
          movies.length > 0 &&
          movies.map(function (movie, index) {
            let imageUrl;
            if (isNetflix) {
              imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            } else {
              imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            }
            return (
              <div
                className={`content-wrap ${isNetflix ? "isNetflix" : ""}`}
                key={index}
                onClick = {() => {
                    handleSetMovie(movie)
                }}
              >
                <img className="img-content" src={imageUrl} alt="" />
                <p className="name-movie">
                  {movie.name || movie.original_name || movie.title || movie.original_title}
                </p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default memo(MovieRow);
