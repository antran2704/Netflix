import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useViewport } from "../../hooks";
import * as types from "../store/actions";
import { original_img } from "../store/actions";
import "./search_movies.scss";
const useQuery = () => new URLSearchParams(useLocation().search)
function SearchMovies() {
  const width = useViewport();

  const dispatch = useDispatch()
  const keywords = useQuery().get('keywords')
  const {SearchMovies, GetmoviesDetail} = useSelector((state) => state.infoMovies)
  useEffect(() => {
    const handler = setTimeout(function() {
      if(keywords.length > 0) {
        dispatch(types.searchMovies(keywords))
      }
    },1000)
    
    return () => clearTimeout(handler)
  },[keywords,dispatch])

  function handleGetMovies(movie) {
    dispatch(types.getMoviesDetail(movie))
  }
  return (
    <div>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="search_movie"
          style={{
            gridTemplateColumns: `repeat(${
              width > 1200 ? 5 : width > 992 ? 4 : width > 768 ? 3 : width > 600 ? 2 : 1
            },auto)`,
          }}
        >
          {SearchMovies.map(function(movie, index) {
            if(movie.backdrop_path != null) {
              return (
                <div 
                onClick={() => {
                  handleGetMovies(movie)
                }} 
                className="search_item" key={index}>
                  <img className="search_img" src={`${original_img}${movie.backdrop_path || movie.known_for[0].backdrop_path}`} alt="" />
                  <p className="search_title">{movie.name || movie.original_title}</p>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="search_error">
          <h1>No movies! You can search by English name or unsigned keywords.</h1>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
