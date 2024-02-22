import { Link, useLocation } from "react-router-dom";
import "./index.css";
import links from "./links";

function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.link) ? "wd-active" : ""}
        >
          <Link to={link.fullLink ? link.label : `/Kanbas/${link.label}`}>
            {" "}
            {link.icon} {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
