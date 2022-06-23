import { AiOutlineSearch } from "react-icons/ai";
import NetflixLogo from "../../assets/imgs/Netflix-Logo.png";
import { useScrollY } from "../../hooks";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [scrollY] = useScrollY();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Netflix')
  },[])
  function handleChange(e) {
    let keywords = e.target.value;
    setKeyword(keywords);
    
    (keywords.length > 0)
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate('/Netflix');
  }
  return (
    <nav
      className="navbar"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <Link to= "/Netflix">
        <img className="navbar-logo" alt="" src={NetflixLogo} />
      </Link>
      <div>
        <AiOutlineSearch className="navbar-icon" />
        <input
          onChange={handleChange}
          value={keyword}
          type="text"
          placeholder="Input little, genres, people"
          className="navbar-input"
        />
      </div>
    </nav>
  );
}

export default Navbar;
