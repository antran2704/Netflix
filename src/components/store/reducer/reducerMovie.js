import * as Types from "../types";

const reducerMovieInitialState = {
  NetflixOriginal: null,
  TrendingMovies: null,
  TopratedMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  DocumentariesMovies: null,
  GetmoviesDetail: null,
  SearchMovies: null
};

const reducerMovie = (state = reducerMovieInitialState, action) => {
  switch (action.type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginal: action.payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: action.payload };
    case Types.GET_TOPRATED_MOVIES:
      return { ...state, TopratedMovies: action.payload };
    case Types.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: action.payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: action.payload };
    case Types.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: action.payload };
    case Types.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: action.payload };
    case Types.GET_DOCUMENTARIES_MOVIES:
      return { ...state, DocumentariesMovies: action.payload };

    case Types.GET_MOVIES_DETAIL:
      return { ...state, GetmoviesDetail: action.payload };
    case Types.SEARCH_MOVIES:
      return { ...state, SearchMovies: action.payload };
    default:
      return state;
  }
};
export default reducerMovie;
