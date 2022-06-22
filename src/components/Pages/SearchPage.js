import SearchMovies from "../searchMovies/SearchMovies";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";

function SearchPage() {
  const { GetmoviesDetail } = useSelector((state) => state.infoMovies);

  return (
    <div>
      <SearchMovies />
      <Modal movie={GetmoviesDetail} show={GetmoviesDetail ? true : false} />
    </div>
  );
}

export default SearchPage;
