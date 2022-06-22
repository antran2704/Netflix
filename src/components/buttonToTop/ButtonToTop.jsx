import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./buttonToTop.scss";

import { animateScroll } from "react-scroll";
import { useScrollY } from "../../hooks";
function ButtonToTop() {
  const [scrollY] = useScrollY();
  function scrollToTop() {
    animateScroll.scrollToTop();
  }
  return (
    <div 
    className="btn-to-top" 
    onClick={scrollToTop}
    style = {scrollY > 500 ? {visibility: 'unset'} : {visibility: "hidden"}}
    >
      <BsFillArrowUpCircleFill />
    </div>
  );
}

export default ButtonToTop;
