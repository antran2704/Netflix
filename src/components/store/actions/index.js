import axios from "axios";
import * as Types from "../types";

const API_KEY = "342cb7f1adeb46b695407d2f5b6ad93e";
const BASE_URL = "https://api.themoviedb.org/3";
export const original_img = "https://image.tmdb.org/t/p/original";
export const w500_img = "https://image.tmdb.org/t/p/w500"

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netflix API error", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Trending movies API error", error);
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_TOPRATED_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Top rated movies API error", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=10749`
    );
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Action movies API error", error);
  }
};

export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Comedy movies API error", error);
  }
};

export const getHorrorMovies = () => async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
      );
      dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Horror movies API error", error);
    }
};

export const getRomanceMovies = () => async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
      );
      dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Romance movies API error", error);
    }
};

export const getDocumentariesMovies = () => async (dispatch) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
      );
      dispatch({ type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Documentaries movies API error", error);
    }
};

export const getMoviesDetail = function(movie) {
    return function(dispatch) {
      return dispatch({type: Types.GET_MOVIES_DETAIL, payload: movie})
    }
}
export const searchMovies = (movie) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
    );
    dispatch({ type: Types.SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Search movies API error", error);
  }
};