import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../store/actions";
import "./content.scss";
import MovieRow from "./MovieRow";

function Content() {
  const dispatch = useDispatch();
  const { 
    NetflixOriginal, 
    TrendingMovies, 
    TopratedMovies, 
    ActionMovies ,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    DocumentariesMovies
  } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(type.getNetflixOriginals());
    dispatch(type.getTrendingMovies());
    dispatch(type.getTopRatedMovies());
    dispatch(type.getActionMovies());
    dispatch(type.getComedyMovies());
    dispatch(type.getHorrorMovies());
    dispatch(type.getRomanceMovies());
    dispatch(type.getDocumentariesMovies());
  }, [dispatch]);
  return (
    <div className="content">
      <MovieRow
        movies={NetflixOriginal}
        title="Netflix Originals"
        isNetflix="true"
      />
      <MovieRow movies={TrendingMovies} title="Trending Movies" idSection = "Trending Movies"/>
      <MovieRow movies={TopratedMovies} title="Top Rated Movies" idSection = "Top Rated Movies"/>
      <MovieRow movies={ActionMovies} title="Action Movies" idSection = "Action Movies"/>
      <MovieRow movies={ComedyMovies} title="Comedy Movies" idSection = "Comedy Movies"/>
      <MovieRow movies={HorrorMovies} title="Horror Movies" idSection = "Horror Movies"/>
      <MovieRow movies={RomanceMovies} title="Romance Movies" idSection = "Romance Movies"/>
      <MovieRow movies={DocumentariesMovies} title="Documantaries Movies" idSection = "Documantaries Movies"/>
    </div>
  );
}

export default Content;
