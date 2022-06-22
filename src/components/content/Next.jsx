import {FiChevronRight } from "react-icons/fi";


function Next({onClick,isNetflix}) {
  return (
    <div onClick={onClick} className={`next-content ${isNetflix ? "big-btn" : ""}`}>
      <FiChevronRight className="content-icon" />
    </div>
  );
}

export default Next;
