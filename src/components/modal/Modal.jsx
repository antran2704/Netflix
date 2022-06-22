import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import * as types from "../store/actions";
import "./modal.scss";

function Modal({ movie, show }) {
  
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(types.getMoviesDetail(null));
  }
  return (
    <>
      <div
        onClick={handleClose}
        className={`container-modal ${show ? "show-background" : "hide-background"}`}
      ></div>
      <div className={`modal ${show ? "show-modal" : "hide-modal"}`} style = {movie ? {backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`} : {}}>
        <div className="wrap-modal">
          <div className="modal-content">
            <AiOutlineClose onClick={handleClose} className="modal-close" />
            <h3 className="modal-title">{movie && (movie.title || movie.original_name)}</h3>
            <div className="modal-detail">
              <div className="modal-number">
                <span className="modal-rating">{`Rating:${movie && movie.vote_average * 10}%`}</span>
                <span className="modal-popularity">{`Popularity:${movie && movie.popularity}`}</span>
              </div>
              <p className="modal-date">Release date: {movie && (movie.release_date || movie.first_air_date)}</p>
              <p className="modal-runtime">Runtime:m</p>
            </div>
            <p className="modal-desc">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
