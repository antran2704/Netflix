import "./menu.scss";
import { randomColor } from "../../untils";
import { Link } from "react-scroll";
import { memo } from "react";
function MenuItem({ Icon, title, to }) {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-100}
      duration={500}
      delay={200}
      isDynamic={true}
      to={to}
      spyThrottle={500}
      className="menu-item"
    >
      <Icon style={{ color: randomColor(1) }} className="menu-icon" />
      <span className="menu-title">{title}</span>
    </Link>
  );
}

export default memo(MenuItem);
