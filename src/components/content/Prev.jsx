import { FiChevronLeft} from "react-icons/fi";

function Prev({onClick,isNetflix}) {
  return (
    <div onClick={onClick} className={`prev-content ${isNetflix ? "big-btn" : ""}`}>
      <FiChevronLeft className="content-icon" />
    </div>
  );
}

export default Prev;
